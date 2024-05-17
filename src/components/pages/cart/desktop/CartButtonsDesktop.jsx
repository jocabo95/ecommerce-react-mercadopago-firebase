import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const CartButtonsDesktop = ({data}) => {

  const {total}=data;

  return (
    <Box
      sx={{
        width: "100%",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "background.dark",
      }}
    >
      <Typography sx={{ width: "100%", textAlign: "center" }}>
        <strong>TOTAL: $ {Intl.NumberFormat().format(total)} </strong>
      </Typography>

      <Link to="/checkout">
        <Button
          variant="contained"
          color="details"
          sx={{
            mt: "1rem",
            opacity: "0.9",
            color: "white",
          }}
        >
          Finalizar compra
        </Button>
      </Link>
    </Box>
  );
}

export default CartButtonsDesktop