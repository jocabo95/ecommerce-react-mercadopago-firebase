import "./mobiliario.css";
import { Box, Grid, Typography } from "@mui/material";
import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Mobiliario = () => {
  let widthXs = 6;
  let widthMd = 2.8;

  const categories = [
    { category: "lámparas", img: "src/images/categoria-lamparas.PNG" },
    { category: "stools", img: "src/images/categoria-stools.PNG" },
    { category: "tornillos", img: "src/images/categoria-tornillos.PNG" },
    { category: "columnas", img: "src/images/categoria-columnas.PNG" },
  ];

  return (
    <Box sx={{ margin: "1rem" }}>
      <Typography
        variant="h5"
        align="enter"
        sx={{ my: "2rem", textAlign: "center" }}
      >
        MOBILIARIO
      </Typography>
      <Grid className="grid-container" container spacing={1} rowGap={1}>
        {categories.map((el) => {
          return (
            <Grid key={el.category} className="home-gridItem" item xs={widthXs} md={widthMd}>
              <Link to={`/shop/${el.category}`}>
                <div className="img-blackBackground">
                  <div className="img-container">
                    <Image
                      className="home-categoryImg"
                      radius="none"
                      isZoomed
                      width={"auto"}
                      alt="LÁMPARAS"
                      src={el.img}
                    />
                  </div>
                </div>

                <Typography variant="body" className="home-categoryImgText">
                  {el.category.toUpperCase()}
                </Typography>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Mobiliario;
