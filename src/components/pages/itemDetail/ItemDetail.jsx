import "./itemDetail.css";
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import { NumericFormat } from "react-number-format";
import ManufactureDtails from "./manufactureDetails/ManufactureDtails";
import CounterButton from "../../common/counterButton/CounterButton";

const ItemDetail = ({ data }) => {
  const { product, suma, resta, counter, addToCart } = data;

  const manufactureDetailsData = {
    product,
    addToCart,
    counter
  }

  const counterButtonData ={
    counter,
    suma,
    resta
  }
  
  return (
    <Card
      raised={false}
      sx={{
        width: "100%",
        height: "auto",
        borderRadius: "0",
        boxShadow: "none",
        mx: { md: "6rem" },
        my: { md: "3rem" },
      }}
    >
      <Grid container>
        {/* prouct img*/}
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image={product.img}
            alt="prod.title"
            sx={{
              width: { xs: "100%", md: "80%" },
              aspectRatio: "1 / 1",
            }}
          />
        </Grid>

        {/* product info, price, button */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            py: { xs: "2.5rem", md: "0rem" },
            px: { xs: "1rem", md: "0rem" },
          }}
        >
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "500",
              letterSpacing: "0.2rem",
              fontFamily: "Playfair",
            }}
            variant="body"
          >
            {product.title}
          </Typography>
          <Typography variant="body2" sx={{ pt: "1rem", fontSize: "1rem" }}>
            <NumericFormat
              prefix="$ "
              thousandSeparator=","
              value={product.unit_price}
            />
          </Typography>

            {/* TAG WHEN STOCK=0 */}
          {product.stock === 0 && (
            <Box sx={{ width: "8rem", backgroundColor: "green", mt: "0.5rem", mb:"3rem" }}>
              <Typography
                variant="body2"
                sx={{
                  width: "auto",
                  color: "white",
                  backgroundColor: "red",
                  textAlign: "center",
                }}
              >
                por encargo
              </Typography>
            </Box>
          )}

          {/* COUNTER BUTTON */}
          <CounterButton data={counterButtonData} />

          {/* PRODUCTION DETAILS */}
          <ManufactureDtails data={manufactureDetailsData} />

          <Paper
            sx={{
              mt: { xs: "2rem", md: "5rem" },
              py: { xs: "1rem", md: "1rem" },
              px: { xs: "1rem", md: "1rem" },
              height: { xs: "4rem", md: "7rem" },
            }}
          >
            <Typography variant="body">{product.description}</Typography>
          </Paper>
        </Grid>

        {/* aditional info product */}
      </Grid>
    </Card>
  );
};

export default ItemDetail;
