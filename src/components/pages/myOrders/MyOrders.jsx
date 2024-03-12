import { Box, Container } from "@mui/material";

const MyOrders = ({ data }) => {
  const { myOrder } = data;

  return (
    <Container sx={{ width: "80%", height: "auto" }}>
      <Box sx={{ width: "100%", height: "100%" }}>
        {myOrder.map((order) => {
          <div key={order.id}>
            {order?.items?.map((product) => {
              return (
                <div key={product.id}>
                  <h2>{product.title}</h2>
                  <h3>{product.quantity}</h3>
                </div>
              );
            })}
          </div>;
        })}
      </Box>
    </Container>
  );
};

export default MyOrders;
