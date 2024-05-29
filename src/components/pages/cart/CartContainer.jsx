import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Cart from "./Cart";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const CartContainer = () => {

  const [allCitiesShipmentInfo, setCityShipmentInfo] = useState(null)
  const [selectedCity, setSelectedCity] = useState("Bogotá"); // city selected in <Select />
  const [selectedCityShipmentInfo, setSelectedCityShipment] = useState();

  let { cart, clearCart, deleteById, getTotalPrice } = useContext(CartContext);
  let total = getTotalPrice();

  // fetch shipment info of all cities
  useEffect(()=>{
    const refShipmentInfo = collection(db, "shipment");
    getDocs(refShipmentInfo).then((res) => {
      const arr = res.docs.map((el) => {
        return { ...el.data(), id: el.id };
      });

      setCityShipmentInfo(arr);
    });
  },[])

  // get shipment value of selectedCity
  useEffect(()=>{
  
    if (allCitiesShipmentInfo) {
      const shipmentValue = allCitiesShipmentInfo.find((el) => {
         return el.city === `${selectedCity}`;
      });

      setSelectedCityShipment(shipmentValue);
    }
  },[selectedCity, allCitiesShipmentInfo])

  // capture city value from <Select />
  let onChange = (e) => {
    setSelectedCity(e.target.value);
  };

  console.log('shipmentValue= ', selectedCityShipmentInfo);

  const data = {
    cart,
    clearCart,
    deleteById,
    total,
    allCitiesShipmentInfo,
    selectedCityShipmentInfo,
    onChange
  };

  return <Cart data={data} />;
};

export default CartContainer;
