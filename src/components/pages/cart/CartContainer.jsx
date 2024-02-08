import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Cart from "./Cart";

const CartContainer = () => {

  let { cart, clearCart, deleteById, getTotalPrice } = useContext(CartContext);

  let total = getTotalPrice();

  const data = {
    cart,
    clearCart,
    deleteById,
    total
  };

  return <Cart data={data} />;
};

export default CartContainer;
