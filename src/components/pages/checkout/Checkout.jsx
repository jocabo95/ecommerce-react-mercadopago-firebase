import { Button, TextField } from "@mui/material";

const Checkout = ({ data }) => {
  const {handleChange, handleBuy, Wallet, preferenceId} = data;


  return (
    <div>
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
      {preferenceId && (
        <Wallet initialization={{ preferenceId, redirectMode: "self" }} />
      )}
    </div>
  );
};

export default Checkout;
