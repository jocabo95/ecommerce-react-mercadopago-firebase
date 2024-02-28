import axios from "axios";
import Checkout from "./Checkout";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const CheckoutContainer = () => {
  // variable to store id given by mercadopago
  const [preferenceId, setPreferenceId] = useState(null);
  const [userData, setUserData] = useState({
    cp: "",
    tel: "",
  });
  const [orderId, setOrderId] = useState(null);

  const { user } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  initMercadoPago("import.meta.env.VITE_publicKey", {
    locale: "es-CO",
  });

  // makes sumary of cart and makes post to backend
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

      return id;
    } catch (error) {
      console.log(error);
    }
  };

  // store params to check if mercadopago transaction was succesfull
  let location = useLocation();
  let queryParams = new URLSearchParams(location.search);
  let payment = queryParams.get("status");

  // if desired param is positive, post order to fb and reduce stock
  useEffect(() => {
    let order = JSON.parse(localStorage.get("order"));

    if (payment === "approved") {
      let refCollection = collection(db, "orders");
      addDoc(refCollection, { ...order, date: serverTimestamp() })
        .then((res) => {
          setOrderId(res.id);
        })
        .catch((err) => console.log(err));
    }

    order.products.forEach((product) => {
      updateDoc(doc(db, "products", product.id), {stock: product.stock - product.quantity})
    });

    localStorage.removeItem("order")
  }, [payment]);

  // Stores id given by mercadopago. creates order obj and stores it in local storage while mercadopago is working
  const handleBuy = async () => {
    const order = {
      "codigo postal": userData.cp,
      telefono: userData.tel,
      products: cart,
      email: user.email,
    };

    localStorage.setItem("order", JSON.stringify(order));

    try {
      const id = await createPreference();

      if (id) {
        setPreferenceId(id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  let handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const data = { handleChange, handleBuy, Wallet, preferenceId };

  return (
    <>
      {!orderId ? (
        <Checkout data={data} />
      ) : (
        <div>
          <h1>se hizo pago</h1>
          <h4>order id: {orderId}</h4>
        </div>
      )}
    </>
  );
};

export default CheckoutContainer;
