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
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const CheckoutContainer = () => {
  const [preferenceId, setPreferenceId] = useState(null); // variable to store id given by mercadopago
  const [orderId, setOrderId] = useState(null);
  const [shipmentCost, setShipmentCost] = useState(0);
  const [userData, setUserData] = useState({
    cp: "",
    tel: "",
  });

  const { user } = useContext(AuthContext);
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);
  let totalPrice = getTotalPrice()

  // manipulates URL query string to get "status" key value. Determines if transaction was succesful
  let location = useLocation();
  let queryParams = new URLSearchParams(location.search);
  let payment = queryParams.get("status");

  // initialize mercadopago SDK
  initMercadoPago(import.meta.env.VITE_publicKey, {
    locale: "es-CO",
  });

  // creates preference in mercadopago: makes summary of cart and makes post to backend
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
        shipment_cost: shipmentCost,
      });
      const { id } = post.data;

      return id;
    } catch (error) {
      console.log(error);
    }
  };


  // handles succesfull payment. post order to fb, reduce stock, clear cart and order in local storage
  useEffect(() => {
    let order = JSON.parse(localStorage.getItem("order"));

    console.log("useffect order=", order)
    console.log("payment status= ", payment);

    if (payment === "approved") {
      let refCollection = collection(db, "orders");
      addDoc(refCollection, { ...order, date: serverTimestamp() })
        .then((res) => {
          setOrderId(res.id);
        })
        .catch((err) => console.log(err));

        order.products.forEach((el) => {
        updateDoc(doc(db, "products", el.id), {
          stock: el.stock - el.quantity,
        });
      });

      localStorage.removeItem("order");
      clearCart();
    }
  }, [payment]);

  //gets shipment cost from firebase
  useEffect(() => {
    let refCollection = collection(db, "shipment");
    let refdoc = doc(refCollection, "7WMHaShKKD7OV8YUIu8R"); //shipment cost id in fb
    getDoc(refdoc)
      .then((res) => {
        setShipmentCost(res.data().cost);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // handles buy request. stores id given by mercadopago. creates order obj in local storage
  const handleBuy = async () => {
    const storeOrder = {
      cp: userData.cp,
      telefono: userData.tel,
      products: cart,
      email: user.email,
      total: totalPrice + shipmentCost,
    };

    localStorage.setItem("order", JSON.stringify(storeOrder));

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

  const data = { handleChange, handleBuy, Wallet, preferenceId, orderId };

  return (
    <>
     <Checkout data={data} />
    </>
  );
};

export default CheckoutContainer;
