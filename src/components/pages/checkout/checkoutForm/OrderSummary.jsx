import { Box, Grid, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";


const OrderSummary = () => {

  const {cart, getTotalPrice} = useContext(CartContext);

  return (
    <Grid item xs={12} md={6}>
      <Paper
        elevation={4}
        sx={{
          m: { xs: "2rem", md: "3rem" },
          p: "1rem",
          height: { xs: "auto", md: "100%" },
        }}
      >
        <p>Total</p>
        <Typography variant="h4" sx={{ mb: "1.5rem", fontWeight: "500" }}>
          $ {Intl.NumberFormat().format(getTotalPrice())}
        </Typography>

        {/* product info */}
        <Box>
          {cart.map((prod) => {
            return (
              <Grid container key={prod.id} sx={{ mb: "1rem" }}>
                <Grid item xs={8}>
                  <Typography>{prod.title}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>
                    $ {Intl.NumberFormat().format(prod.unit_price)}
                  </Typography>
                </Grid>
              </Grid>
            );
          })}

          {/* costo envio */}
          <Grid container sx={{ mb: "1rem" }}>
            <Grid item xs={8}>
              <Typography>Costo de envío</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>$ {Intl.NumberFormat().format(3000)}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
}

export default OrderSummary