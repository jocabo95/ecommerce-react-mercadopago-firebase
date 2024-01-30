import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);

  let addToCart = (product, quantity) => {
    let checkProduct = cart.some((el) => {
      return el.id === product.id;
    });

    if (checkProduct) {
      let newArr = cart.map((el) => {
        if (el.id === product.id) {
          return { ...el, quantity: quantity };
        } else {
          return { el };
        }
      });

      setCart(newArr);
    } else {
      let newProd = { ...product, quantity: quantity };
      setCart([...cart, newProd]);
    }
  };

  let getQuantity = (id) => {
    let desiredProd = cart.find((el) => {
      return el.id === id;
    });

    return desiredProd ? desiredProd.quantity : 1;
  };

  // delete item from cart

  let clearCart = () => {
    setCart({});
  };

  const data = { addToCart, clearCart, cart, getQuantity };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
