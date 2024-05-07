import { Box, Grid, IconButton, Typography } from "@mui/material";
import { NumericFormat } from "react-number-format";
import DeleteIcon from "@mui/icons-material/Delete";

const CartDesktop = ({ data }) => {
  const { cart, deleteById } = data;
  return (
    <Grid item container sx={{ px: { xs: "1rem", sm: "3rem" } }}>
      {/* //- HEADER CONTAINER */}
      <Grid item container sx={{ backgroundColor: "#F7F7F7" }}>
        <Grid className="cartHeaderGrid" item xs={4}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Producto
            </Typography>
          </Box>
        </Grid>
        <Grid className="cartHeaderGrid" item xs={2}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Precio
            </Typography>
          </Box>
        </Grid>
        <Grid className="cartHeaderGrid" item xs={2}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Unidades
            </Typography>
          </Box>
        </Grid>
        <Grid className="cartHeaderGrid" item xs={2}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Subtotal
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* //- PRODUCTS */}
      {cart.map((el) => {
        return (
          <Grid
            item
            container
            key={el.id}
            xs={12}
            sx={{ borderBottom: "solid #F7F7F7", px: "1rem" }}
            columnGap={1}
          >
            <Grid className="cartCellGrid" item xs={12} md={2}>
              <Box className="cartCell">
                <img src={el.img} style={{ height: "90px" }} />
              </Box>
            </Grid>
            <Grid className="cartCellGrid" item xs={12} md={2}>
              <Box className="cartCell">
                <Typography>{el.title}</Typography>
              </Box>
            </Grid>
            <Grid className="cartCellGrid" item xs={12} md={2}>
              <Box className="cartCell">
                <NumericFormat
                  prefix="$ "
                  thousandSeparator=","
                  value={el.unit_price}
                />
              </Box>
            </Grid>
            <Grid className="cartCellGrid" item xs={12} md={2}>
              <Box className="cartCell">
                <Typography>Unidades= {el.quantity}</Typography>
              </Box>
            </Grid>
            <Grid className="cartCellGrid" item xs={12} md={2}>
              <Box className="cartCell">
                <NumericFormat
                  prefix="$ "
                  thousandSeparator=","
                  value={el.unit_price * el.quantity}
                />
              </Box>
            </Grid>
            <Grid className="cartCellGrid" item xs={12} md={1}>
              <Box className="cartCell">
                <IconButton
                  size="medium"
                  color="secondary"
                  onClick={() => deleteById(el.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CartDesktop;
