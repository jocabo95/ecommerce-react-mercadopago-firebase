import "./cartMobile.css"
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { NumericFormat } from "react-number-format";
import DeleteIcon from "@mui/icons-material/Delete";

const CartMobile = ({ data }) => {
  const { cart, deleteById } = data;

  const cellsXs=6;
  const divisionColor = "#ababab"

  return (
    <>
      {cart.map((el) => {
        return (
          <Grid
            item
            container
            key={el.id}
            xs={12}
            sx={{
              borderBottom: "solid #F7F7F7",
              px: "1rem",
            }}
            columnGap={1}
          >
            {/* //-  IMG */}
            <Grid
              className="cartCellGrid"
              item
              xs={12}
              md={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box className="cartCell">
                <img src={el.img} style={{ height: "150px" }} />{" "}
              </Box>
            </Grid>

            {/* //-  PRODUCT */}
            <Grid
              className="cartCellGrid"
              item
              xs={12}
              sx={{ borderBottom: `solid thin ${divisionColor}` }}
            >
              <Grid item xs={cellsXs}>
                <Typography sx={{ fontWeight: "600" }}>Producto: </Typography>
              </Grid>
              <Box className="cartCell mobile-cartHeaderTitle">
                <Typography>{el.title}</Typography>
              </Box>
            </Grid>

            {/*  //-   PRICE */}
            <Grid
              className="cartCellGrid"
              item
              xs={12}
              sx={{ borderBottom: `solid thin ${divisionColor}` }}
            >
              <Grid item xs={cellsXs}>
                <Typography sx={{ fontWeight: "600" }}>Precio COP: </Typography>
              </Grid>
              <Box className="cartCell mobile-cartHeaderTitle">
                <Typography>
                  $ {Intl.NumberFormat().format(el.unit_price)}
                </Typography>
              </Box>
            </Grid>

            {/* //-   UNITS */}
            <Grid
              className="cartCellGrid"
              item
              xs={12}
              sx={{ borderBottom: `solid thin ${divisionColor}` }}
            >
              <Grid item xs={cellsXs}>
                <Typography sx={{ fontWeight: "600" }}>Unidades: </Typography>
              </Grid>
              <Box className="cartCell mobile-cartHeaderTitle">
                <Typography>Unidades= {el.quantity}</Typography>
              </Box>
            </Grid>
            <Grid
              className="cartCellGrid"
              item
              xs={12}
              sx={{ borderBottom: `solid thin ${divisionColor}` }}
            >
              {/* //-   SUBTOTAL */}
              <Grid item xs={cellsXs}>
                <Typography sx={{ fontWeight: "600" }}>Subtotal: </Typography>
              </Grid>
              <Box className="cartCell mobile-cartHeaderTitle">
                <Typography>
                  $ {Intl.NumberFormat().format(el.unit_price * el.quantity)}
                </Typography>
              </Box>
            </Grid>
            <Grid className="cartCellGrid" item xs={12} md={1}>
              {/* //-   DELETE ICON */}
              <Box
                className="cartCell"
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <IconButton
                  size="medium"
                  color="secondary"
                  onClick={() => deleteById(el.id)}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};

export default CartMobile;
