import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CartButtonsDesktop = ({ data }) => {
  // cityShipmentInfo is obj with info of all cities
  const { total, cityShipmentInfo } = data;
  
  const [selectedCity, setSelectedCity] = useState("Bogotá"); // city selected in <Select />
  const [selectedCityShipment, setSelectedCityShipment] = useState();


  useEffect(()=>{

    // get shipment value of selectedCity
    if(cityShipmentInfo){
      const shipmentValue = cityShipmentInfo.filter((el) => {
        el.city == selectedCity;
        setSelectedCityShipment(shipmentValue)
      });
    }

  },[selectedCity])

  let onChange = (e) => {
    setSelectedCity(e.target.value);
  };

  console.log("city", selectedCity);
  console.log("shipment", selectedCityShipment);

  return (
    <Box sx={{ width: "100%" }}>
      {/*//- SHIPING */}
      <Box
        sx={{
          width: "100%",
          p: "1rem",
          mb: "2rem",
          backgroundColor: "background.dark",
        }}
      >
        <Typography
          sx={{
            width: "100%",
            mb: "0.5rem",
            pb: "0.5rem",
            borderBottom: "solid thin black",
          }}
        >
          <strong>Costo de envío: $ </strong>
        </Typography>

        {/* slect city */}
        <TextField
          id="outlined-select-currency"
          select
          size="small"
          label="Ciudad"
          defaultValue="Bogotá"
          sx={{ width: "100%", my: "1rem" }}
          onChange={onChange}
        >
          {cityShipmentInfo &&
            cityShipmentInfo.map((el) => (
              <MenuItem key={el.id} value={el.city}>
                {el.city}
              </MenuItem>
            ))}
        </TextField>
      </Box>

      {/*//- TOTAL PRICE */}
      <Box
        sx={{
          width: "100%",
          p: "1rem",
          mb: "2rem",
          backgroundColor: "background.dark",
        }}
      >
        <Typography
          sx={{
            width: "100%",
            mb: "0.5rem",
            pb: "0.5rem",
            borderBottom: "solid thin black",
          }}
        >
          <strong>TOTAL: ${Intl.NumberFormat().format(total)} </strong>
        </Typography>

        <Typography sx={{ width: "100%" }}>
          Subtotal: ${Intl.NumberFormat().format(total)}
        </Typography>
        <Typography sx={{ width: "100%" }}>
          Envío: ${Intl.NumberFormat().format(total)}
        </Typography>

        <Link to="/checkout">
          <Button
            variant="contained"
            color="details"
            sx={{
              width: "100%",
              mt: "1rem",
              opacity: "0.9",
              color: "white",
            }}
          >
            Continuar
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default CartButtonsDesktop;
