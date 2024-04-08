import "./itemDetail.css";
import {
  Grid,
  Box,
  Card,
  CardMedia,
  Typography,
  Button,
  Paper
} from "@mui/material";

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
        bgcolor: "background",
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
              width: "100%",
              height: "auto",
              maxHeight: { xs: "45vh", sm: "65vh", md: "82vh" },
            }}
          />
        </Grid>

        {/* product info, price, button */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            py: { xs: "1rem", md: "2.5rem" },
            px: { xs: "1rem", md: "2rem" },
          }}
        >
          <Typography
            sx={{ fontSize: "1.5rem", fontWeight: "400" }}
            className="description-text"
            variant="body"
          >
            {product.title}
          </Typography>
          <Typography className="description-text" variant="body2">
            {product.unit_price}
          </Typography>

          <Box
            sx={{
              width: "auto",
              display: "flex",
              mt: { xs: "2rem", md: "5rem" },
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
            variant="contained"
            sx={{ width: "100%", mr: "auto", ml: "auto", mt: "1rem" }}
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
