import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, doc, deleteDoc,  } from "firebase/firestore";

const DashboardContainer = () => {
  const [products, setProducts] = useState(); // stores all products from fb
  const [open, setOpen] = useState(false) // stores modal state
  const [dbChange, setDbChange] = useState(false)
  

  // function to close modal
  let handleClose =()=>{
    setOpen(false)
  }

  // get products from fb to show them in dashboard
  useEffect(() => {

    setDbChange(false)

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

  // edit prod from dashboard
  let addNewProduct = () =>{
    setOpen(true)
  }

  // remove prod from dashboard
  let removeProd = (id) =>{
    deleteDoc(doc(db, "products", id))
  }

  // modal style (form mui)
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
    addNewProduct,
    removeProd,
    style,
    handleClose,
    open,
    setOpen,
    setDbChange
  };

  return <Dashboard data={data} />;
};

export default DashboardContainer;
