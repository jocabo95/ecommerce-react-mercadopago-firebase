import { db } from "../../../firebaseConfig";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import { useNavigate } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()

  // get product collection from firebase & store in state
  useEffect(() => {
    const refCollection = collection(db, "products");
    getDocs(refCollection)
      .then((res) => {
        let newarr = res.docs.map((product) => {
          return { ...product.data(), id: product.id }; // product.id has role ok key when mapping 
        });

        setProducts(newarr);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  const data = {
    products, 
    navigate
  }
  return (
    <ItemList data={data}/>
  );
};

export default ItemListContainer;
