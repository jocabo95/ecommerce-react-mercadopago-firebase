import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () => {

    let {cart} = useContext(CartContext)
   console.log("Cart= ", cart)
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
              </div>
            )
          })
        }
    </div>
  )
}

export default Cart