
import ShipmentCost from "./ShipmentCost";
import OrdersDashboard from "./OrdersDashboard";
import ProductsDashboard from "./ProductsDashboard";
import PageHeader from "../../common/pageHeader/PageHeader";
import NavigationFilters from "../../common/topNavigationFilters/NavigationFilters";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { useEffect, useState } from "react";

const Dashboard = ({ data }) => {
  const {
    products,
    removeProd,
    style,
    handleClose,
    handleOpen,
    open,
    setDbChange,
    productTobeEdited,
    setproductTobeEdited,
  } = data;

  const [categories, setCategories] = useState([])

  useEffect(()=>{
    let refCategroiesCollection = collection(db, "dashboardCategories");
    getDocs(refCategroiesCollection)
      .then((res)=>{
        let categoriesArr = res.docs.map((el)=>{return {...el.data()}})
        setCategories(categoriesArr)
      })
      .catch((err)=>console.log(err))
  }, [])

  const productsChartData = {
    products,
    removeProd,
    style,
    handleClose,
    handleOpen,
    open,
    setDbChange,
    productTobeEdited,
    setproductTobeEdited,
  };

  const header = {header: "DASHBOARD"}

  const navigationCategories = { categories, redirectToUrl: "/dashboard" };

  return (
    <div>

      {/* HEADER */}
      <PageHeader data={header} />

      <NavigationFilters data={navigationCategories}/>

      {/* SHIPMENT COST */}
      <ShipmentCost />

      {/* ORDERS CHART */}
      <OrdersDashboard />

      {/* PRODUCTS CHART */}
      <ProductsDashboard data={productsChartData} />
    </div>
  );
};

export default Dashboard;
