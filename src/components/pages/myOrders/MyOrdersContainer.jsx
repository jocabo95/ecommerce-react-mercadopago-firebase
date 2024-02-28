import { useContext, useEffect, useState } from "react";
import MyOrders from "./MyOrders";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const MyOrdersContainer = () => {

    const [myOrder, setMyOrder] = useState([])
    const navigate = useNavigate()
    const { user } = useContext(AuthContext());

  useEffect(() => {
    (async () => {
      let refCollection = collection(db, "orders");
      let filterOrders = query(refCollection, where("email", "==", user.email));
      getDocs(filterOrders)
        .then((res) => {
            let orderArr = res.docs.map((order) => {
              return { ...order.data(), id: order.id};
            });
          setMyOrder(orderArr)
        })
        .catch((err) => console.log(err));
    })();
  }, [user.email]);

  const data = {myOrder, navigate};

  return <MyOrders data={data} />;
};

export default MyOrdersContainer;
