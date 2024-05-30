import "./shopHeader.css";
import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";
import { Link } from "react-router-dom";
import PageHeader from "../../../common/pageHeader/PageHeader";
import NavigationFilters from "../../../common/topNavigationFilters/NavigationFilters";

const ShopHeader = () => {

  const [categories, setCategories] = useState([]) // stores product categories from firebase
  
  useEffect(()=>{

    const categoriesCollection = collection(db, "categories")

    getDocs(categoriesCollection)
      .then((res)=>{
        let categoriesArr = res.docs.map((el)=>{return {...el.data()}})

        setCategories(categoriesArr)
      }
    )

  },[])

  const header= {header: "MOBILIARIO"}
  const navigationCategories = {categories, redirectToUrl:'/shop'}

  return (
    <Box sx={{ px: { xs: "1rem", md: "3rem" } }}>

      {/* HEADER */}
      <PageHeader data={header}/>

      {/* NAV MENU */}
      <NavigationFilters data={navigationCategories}/>

      
    </Box>
  );
};

export default ShopHeader;
