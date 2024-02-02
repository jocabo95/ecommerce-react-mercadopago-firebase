import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Button } from "@nextui-org/react"
import { Typography } from "@mui/material";

const Cart = () => {

    let { cart, clearCart, deleteById, getTotalPrice} = useContext(CartContext);

    let total = getTotalPrice();

  return (
    <div>
        <h3>carrito</h3>
        {
          cart.map((prod)=>{
            return(
              <div key={prod.id}>
                <img src={prod.img}/>
                <p>{prod.title}</p>
                <p>{prod.quantity}</p>
                <Button onClick={()=>deleteById(prod.id)}>Eliminar del carrito</Button>
              </div>
            )
          })
        }
        <Button onClick={clearCart}>Limpiar el carrito</Button>
        <Typography>Total: {total}</Typography>
    </div>
  )
}

export default Cart