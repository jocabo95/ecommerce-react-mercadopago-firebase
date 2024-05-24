import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import OrderSummary from "./checkoutForm/OrderSummary";
import Form from "./checkoutForm/Form";

const Checkout = ({ data }) => {
  const {Wallet, preferenceId, orderId} = data;

  return (
    <div>
      {!orderId ? (
        <Grid container>
          {/* ORDER SUMMARY */}
          <OrderSummary/>

          {/* FORM */}
          <Form data={data} />
        </Grid>
      ) : (
        <>
          <h4>El pago se realizo con exito</h4>
          <h4>Su numero de compra es {orderId}</h4>
          <Link to="/shop">Seguir comprando</Link>
          <Link to="/orders">mis ordenes</Link>
        </>
      )}

      {preferenceId && (
        <Wallet initialization={{ preferenceId, redirectMode: "self" }} />
      )}
    </div>
  );
};

export default Checkout;
