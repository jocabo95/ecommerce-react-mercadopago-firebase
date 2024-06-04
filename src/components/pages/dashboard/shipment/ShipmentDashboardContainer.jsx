import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../firebaseConfig";
import ShipmentDashboard from "./ShipmentDashboard";

const ShipmentDashboardContainer = () => {
  const [shipmentData, setShipmentData] = useState([]);

  // Get shipment info from firebase
  useEffect(() => {
    const shipmentCollection = collection(db, "shipment");
    getDocs(shipmentCollection)
      .then((res) => {
        const shipmentArr = res.docs.map((el) => {
          return { ...el.data(), id: el.id };
        });

        setShipmentData(shipmentArr);
      })
      .catch((err) => console.log(err));
  }, []);

  // Remove city from db
  let deleteCity = async(city) => {
    let cityDoc = doc(db, 'shipment', city.id)
    deleteDoc(cityDoc)
  }

  const data = { shipmentData, deleteCity };

  return <ShipmentDashboard data={data} />;
}

export default ShipmentDashboardContainer