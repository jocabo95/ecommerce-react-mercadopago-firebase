// import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import ShopHeader from "./shopHeader/ShopHeader";
import { CardActionArea, Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const ItemList = ({ data }) => {
  const { products } = data;

  return (
    <div style={{ width: "100%" }}>
      {/* SHOP HEADER */}
      <ShopHeader />

      {/* PRODUCTS */}
        <Grid
          container
          // rowSpacing={7}
          // spacing={2}
          sx={{ width: "auto", margin:"0"}}
        >
          {products.map((prod) => {
            return (
              /* CARD */
              <Grid item key={prod.id} xs={12} sm={12} md={4} sx={{width:"auto",  px: "1rem", pb:"1rem"}}>
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
      
    </div>
  );
};

export default ItemList;
