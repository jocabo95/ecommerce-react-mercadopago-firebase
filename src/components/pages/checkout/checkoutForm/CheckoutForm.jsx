import {
  Box,
  Button,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CheckoutForm = ({ data }) => {
  const { getTotalPrice, cart } = useContext(CartContext);

  const { handleChange, handleBuy } = data;

  const clientData = [
    { name: "nombre", example: "Pedro" },
    { name: "apeliido", example: "González" },
    { name: "teléfono", example: "312 834 209|" },
    { name: "correo", example: "pedro.gonzalez@gmail.com" },
    { name: "verificar correo", example: "pedro.gonzalez@gmail.com" },
  ];

  const ciudades = ["Bogotá", "Medellin", "Cartagena", "Otras"];

  console.log("Cart: ", cart);

  return (
    <Grid container>
      {/* ORDER SUMMARY */}
      <Grid item xs={12} md={5}>
        <Paper
          elevation={4}
          sx={{
            m: { xs: "1rem", md: "3rem" },
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
                <Typography>
                  $ {Intl.NumberFormat().format(3000)}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>

      {/* FORM */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          mx: { xs: "1rem", md: "2rem", height: "100%" },
          mt: { xs: "1rem", md: "3rem", height: "100%" },
        }}
      >
        {clientData.map((el) => {
          return (
            <Box key={el}>
              <Typography sx={{ fontWeight: "600" }}>{el.name}</Typography>
              <TextField
                name={el.name}
                variant="outlined"
                size="small"
                fullWidth
                onChange={handleChange}
                sx={{ mb: "1rem", mr: "1rem" }}
              />
            </Box>
          );
        })}

        <Typography sx={{ fontWeight: "600" }}>Ciudad</Typography>
        <TextField
          id="filled-select-currency"
          select
          label="Select"
          variant="outlined"
          fullWidth
        >
          {ciudades.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        {/* <TextField
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
        /> */}
        <Button
          onClick={handleBuy}
          variant="contained"
          color="details"
          sx={{
            mt: "3rem",
            opacity: "0.9",
            color: "white",
            width: "100%",
          }}
        >
          Pagar
        </Button>
      </Grid>
    </Grid>
  );
};

export default CheckoutForm;
