import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Box } from "@mui/material";
import useCounter from "../../../utils/hooks/useCounter";

const ItemDetail = () => {
  let { id } = useParams();

  const [product, setproduct] = useState({});

  let { suma, resta, counter } = useCounter(0, product.stock);

  let asyncGetDoc = async (refDoc) => {
    try {
      let res = await getDoc(refDoc);
      setproduct({ ...res.data(), id: res.id });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let refDoc = doc(db, "products", id);
    asyncGetDoc(refDoc);
  }, [id]);

  // funcion add to cart de cart context

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
        <Button color="secondary">Agregar al carrito</Button>
      </CardFooter>
    </Card>
  );
};

export default ItemDetail;
