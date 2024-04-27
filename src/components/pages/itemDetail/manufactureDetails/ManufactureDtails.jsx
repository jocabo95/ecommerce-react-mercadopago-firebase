import { Button, Typography } from "@mui/material";
import { useState } from "react";

const ManufactureDtails = ({data}) => {

    const{product, addToCart, counter}=data;

    const [acceptConditions, setAcceptConditions] = useState(false);


    let handleConditions = () => {
      if (acceptConditions) {
        setAcceptConditions(false);
      } else {
        setAcceptConditions(true);
      }
    };

  return (
    <>
      {product.stock === 0 ? (
        <>
          <Typography variant="body2" sx={{ mt: "2rem", fontWeight: "600" }}>
            Entiendo que el tiempo de producción de este producto es de{" "}
            {product.productionTime} días hábiles luego de realizada su compra
          </Typography>
        </>
      ) : (
        <Button
          color="secondary"
          variant="outlined"
          sx={{ width: "100%", mt: "1rem", mx: "auto" }}
          onClick={() => addToCart(product, counter)}
        >
          Agregar al carrito
        </Button>
      )}

      {acceptConditions ? (
        <Button
          color="secondary"
          variant="outlined"
          sx={{ width: "100%", mt: "1rem", mx: "auto" }}
          onClick={() => addToCart(product, counter)}
        >
          Agregar al carrito
        </Button>
      ) : (
        <>
          <Button
            color="details"
            variant="outlined"
            sx={{ width: "100%", mt: "1rem", mx: "auto" }}
            onClick={handleConditions}
          >
            Acepto terminos de entrega
          </Button>
          <Button
            disabled
            variant="contained"
            sx={{ width: "100%", mt: "1rem", mx: "auto" }}
          >
            Agregar al carrito
          </Button>
        </>
      )}
    </>
  );
}

export default ManufactureDtails