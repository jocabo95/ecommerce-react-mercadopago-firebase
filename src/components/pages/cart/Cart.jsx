import "./cart.css"
import { Button } from "@nextui-org/react"
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { NumericFormat } from "react-number-format";



const Cart = ({data}) => {

  const { cart, clearCart, deleteById, total } = data;

  return (
    <div>
      <Typography
        className="page-title"
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem" },
          fontWeight: "200",
          letterSpacing: { xs: "0.5rem" },
          pl:{xs:"1rem", md:"3rem"},
        }}
      >
        CARRITO
      </Typography>

      <Grid container sx={{px:{xs:"1rem", sm:"3rem"}}}>

        {
          //! if md => generate table header
        }

        {
          cart.map((el)=>{
            return (
              //- product row
              <Grid
                item
                container
                key={el.id}
                xs={12}
                sx={{ borderBottom: "solid thin grey", p:"1rem" }}
              >
                {/* //- product info */}
                <Grid item xs={12} md={2}>
                  <img src={el.img} />
                </Grid>
                <Grid item xs={8} md={2}>
                  <Typography>{el.title}</Typography>
                </Grid>
                <Grid item xs={8} md={2}>
                  <Typography>precio= {el.unit_price}</Typography>
                </Grid>
                <Grid item xs={8} md={2}>
                  <Typography>Unidades= {el.quantity}</Typography>
                </Grid>
                <Grid item xs={8} md={2}>
                  <Typography> SUBTOTAL= {el.unit_price * el.quantity}</Typography>
                </Grid>

              </Grid>
            );
            
          })
        }
      </Grid>
      {/* {cart.map((prod) => {
        return (
          <div key={prod.id}>
            <img src={prod.img} />
            <p>{prod.title}</p>
            <p>{prod.quantity}</p>
            <Button onClick={() => deleteById(prod.id)}>
              Eliminar del carrito
            </Button>
          </div>
        );
      })} */}

      <Button onClick={clearCart}>Limpiar el carrito</Button>
      <Typography>
        Total:{" "}
        <NumericFormat
          value={total}
          thousandSeparator=","
          prefix="$"
          suffix=" COP"
        />
      </Typography>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
}

export default Cart