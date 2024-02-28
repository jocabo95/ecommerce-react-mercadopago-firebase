import { Box, Container } from "@mui/material";
import { Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react";

const MyOrders = ({data}) => {

    const {myOrder, navigate} = data

  return (
    <Container sx={{ width: "80%", height: "auto" }}>
      <Box sx={{ width: "100%", height: "100%" }}>
        {myOrder.map((prod) => {
          return (
            <Card
              key={prod.id}
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
          );
        })}
      </Box>
    </Container>
  );
}

export default MyOrders