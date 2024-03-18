import { Box, Button, IconButton, Modal } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ProductForm from "./ProductForm";

const Dashboard = ({ data }) => {
  const {
    products,
    removeProd,
    style,
    handleClose,
    open,
    addNewProduct,
    setDbChange
  } = data;

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Productos</h2>
      <Button type="button" onClick={addNewProduct}>
        agregar producto
      </Button>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Producto</TableCell>
              <TableCell align="left">Imagen</TableCell>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Precio</TableCell>
              <TableCell align="left">Stock</TableCell>
              <TableCell align="left">Categoría</TableCell>
              <TableCell align="left">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((product) => (
              <TableRow
                key={product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.title}
                </TableCell>
                <TableCell align="left">
                  <img
                    src={product.img}
                    style={{ width: "50px", height: "50px" }}
                  />
                </TableCell>
                <TableCell align="left">{product.id}</TableCell>
                <TableCell align="left">{product.unit_price}</TableCell>
                <TableCell align="left">{product.stock}</TableCell>
                <TableCell align="left">{product.category}</TableCell>
                <TableCell align="left">
                  <IconButton onClick={() => editProd(product.id)}>
                    <EditIcon></EditIcon>
                  </IconButton>
                  <IconButton onClick={() => removeProd(product.id)}>
                    <DeleteForeverIcon></DeleteForeverIcon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ProductForm handleClose={handleClose} setDbChange={setDbChange} />
          </Box>
        </Modal>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
