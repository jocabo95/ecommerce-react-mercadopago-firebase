import "./proyectos.css"
import { Box, Button, Typography } from "@mui/material";
import { Image } from "@nextui-org/react";

const Proyectos = () => {
  return (
    <Box sx={{ margin: "1rem" }}>
      <Typography
        variant="h5"
        align="center"
        sx={{ my: "4rem", textAlign: "center", letterSpacing: "0.15rem" }}
      >
        ARQUITECTURA E INTERIORISMO
      </Typography>

      <div id="homeInteriorDesign-imgContainer">
        <div id="img-background">
          <Image
            id="homeInteriorDesign-img"
            src="src\images\proyectos.PNG"
            width={"100%"}
            radius="none"
          />
        </div>
      </div>

      <Typography variant="body2">Renovamos tus espacios</Typography>
      <Button variant="contained" color="background" disableElevation={true}>
        Conoce nuestros proyectos
      </Button>
    </Box>
  );
}

export default Proyectos