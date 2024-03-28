import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Checkout = ({ data }) => {
  const {handleChange, handleBuy, Wallet, preferenceId, orderId} = data;


  return (
    <div>
      {!orderId ? (
        <>
          <TextField
            name="cp"
            variant="outlined"
            label="codigo postal"
            onChange={handleChange}
          />
          <TextField
            name="tel"
            variant="outlined"
            label="telefono"
            onChange={handleChange}
          />
          <Button onClick={handleBuy}>Mercado pago</Button>
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
