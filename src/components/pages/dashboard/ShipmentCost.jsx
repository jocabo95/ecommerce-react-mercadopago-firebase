import { Alert, Button, TextField, Typography } from "@mui/material";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";

const ShipmentCost = () => {
  const [currentCost, setCurrentCost] = useState(0);
  const [newCost, setNewCost] = useState({});
  const [checkChange, setCheckChange]=useState(false)

  // get current shipment cost from firebase
  useEffect(() => {
    (async () => {
      let refDoc = doc(db, "shipment", "7WMHaShKKD7OV8YUIu8R");

      try {
        let res = await getDoc(refDoc);
        setCurrentCost(res.data().cost);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // capture new shipment cost from textfield & save it
  let handleChange =(e)=>{
    setNewCost({cost: e.target.value})
  }

  console.log("new", newCost)

    // update firebase with new cost
    let editShipmentCost = async () => {
        setCheckChange(false)

      try {
        let refShipmentCost = collection(db, "shipment");
        updateDoc(
            doc(refShipmentCost, "7WMHaShKKD7OV8YUIu8R"),
            newCost
        ).then(() => {
            setCheckChange(true)
        });
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div>
      <Typography>Costo actual: {currentCost}</Typography>
      <Button onClick={editShipmentCost}>Modificar costo de envío</Button>
      <TextField label="nuevo costo de envío" onChange={handleChange} />
      {checkChange && (
        <Alert severity="success" onClose={() => setCheckChange(false)}>
          costo de envío modificado
        </Alert>
      )}
    </div>
  );
};

export default ShipmentCost;
