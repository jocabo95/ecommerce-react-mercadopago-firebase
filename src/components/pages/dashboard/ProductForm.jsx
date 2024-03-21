import { Button, CircularProgress, TextField } from "@mui/material";
import { useState } from "react";
import { db, storage, uploadImg } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc} from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

const ProductForm = ({
  handleClose,
  setDbChange,
  productTobeEdited,
  setproductTobeEdited,
}) => {
  const [imgFile, setImgFile] = useState(null);
  const [progressUpload, setProgressUpload] = useState(false); // records upload duration to show progress bar
  const [uploadDone, setUploadDone] = useState(false); // tells when upload is done
  const [prodInfo, setProdInfo] = useState({
    title: "",
    description: "",
    category: "",
    stock: 0,
    unit_price: 0,
    img: "",
  });

  let handleChange = (e) => {
    if (productTobeEdited) {
      setproductTobeEdited({
        ...productTobeEdited,
        [e.target.name]: e.target.value,
      });
    } else {
      setProdInfo({
        ...prodInfo,
        [e.target.name]: e.target.value,
      });
    }
  };

  let handleImgFile = async () => {
    setProgressUpload(true);
    setUploadDone(false);

    try {
      if (productTobeEdited) {
        //delete current img fron fb
        const imgRef = ref(storage, productTobeEdited.img);
        await deleteObject(imgRef);

        // upload new img to fb & update productTobeEdited
        let imgUrl = await uploadImg(imgFile);

        setproductTobeEdited({ ...productTobeEdited, img: imgUrl });
      } else {
        let imgUrl = await uploadImg(imgFile);
        setProdInfo({ ...prodInfo, img: imgUrl });
      }

      setProgressUpload(false);
      setUploadDone(true);
    } catch (error) {
      console.log(error);
    }
  };

  // send new product info to firebase
  let handleSubmit = (e) => {
    e.preventDefault();

    setUploadDone(false);

    let productsCollection = collection(db, "products");

    if(productTobeEdited){
      let editedProduct={
        ...productTobeEdited,
        stock: +productTobeEdited.stock,
        unit_price: +productTobeEdited.unit_price
      }

      updateDoc(doc(productsCollection, productTobeEdited.id), editedProduct)
      .then(()=>{
        handleClose();
        setDbChange(true);
      })

    }
    else{
      let newProduct = {
        ...prodInfo,
        stock: +prodInfo.stock,
        unit_price: +prodInfo.unit_price,
      };
      
      addDoc(productsCollection, newProduct)
        .then(() => {
          // CERRAR MODAL Y VOLVER A CARGAR DASHBOARD
          handleClose();
          setDbChange(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }

  };

  return (
    <div>
      <form
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="producto"
          defaultValue={productTobeEdited?.title}
          variant="outlined"
          name="title"
          onChange={handleChange}
        ></TextField>
        <TextField
          label="descripción"
          defaultValue={productTobeEdited?.description}
          variant="outlined"
          name="description"
          onChange={handleChange}
        ></TextField>
        <TextField
          label="categoria"
          defaultValue={productTobeEdited?.category}
          variant="outlined"
          name="category"
          onChange={handleChange}
        ></TextField>
        <TextField
          label="stock"
          defaultValue={productTobeEdited?.stock}
          variant="outlined"
          name="stock"
          onChange={handleChange}
        ></TextField>
        <TextField
          label="precio"
          defaultValue={productTobeEdited?.unit_price}
          variant="outlined"
          name="unit_price"
          onChange={handleChange}
        ></TextField>
        <TextField
          type="file"
          onChange={(e) => setImgFile(e.target.files[0])}
        />

        {/* shows loading bar while img is being uploaded */}
        {/* {imgFile ? (
          progressUpload? (
            <CircularProgress />
          ) : (
              <Button color="secondary" type="button" onClick={() => handleImgFile(imgFile)}>
                Cargar imagen
              </Button>
          )
        ) : null} */}

        {imgFile ? (
          progressUpload ? (
            <CircularProgress />
          ) : uploadDone ? (
            <Button type="submit">Finalizar</Button>
          ) : (
            <Button
              color="secondary"
              type="button"
              onClick={() => handleImgFile(imgFile)}
            >
              Cargar imagen
            </Button>
          )
        ) : null}

      </form>
    </div>
  );
};

export default ProductForm;
