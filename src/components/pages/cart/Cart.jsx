import { Button } from "@nextui-org/react"
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { NumericFormat } from "react-number-format";



const Cart = ({data}) => {

  const { cart, clearCart, deleteById, total } = data;

  return (
    <div>
      <h3>carrito</h3>
      {cart.map((prod) => {
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
      })}
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