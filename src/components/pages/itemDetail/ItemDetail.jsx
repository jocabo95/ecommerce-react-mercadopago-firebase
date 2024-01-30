import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Box } from "@mui/material";
import useCounter from "../../../utils/hooks/useCounter";
import { CartContext } from "../../context/CartContext";

const ItemDetail = () => {
  let { addToCart, getQuantity } = useContext(CartContext);

  let { id } = useParams();

  let quantity = getQuantity(id)

  const [product, setproduct] = useState({});

  let { suma, resta, counter } = useCounter(quantity, product.stock);

  useEffect(() => {
    (async () => {
      let refDoc = doc(db, "products", id);
      try {
        let res = await getDoc(refDoc);
        setproduct({ ...res.data(), id: res.id });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

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
