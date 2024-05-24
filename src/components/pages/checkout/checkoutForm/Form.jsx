import { Box, Button, Grid, MenuItem, TextField, Typography } from "@mui/material";

const Form = ({data}) => {


  const {handleChange, handleBuy}=data;

  const clientData = [
    { name: "nombre", example: "Pedro" },
    { name: "apeliido", example: "González" },
    { name: "teléfono", example: "312 834 209|" },
    { name: "correo", example: "pedro.gonzalez@gmail.com" },
    { name: "verificar correo", example: "pedro.gonzalez@gmail.com" },
  ];

  const ciudades = ["Bogotá", "Medellin", "Cartagena", "Otras"];

  return (
    <Grid
      item
      xs={12}
      md={5}
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
  );
}

export default Form