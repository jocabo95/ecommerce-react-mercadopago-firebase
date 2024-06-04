import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../firebaseConfig";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,

} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const ShipmentDashboard = ({ data }) => {
  const [currentCost, setCurrentCost] = useState(0);
  const [newCost, setNewCost] = useState({});
  const [checkChange, setCheckChange] = useState(false);

  const { shipmentData } = data;

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
  let handleChange = (e) => {
    setNewCost({ cost: e.target.value });
  };

  // update firebase with new cost
  let editShipmentCost = async () => {
    setCheckChange(false);

    try {
      let refShipmentCost = collection(db, "shipment");
      updateDoc(doc(refShipmentCost, "7WMHaShKKD7OV8YUIu8R"), newCost).then(
        () => {
          setCheckChange(true);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ciudad</TableCell>
              <TableCell align="right">Costo envío</TableCell>
              <TableCell align="right">entrega (dias)</TableCell>
              <TableCell align="right">Acciones </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shipmentData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.city}
                </TableCell>
                <TableCell align="right">
                  $ {Intl.NumberFormat().format(row.shipment)}
                </TableCell>
                <TableCell align="right">{row.deliveryDays}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleOpen(product)}>
                    <EditIcon></EditIcon>
                  </IconButton>
                  <IconButton onClick={() => removeProd(product)}>
                    <DeleteForeverIcon></DeleteForeverIcon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ShipmentDashboard;
