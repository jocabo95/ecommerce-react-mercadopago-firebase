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
  let totalPrice = getTotalPrice();

  // manipulates URL query string to get "status" key value. Determines if transaction was succesful
  let location = useLocation();
  let queryParams = new URLSearchParams(location.search);
  let paramValue = queryParams.get("status");

  // initialize mercadopago SDK
  initMercadoPago(import.meta.env.VITE_publicKeyTest, {
    locale: "es-CO",
  });

  // creates preference in mercadopago: makes summary of cart and makes post to backend
  //* const createPreference = async () => {
  //*   let summarizedArr = cart.map((el) => {
  //*     return {
  //*       title: el.title,
  //*       unit_price: el.unit_price,
  //*       quantity: el.quantity,
  //*     };
  //*   });

  //*   try {
  //*     let post = await axios.post("http://localhost:8000/create_preference", {
  //*       items: summarizedArr,
  //*       shipment_cost: shipmentCost, // ! check if shipment cost comes from firebase or is hard coded
  //*     });
  //*     console.log("entered try createPreference()") // ! code broken in post
  //*     const { id } = post.data;

  //*     return id;
  //*   } catch (error) {
  //*     console.log(error);
  //*   }
  //* };

  const createPreference = async () => {
    try {
      let summarizedArr = cart.map((prod) => {
        return {
          title: prod.title,
          unit_price: prod.unit_price,
          quantity: prod.quantity,
        };
      });

      console.log("summarized Arr= ", summarizedArr);

      const response = await axios.post(
        "http://localhost:8000/create_preference",
        {
          items: summarizedArr,
          shipment_cost: shipmentCost,
        }
      );

      let { id } = response.data;
      console.log("post exitoso, id= ", id);

      return id;
    } catch (error) {
      console.log(error);
    }
  };

  // handles succesfull payment. post order to fb, reduce stock, clear cart and order in local storage
  useEffect(() => {
    let order = JSON.parse(localStorage.getItem("order"));

    if (paramValue === "approved") {
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
  }, [paramValue]);

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
      total: totalPrice + Number(shipmentCost),
    };

    localStorage.setItem("order", JSON.stringify(storeOrder));

    try {
      const id = await createPreference(); //! create preference not returning id
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
