// import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import ShopHeader from "./shopHeader/ShopHeader";
import {
  CardActionArea,
  Grid,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { NumericFormat } from "react-number-format";

const ItemList = ({ data }) => {
  const { products, filterProductByCategory } = data;

  return (
    <div style={{ width: "100%" }}>
      {/* SHOP HEADER */}
      <ShopHeader data={data} />

      <Button
        onClick={() => filterProductByCategory(null)}
        variant="outlined"
        sx={{
          width: "auto",
          height: "auto",
          borderRadius: "0",
          ml: "1rem",
          mb: "2rem",
        }}
      >
        <Typography
          variant="body"
          sx={{ fontSize: "0.8rem", textTransform: "capitalize" }}
        >
          Todos los productos
        </Typography>
      </Button>

      {/* PRODUCTS */}
      <Box sx={{ width: "auto", height: "100%", ml: "1rem", mr: "1rem" }}>
        <Grid
          container
          rowSpacing={7}
          spacing={2}
          sx={{ width: "100%", padding: "0px" }}
        >
          {products.map((prod) => {
            return (
              /* CARD */
              <Grid
                item
                key={prod.id}
                xs={12}
                sm={12}
                md={4}
                sx={{ width: "auto", px: "1rem", pb: "1rem" }}
              >
                <Card
                  raised={false}
                  sx={{
                    borderRadius: "0",
                    //- boxShadow: "none",
                    border: "thin blue",
                    bgcolor: "background",
                  }}
                >
                  <CardActionArea>
                    <Link to={`/itemDetail/${prod.id}`}>
                      <CardMedia
                        component="img"
                        image={prod.img}
                        alt="prod.title"
                        sx={{
                          width: "100%",
                          height: { xs: "40vh", sm: "60vh", md: "30vh" },
                        }}
                      />
                      <CardContent>
                        <Typography variant="body1">{prod.title}</Typography>
                        <Typography variant="body1">
                          <NumericFormat
                            value={prod.unit_price}
                            thousandSeparator=","
                            prefix="$"
                            suffix=" COP"
                          />
                        </Typography>
                      </CardContent>
                    </Link>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default ItemList;
