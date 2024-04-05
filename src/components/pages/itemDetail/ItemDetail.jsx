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

const ItemDetail = ({ data }) => {
  const { product, suma, resta, counter, addToCart } = data;

  return (
    <Card
      raised={false}
      sx={{
        width: "100%",
        borderRadius: "0",
        boxShadow: "none",
        border: "thin red",
        bgcolor: "background",
      }}
    >
      <CardMedia
        component="img"
        image={product.img}
        height="auto"
        alt="prod.title"
        sx={{
          width: "100%",
          height: { xs: "40vh", sm: "60vh", md: "30vh" },
        }}
      />

      <Typography variant="h5">{product.title}</Typography>

      <Box sx={{display: "flex"}}>
        <Button variant="outlined" onClick={resta}>
          -
        </Button>
        <Box>{counter}</Box>
        <Button variant="outlined" onClick={suma}>
          +
        </Button>
      </Box>

      <Button variant="outlined" sx={{width: "95%", mr: "auto", ml:"auto"}} onClick={() => addToCart(product, counter)}>
        Agregar al carrito
      </Button>
    </Card>
    // <Card className="max-w-[400px] mb-5">
    //   <CardHeader className="flex gap-3">
    //     <Image alt={product.title} radius="sm" src={product.img} width={400} />
    //   </CardHeader>
    //   <Divider />
    //   <CardBody>
    //     <div>
    //       <p className="text-md">{product.title}</p>
    //       <p className="text-small text-default-500">{product.description}</p>
    //     </div>
    //     <h4>{product.unit_price}</h4>
    //   </CardBody>
    //   <CardFooter>
    //     <Button color="primary" onClick={resta}>
    //
    // </Button>
    // <Box>{counter}</Box>
    // <Button color="primary" onClick={suma}>
    //   +
    // </Button>
    // <Button color="secondary" onClick={() => addToCart(product, counter)}>
    //   Agregar al carrito
    // </Button>
    //   </CardFooter>
    // </Card>
  );
};

export default ItemDetail;
