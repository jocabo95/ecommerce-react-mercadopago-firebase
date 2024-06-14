import { Box, Button, TextField, Typography } from "@mui/material";
import "../../dashboards.css";

const ShipmentForm = ({data}) => {
  const { cityToEdit, handleChange, handleSubmit } = data;

  console.log('cityToEdit= ', cityToEdit);

  return (
    <Box className="dashboard-form-container">
      
      <form className="dashboard-form">
        <Typography>Costo de Envío</Typography>
        <TextField
          label="Ciudad"
          defaultValue={cityToEdit?.city}
          variant="outlined"
          name="city"
          onChange={handleChange}
        />
        <TextField
          label="Costo de envío (COP)"
          defaultValue={cityToEdit?.shipment}
          variant="outlined"
          name="shipment"
          onChange={handleChange}
        />
        <TextField
          label="Tiempo de entrega (días habiles)"
          defaultValue={cityToEdit?.deliveryDays}
          variant="outlined"
          name="deliveryDays"
          onChange={handleChange}
        />

        <Button type="submit" onClick={handleSubmit}>Finalizar</Button>
      </form>
    </Box>
  );
};

export default ShipmentForm;
