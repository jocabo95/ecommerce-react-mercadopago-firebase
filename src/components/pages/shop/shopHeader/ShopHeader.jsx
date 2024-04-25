import "./shopHeader.css";
import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";
import { Link } from "react-router-dom";

const ShopHeader = () => {

  const [categories, setCategories] = useState([]) // stores product categories from firebase
  
  useEffect(()=>{

    const categoriesCollection = collection(db, "categories")

    getDocs(categoriesCollection)
      .then((res)=>{
        let categoriesArr = res.docs.map((el)=>{return {...el.data()}})

        setCategories(categoriesArr)
      }
    )

  },[])

  return (
    <Box sx={{ px: { xs: "1rem", md: "3rem" } }}>
      <Typography
        className="page-title"
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem" },
          fontWeight: "200",
          letterSpacing: { xs: "0.5rem" },
          pl: "0rem",
        }}
      >
        MOBILIARIO
      </Typography>

      {/* NAV MENU */}
      <Paper
        variant="outlined"
        square
        sx={{
          width: "auto",
          mb: "1rem",
        }}
      >
        <Grid container sx={{ width: "100%" }}>
          {categories.map((el) => {
            return (
              <Grid
                key={el.category}
                item
                xs={6}
                sm={3}
              >
                <Link to={`/shop/${el.category}`}>
                  <Button
                    variant="outlined"
                    sx={{ width: "100%", borderRadius: "0" }}
                  >
                    <Typography
                      className="category"
                      variant="body2"
                      sx={{ fontWeight: "600" }}
                    >
                      {el.category}
                    </Typography>
                  </Button>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Paper>

      
    </Box>
  );
};

export default ShopHeader;
