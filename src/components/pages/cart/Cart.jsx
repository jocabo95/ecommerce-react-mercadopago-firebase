import "./cart.css";
import { Link } from "react-router-dom";
import { Button, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import CartDesktop from "./desktop/CartDesktop";
import CartMobile from "./mobile/CartMobile";
import CartButtonsDesktop from "./desktop/CartButtonsDesktop";

const Cart = ({ data }) => {
  const { cart, deleteById, total, cityShipmentInfo } = data;

  const cartData = { cart, deleteById };
  const cartButtonsData = { total, cityShipmentInfo };

  const theme = useTheme();
  const desktopQuery = useMediaQuery(theme.breakpoints.up("md"));

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

      {/* //- DESKTOP IMG, PRODUCT, PRICE, DELTE ITEM */}
      <Grid container sx={{ px: { xs: "1rem", sm: "3rem" } }}>
        {desktopQuery ? (
          <>
            <Grid item xs={9}>
              <CartDesktop data={cartData} />
            </Grid>

            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <CartButtonsDesktop data={cartButtonsData} />
            </Grid>
          </>

          //- MOBILE IMG, PRODUCT, PRICE, DELTE ITEM */}
        ) : (
          <>
            <CartMobile data={cartData} />
            <Typography
              sx={{
                width: "100%",
                textAlign: "center",
                backgroundColor: "background.dark",
                mt: "2rem",
              }}
            >
              <strong>TOTAL: $ {Intl.NumberFormat().format(total)} </strong>
            </Typography>

            <Link to="/checkout" style={{width:"100%"}}>
              <Button
                variant="contained"
                color="details"
                sx={{
                  mt: "1rem",
                  opacity: "0.9",
                  color: "white",
                  width: "100%",
                }}
              >
                Finalizar compra
              </Button>
            </Link>
          </>
        )}
      </Grid>

      {/* //- BUTTONS, TOTAL */}
    </div>
  );
};

export default Cart;
