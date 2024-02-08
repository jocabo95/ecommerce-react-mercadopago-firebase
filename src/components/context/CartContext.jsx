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
  let deleteById = (id) => {
    let newCart = cart.filter((el) => {
      return el.id !== id;
    });

    setCart(newCart);
  };

  let clearCart = () => {
    setCart({});
  };

  let getTotalPrice = () => {
    let total = cart.reduce((total, prod) => {
      return total + prod.quantity * prod.unit_price;
    }, 0);

    return total;
  };

  const data = {
    addToCart,
    clearCart,
    cart,
    getQuantity,
    deleteById,
    getTotalPrice,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
