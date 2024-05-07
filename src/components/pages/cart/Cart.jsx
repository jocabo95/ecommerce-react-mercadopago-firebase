import "./cart.css";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { NumericFormat } from "react-number-format";
import CartDesktop from "./desktop/CartDesktop";
import CartMobile from "./mobile/CartMobile";

const Cart = ({ data }) => {
  const { cart, clearCart, deleteById, total } = data;

  const cartData = {cart, deleteById}

  const theme = useTheme()
  const desktopQuery = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <div>
      {/* //- header */}
      <Typography
        className="page-title"
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem" },
          fontWeight: "200",
          letterSpacing: { xs: "0.5rem" },
          pl: { xs: "1rem", md: "3rem" },
        }}
      >
        CARRITO
      </Typography>

      {/* //- IMG, PRODUCT, PRICE, DELTE ITEM */}
      <Grid container sx={{ px: { xs: "1rem", sm: "3rem" } }}>
        {desktopQuery ? (
          <CartDesktop data={cartData} />
        ) : (
          <CartMobile data={cartData} />
        )}
      </Grid>

      {/* //- BUTTONS, TOTAL */}
      <Button onClick={clearCart}>Limpiar el carrito</Button>
      <Typography>
        Total:{" "}
        <NumericFormat
          value={total}
          thousandSeparator=","
          prefix="$"
          suffix=" COP"
        />
      </Typography>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};

export default Cart;
