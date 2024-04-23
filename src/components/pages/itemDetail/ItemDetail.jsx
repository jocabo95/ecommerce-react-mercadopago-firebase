import "./itemDetail.css";
import {
  Grid,
  Box,
  Card,
  CardMedia,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import { NumericFormat } from "react-number-format";

const ItemDetail = ({ data }) => {
  const { product, suma, resta, counter, addToCart } = data;

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
          <Typography variant="body2" sx={{ mt: "8rem", mb: "1rem" }}>
            cantidad
          </Typography>
          <Box
            sx={{
              width: "auto",
              display: "flex",
            }}
          >
            <Button
              className="counter-button"
              variant="outlined"
              onClick={resta}
            >
              -
            </Button>
            <div className="counter-display">{counter}</div>
            <Button
              className="counter-button"
              variant="outlined"
              onClick={suma}
            >
              +
            </Button>
          </Box>
          <Button
            color="secondary"
            variant="outlined"
            sx={{ width: "100%", mt: "1rem", mx: "auto" }}
            onClick={() => addToCart(product, counter)}
          >
            Agregar al carrito
          </Button>

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
