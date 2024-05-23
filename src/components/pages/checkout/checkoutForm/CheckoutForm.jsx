import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CheckoutForm = ({ data }) => {
  const { getTotalPrice, cart } = useContext(CartContext);

  const { handleChange, handleBuy } = data;

  console.log("Cart: ", cart);

  return (
    <Grid container>
      {/* ORDER SUMMARY */}
      <Grid item xs={12} md={5}>
        <Paper
          sx={{ m: { xs: "1rem", md: "3rem", height: "100%" }, p: "1rem" }}
        >
          <p>Total</p>
          <Typography variant="h4" sx={{ mb: "1rem", fontWeight: "500" }}>
            $ {Intl.NumberFormat().format(getTotalPrice())}
          </Typography>

          {/* product info */}
          <Box>
            {cart.map((prod) => {
              return (
                <Grid container key={prod.id} sx={{ mb: "1rem" }}>
                  <Grid item xs={8}>
                    <Box>
                      <Typography>{prod.title}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>
                      $ {Intl.NumberFormat().format(prod.unit_price)}
                    </Typography>
                  </Grid>
                </Grid>
              );
            })}
          </Box>
        </Paper>
      </Grid>

      {/* FORM */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          mr: { xs: "1rem", md: "3rem", height: "100%" },
          mt: { xs: "1rem", md: "3rem", height: "100%" },
          p: "1rem",
        }}
      >
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
      </Grid>
    </Grid>
  );
};

export default CheckoutForm;
