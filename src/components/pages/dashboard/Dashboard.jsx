import OrdersDashboard from "./orders/OrdersDashboard";
import PageHeader from "../../common/pageHeader/PageHeader";
import NavigationFilters from "../../common/topNavigationFilters/NavigationFilters";
import ShipmentCost from "./shipment/ShipmentCost";
import ProductsDashboardContainer from "./products/ProductsDashboardContainer";

const Dashboard = ({data}) => {

  const {modalStyle, categories} = data;



  const header = { header: "DASHBOARD" };

  const navigationCategories = { categories, redirectToUrl: "/dashboard" };

  return (
    <div>
      {/* HEADER */}
      <PageHeader data={header} />

      <NavigationFilters data={navigationCategories} />

      {/* SHIPMENT COST */}
      <ShipmentCost />

      {/* ORDERS CHART */}
      <OrdersDashboard />

      {/* PRODUCTS CHART */}
      <ProductsDashboardContainer data={modalStyle} />
    </div>
  );
};

export default Dashboard;
