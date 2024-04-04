import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";
import { Box, Container } from "@mui/material";
import ShopHeader from "./shopHeader/ShopHeader";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const ItemList = ({ data }) => {
  const { products, navigate } = data;

  return (
    <div style={{ width: "100%" }}>
      {/* SHOP HEADER */}
      <ShopHeader />

      {/* PRODUCTS */}

      {/* CARD */}

      <Box sx={{ width: "auto", height: "100%", ml: "1rem", mr: "1rem" }}>
        <Grid container spacing={1} sx={{ width: "100%", padding: "0px" }}>
          {/* map products */}
          {products.map((prod) => {
            return (
              <Grid item key={prod.id} xs={12} sm={6} md={4}>
                <Card
                  className="max-w-[400px] mb-5"
                  isPressable
                  radius="none"
                  onPress={() => navigate(`/itemDetail/${prod.id}`)}
                >
                  <CardHeader className="flex gap-3">
                    <Image
                      alt={prod.title}
                      radius="sm"
                      src={prod.img}
                      width={400}
                    />
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    <div>
                      <p className="text-md">{prod.title}</p>
                      <p className="text-small text-default-500">
                        {prod.description}
                      </p>
                    </div>
                    <h4>{prod.unit_price}</h4>
                  </CardBody>
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
