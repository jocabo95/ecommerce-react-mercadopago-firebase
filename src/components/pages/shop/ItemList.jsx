// import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import ShopHeader from "./shopHeader/ShopHeader";
import { CardActionArea, Grid, Box, Card, CardMedia, CardContent, Typography } from "@mui/material";

const ItemList = ({ data }) => {
  const { products } = data;

  return (
    <div style={{ width: "100%" }}>
      {/* SHOP HEADER */}
      <ShopHeader />

      {/* PRODUCTS */}
      <Box sx={{ width: "auto", height: "100%", ml: "1rem", mr: "1rem" }}>
        <Grid container rowSpacing={7} spacing={2} sx={{ width: "100%", padding: "0px" }}>
          {products.map((prod) => {
            return (

              /* CARD */
              <Grid item key={prod.id} xs={12} sm={12} md={4}>
                <Card
                  raised={false}
                  sx={{
                    borderRadius: "0",
                    boxShadow: "none",
                    border: "thin red",
                    bgcolor: "background",
                  }}
                >
                  <CardActionArea>
                    <Link to={`/itemDetail/${prod.id}`}>
                      <CardMedia
                        component="img"
                        image={prod.img}
                        height="auto"
                        alt="prod.title"
                        sx={{
                          width: "100%",
                          height: { xs: "40vh", sm: "60vh", md: "30vh" },
                        }}
                      />
                      <CardContent>
                        <Typography variant="body1">{prod.title}</Typography>
                        <Typography variant="body1">
                          {prod.unit_price}
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
