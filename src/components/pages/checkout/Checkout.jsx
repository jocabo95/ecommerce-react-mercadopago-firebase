import { Link } from "react-router-dom";
import CheckoutForm from "./checkoutForm/CheckoutForm";

const Checkout = ({ data }) => {
  const {handleChange, handleBuy, Wallet, preferenceId, orderId} = data;

  const formData = {
    handleChange, handleBuy
  }
  return (
    <div>
      {!orderId ? (
        <>
          <CheckoutForm data={formData}/>
        </>
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
