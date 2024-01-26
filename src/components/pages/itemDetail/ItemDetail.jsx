import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Box } from "@mui/material";

const ItemDetail = () => {

  // useparams para traer link dinamico y sacar id
  let { id } = useParams();

  console.log("id= ", id);

  // usestate: guardar info de producto traida de firebase con id useparams
  const [itemDetail, setItemDetail] = useState({});

  // async fn for useffect
  let asyncGetDoc = async (refDoc) => {
    try {
      let res = await getDoc(refDoc);
      setItemDetail({ ...res.data(), id: res.id });
    } catch (error) {
      console.log(error);
    }
  };

  // useffect: traer producto con id de useparams
  useEffect(() => {
    let refDoc = doc(db, "products", id);
    asyncGetDoc(refDoc);
  }, [id]);

  console.log("Res= ", itemDetail);

  // funcion add to cart de cart context

  return (
    <Card className="max-w-[400px] mb-5">
      <CardHeader className="flex gap-3">
        <Image
          alt={itemDetail.title}
          radius="sm"
          src={itemDetail.img}
          width={400}
        />
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <p className="text-md">{itemDetail.title}</p>
          <p className="text-small text-default-500">
            {itemDetail.description}
          </p>
        </div>
        <h4>{itemDetail.unit_price}</h4>
      </CardBody>
      <CardFooter>
        <Button color="primary">-</Button>
        <Box>34</Box>
        <Button color="primary">+</Button>
        <Button color="secondary">Agregar al carrito</Button>
      </CardFooter>
    </Card>
  );
};

export default ItemDetail;
