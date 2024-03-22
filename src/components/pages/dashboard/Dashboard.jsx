
import ShipmentCost from "./ShipmentCost";
import OrdersDashboard from "./OrdersDashboard";
import ProductsDashboard from "./ProductsDashboard";

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

  return (
    <div>

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
