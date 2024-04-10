import { db } from "../../../firebaseConfig";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

import { useNavigate, useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null)
  const navigate = useNavigate()

  let { mobiliario } = useParams();

  let homeCategory = mobiliario;

  console.log("categ= ",selectedCategory)

  // get product collection from firebase & store in state
  useEffect(() => {
    const productsCollection = collection(db, "products");

    let displayProducts;

    if(selectedCategory){
      console.log("category= ",selectedCategory)
      displayProducts = query(productsCollection, where("category", "==", selectedCategory))
    }else if(homeCategory){
      displayProducts = query(
        productsCollection,
        where("category", "==", homeCategory)
      );

    }else{
      displayProducts = productsCollection
    }

    getDocs(displayProducts)
      .then((res) => {
        let newarr = res.docs.map((product) => {
          return { ...product.data(), id: product.id }; // product.id has role ok key when mapping 
        });

        setProducts(newarr);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [selectedCategory]);

  let filterProductByCategory = (desiredCategory) =>{
    setSelectedCategory(desiredCategory);
  }

  const data = {
    products, 
    navigate,
    selectedCategory,
    filterProductByCategory,
  }
  return (
    <ItemList data={data}/>
  );
};

export default ItemListContainer;
