import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const Form = ({data}) => {


  const {handleChange, handleBuy}=data;

  const clientData = [
    { name: "nombre"},
    { name: "apeliido"},
    { name: "teléfono"},
    { name: "correo"},
    { name: "verificar correo"},
  ];


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
      <form>
        {clientData.map((el) => {
          return (
            <Box key={el.name}>
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
      </form>

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
    </Grid>
  );
}

export default Form