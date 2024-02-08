import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from "@nextui-org/react";
import { Box } from "@mui/material";

const ItemDetail = ({ data }) => {

  const { product, suma, resta, counter, addToCart } = data;

  return (
    <Card className="max-w-[400px] mb-5">
      <CardHeader className="flex gap-3">
        <Image alt={product.title} radius="sm" src={product.img} width={400} />
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <p className="text-md">{product.title}</p>
          <p className="text-small text-default-500">{product.description}</p>
        </div>
        <h4>{product.unit_price}</h4>
      </CardBody>
      <CardFooter>
        <Button color="primary" onClick={resta}>
          -
        </Button>
        <Box>{counter}</Box>
        <Button color="primary" onClick={suma}>
          +
        </Button>
        <Button color="secondary" onClick={() => addToCart(product, counter)}>
          Agregar al carrito
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ItemDetail;
