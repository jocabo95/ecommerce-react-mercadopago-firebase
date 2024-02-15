import axios from "axios";
import Checkout from "./Checkout";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const CheckoutContainer = () => {

  const [preferenceId, setPreferenceId]=useState(null)

  const { cart } = useContext(CartContext);
  initMercadoPago("import.meta.env.VITE_publicKey", {
    locale: "es-CO",
  });

  const createPreference = async () => {
    let summarizedArr = cart.map((el) => {
      return {
        title: el.title,
        unit_price: el.unit_price,
        quantity: el.quantity,
      };
    });

    try {
      let post = await axios.post("http://localhost:8000/create_preference", {
        items: summarizedArr,
        shipment_cost: 10,
      });
      const { id } = post.data;

      return id
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async()=>{
    try {
        const id = await createPreference();

        if (id) {
          setPreferenceId(id);
        }
    } catch (error) {
        console.log(error)
    }
  }

  const data = {handleBuy, Wallet, preferenceId};

  return <Checkout data={data} />;
};

export default CheckoutContainer;
