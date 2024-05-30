
import ShipmentCost from "./ShipmentCost";
import OrdersDashboard from "./OrdersDashboard";
import ProductsDashboard from "./ProductsDashboard";
import { Typography } from "@mui/material";

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
      <Typography
        className="page-title"
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem" },
          fontWeight: "200",
          letterSpacing: { xs: "0.5rem" },
          pl: "0rem",
        }}
      >
        DASHBOARD
      </Typography>

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
