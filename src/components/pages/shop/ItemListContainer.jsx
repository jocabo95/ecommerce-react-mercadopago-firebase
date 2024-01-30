import { Box, Container } from "@mui/material";
import { db } from "../../../firebaseConfig";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Image,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const refCollection = collection(db, "products");
    getDocs(refCollection)
      .then((res) => {
        let newarr = res.docs.map((product) => {
          return { ...product.data(), id: product.id };
        });

        setProducts(newarr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container sx={{ width: "80%", height: "auto" }}>
      <Box sx={{ width: "100%", height: "100%" }}>
        {products.map((prod) => {
          return (
            <Card
              key={prod.id}
              className="max-w-[400px] mb-5"
              isPressable
              onPress={()=>navigate(`/itemDetail/${prod.id}`)}
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
};

export default ItemListContainer;
