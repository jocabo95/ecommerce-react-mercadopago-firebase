import "./mobiliario.css";
import { Box, Grid, Typography } from "@mui/material";
import { Image } from "@nextui-org/react";

const Mobiliario = () => {

    let widthXs = 6;
    let widthMd = 2.8;

  return (
    <Box sx={{ margin: "1rem"}}>
      <Typography className="" variant="h5" align="center" sx={{ my: "2rem" }}>
        MOBILIARIO
      </Typography>
      <Grid className="grid-container" container spacing={1}>
        <Grid className="home-gridItem" item xs={widthXs} md={widthMd}>
          <Image
            className="home-categoryImg"
            radius="none"
            isZoomed
            width={"auto"}
            alt="LÁMPARAS"
            src="src\images\categoria-lamparas.PNG"
          />
        </Grid>
        <Grid className="home-gridItem" item xs={widthXs} md={widthMd}>
          <Image
            className="home-categoryImg"
            radius="none"
            isZoomed
            width={"auto"}
            alt="STOOLS"
            src="src\images\categoria-stools.PNG"
          />
        </Grid>
        <Grid className="home-gridItem" item xs={widthXs} md={widthMd}>
          <Image
            className="home-categoryImg"
            radius="none"
            isZoomed
            width={"auto"}
            alt="TORMILLOS"
            src="src\images\categoria-tornillos.PNG"
          />
        </Grid>
        <Grid className="home-gridItem" item xs={widthXs} md={widthMd}>
          <Image
            className="home-categoryImg"
            radius="none"
            isZoomed
            width={"auto"}
            alt="COLUMNAS"
            src="src\images\categoria-columnas.PNG"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Mobiliario;
