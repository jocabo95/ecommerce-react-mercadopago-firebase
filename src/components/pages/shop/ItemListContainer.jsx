import { Box } from "@mui/material"
import { db } from "../../../firebaseConfig"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import {Button} from "@nextui-org/button";



const ItemListContainer = () => {

  const [products, setProducts] = useState({})

  useEffect(()=>{
    const refCollection = collection(db, "products")
    getDocs(refCollection)

    .then((res)=>{
      let newarr = res.docs.map((product)=>{
        return({...product.data(), id: product.id})
      })

      setProducts(newarr)
    })
    .catch((err)=>{console.log(err)})

  }, [])
  console.log(products)

  return (
    <Box sx={{width: "10rem", }}>
      <Button color="secondary">done son</Button>
    </Box>
  )
}

export default ItemListContainer