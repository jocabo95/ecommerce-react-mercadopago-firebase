import { Box, Grid } from "@mui/material";

const MagazinesDetail = ({data}) => {

  const {magOnDisplay}=data;

  console.log("mag fotos", magOnDisplay.fotos);

  return (
    <div style={{ margin: "3rem 3rem 0px 3rem" }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: "3rem" }}>
        <img
          id="mainImg"
          src={magOnDisplay.portada}
          alt={magOnDisplay.title}
        />
      </Box>
    
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", my: "2rem" }}
      >

        
       
      </Grid>
    </div>
  );
}

export default MagazinesDetail