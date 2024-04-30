import "./proyectos.css";
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

      <div id="homeInteriorDesign-heroContainer">
        <div id="img-background">
          <Image
            id="homeInteriorDesign-img"
            src="src\images\proyectos.PNG"
            width={"100%"}
            radius="none"
          />
        </div>

        {/* following div avoidas text & button relative position to leave empty space in doc flow */}
        <div
          style={{
            position: "relative",
            height: "0px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography id="projects-heroText" variant="body2">
            Renovamos tus espacios
          </Typography>
          <Button
            id="proyects-button"
            variant="contained"
            color="background"
            disableElevation={true}
            disableFocusRipple={true}
          >
            Conoce nuestros proyectos
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default Proyectos;
