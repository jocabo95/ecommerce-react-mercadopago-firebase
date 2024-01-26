import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextComponent = ({children}) => {

    const [cart, setCart] = useState ({})

    // fn add to cart
    let addToCart = (product, quantity) => {

        let newProd = {...product, quantity: quantity}
        setCart({...cart, newProd})
    }

    // delete item from cart
    let deleteItem = (id) => {
        
    }

    // fn clear cart
    let clearCart = () =>{
        setCart({})
    }

    // 



    const data ={addToCart, clearCart, cart}

  return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextComponent