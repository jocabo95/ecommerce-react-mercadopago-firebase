import '../dashboards.css'
import DashboardButton from "../../../common/dashboardButton/DashboardButton";
import ShipmentFormContainer from "./shipmentForm/ShipmentFormContainer";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  Box,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const ShipmentDashboard = ({ data }) => {
  const {
    shipmentData, // brings all cities shipment info from db
    deleteCity,
    handleOpen, // opens Modal
    handleClose, // closes modal
    open,
    modalStyle,
  } = data;

  const buttonData = {
    buttonText: "Agregar Ciudad",
    handleClick: handleOpen,
  };

  return (
    <div>
      {/* add city*/}
      <DashboardButton data={buttonData} />

      {/* UI shippment info */}
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
            {shipmentData.map((el) => (
              <TableRow
                key={el.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="el">
                  {el.city}
                </TableCell>
                <TableCell align="right">
                  $ {Intl.NumberFormat().format(el.shipment)}
                </TableCell>
                <TableCell align="right">{el.deliveryDays}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleOpen(el)}>
                    <EditIcon></EditIcon>
                  </IconButton>
                  <IconButton onClick={() => deleteCity(el)}>
                    <DeleteForeverIcon></DeleteForeverIcon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* MODAL */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <ShipmentFormContainer data={data}/>
        </Box>
      </Modal>
    </div>
  );
};

export default ShipmentDashboard;
