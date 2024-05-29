import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Cart from "./Cart";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const CartContainer = () => {

  const [cityShipmentInfo, setCityShipmentInfo] = useState(null)

  let { cart, clearCart, deleteById, getTotalPrice } = useContext(CartContext);
  let total = getTotalPrice();

  useEffect(()=>{
    const refShipmentInfo = collection(db, 'shipment')
    getDocs(refShipmentInfo)
    .then((res)=>{
      const arr = res.docs.map((el)=>{
        return { ...el.data(), id: el.id };
      })

      setCityShipmentInfo(arr)
    })
  },[])

  console.log('cityShipmentInfo', cityShipmentInfo);

  const data = {
    cart,
    clearCart,
    deleteById,
    total,
    cityShipmentInfo
  };

  return <Cart data={data} />;
};

export default CartContainer;
