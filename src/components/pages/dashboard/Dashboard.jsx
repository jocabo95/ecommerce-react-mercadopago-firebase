
import ShipmentCost from "./ShipmentCost";
import OrdersDashboard from "./OrdersDashboard";
import ProductsDashboard from "./ProductsDashboard";
import PageHeader from "../../common/pageHeader/PageHeader";
import NavigationFilters from "../../common/topNavigationFilters/NavigationFilters";

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

  const categories = [
    { category: "Productos" },
    { category: "Envios" },
    { category: "Proyectos" },
    { category: "Revistas" },
    { category: "OC" },
  ]

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
