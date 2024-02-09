import { Button } from "@mui/material";

const Checkout = ({ data }) => {
  const {handleBuy, Wallet, preferenceId} = data;
  return(
    <div>
        <Button onClick={handleBuy}>Mercado pago</Button>
        {
            preferenceId && <Wallet initialization={{preferenceId, redirectMode:"self"}}/>
        }
    </div>
  );
};

export default Checkout;
