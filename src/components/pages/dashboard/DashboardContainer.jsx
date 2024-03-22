import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import { db, storage } from "../../../firebaseConfig";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

const DashboardContainer = () => {
  const [products, setProducts] = useState(); // stores all products from fb
  const [open, setOpen] = useState(false); // stores modal state
  const [dbChange, setDbChange] = useState(false); // registers when a change is made to products colection
  const [productTobeEdited, setproductTobeEdited] = useState(null);

  // function to close modal
  let handleClose = () => {
    setOpen(false);
    setproductTobeEdited(null);
  };

  //open modal
  let handleOpen = (product) => {
    setproductTobeEdited(product);
    setOpen(true);
  };

  // get products from fb to show them in dashboard
  useEffect(() => {
    setDbChange(false);

    let productsCollection = collection(db, "products");
    getDocs(productsCollection)
      .then((res) => {
        const prodArr = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });

        setProducts(prodArr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dbChange]);

  // remove prod from dashboard
  let removeProd = async (product) => {
    deleteDoc(doc(db, "products", product.id));

    const imgRef = ref(storage, product.img);
    await deleteObject(imgRef);

    setDbChange(true);
  };

  // modal style (from mui)
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const data = {
    products,
    removeProd,
    style,
    handleClose,
    handleOpen,
    open,
    setOpen,
    setDbChange,
    productTobeEdited,
    setproductTobeEdited,
  };

  return <Dashboard data={data} />;
};

export default DashboardContainer;
