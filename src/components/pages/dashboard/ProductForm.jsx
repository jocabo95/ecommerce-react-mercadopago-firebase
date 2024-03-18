import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { db, uploadImg } from "../../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const ProductForm = ({ handleClose, setDbChange }) => {
  const [imgFile, setImgFile] = useState(null);
  const [prodInfo, setProdInfo] = useState({
    title: "",
    description: "",
    category: "",
    stock: 0,
    unit_price: 0,
    img: "",
  });

  let handleChange = (e) => {
    setProdInfo({
      ...prodInfo,
      [e.target.name]: e.target.value,
    });
  };

  let handleImgFile = async () => {
    try {
      let imgUrl = await uploadImg(imgFile);
      setProdInfo({ ...prodInfo, img: imgUrl });
    } catch (error) {
      console.log(error);
    }
  };

  // send new product info to firebase
  let handleSubmit = (e) => {
    e.preventDefault();

    let newProduct = {
      ...prodInfo,
      stock: +prodInfo.stock,
      unit_price: +prodInfo.unit_price,
    };

    let productsCollection = collection(db, "products");
    addDoc(productsCollection, newProduct)
      .then(() => {
        // CERRAR MODAL Y VOLVER A CARGAR DASHBOARD
        setDbChange(true);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
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
          variant="outlined"
          name="title"
          onChange={handleChange}
        ></TextField>
        <TextField
          label="descripción"
          variant="outlined"
          name="description"
          onChange={handleChange}
        ></TextField>
        <TextField
          label="categoria"
          variant="outlined"
          name="category"
          onChange={handleChange}
        ></TextField>
        <TextField
          label="stock"
          variant="outlined"
          name="stock"
          onChange={handleChange}
        ></TextField>
        <TextField
          label="precio"
          variant="outlined"
          name="unit_price"
          onChange={handleChange}
        ></TextField>
        <TextField
          type="file"
          onChange={(e) => setImgFile(e.target.files[0])}
        />
        {imgFile && (
          <Button type="button" onClick={() => handleImgFile(imgFile)}>
            Cargar imagen
          </Button>
        )}

        <Button type="submit" variant="outlined">
          Agregar
        </Button>
      </form>
    </div>
  );
};

export default ProductForm;
