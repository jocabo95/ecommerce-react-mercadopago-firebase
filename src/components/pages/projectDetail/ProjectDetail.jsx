import { useEffect } from "react";
import "./projectDetails.css"
import { Box, Grid, Typography } from "@mui/material";

const ProjectDetail = ({data}) => {
  const { projectOnDisplay } = data;

  //be redirected to top of screen when click log in button in footer
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Box sx={{ width: "100%", p:"3rem"}}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: "3rem" }}>
        <img
          id="mainImg"
          src={projectOnDisplay.mainImg}
          alt={projectOnDisplay.title}
        />
      </Box>
      <Typography
        variant="body"
        sx={{ fontWeight: "400", fontSize: { md: "1.2rem" } }}
      >
        {projectOnDisplay.description}
      </Typography>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", my: "2rem"}}
      >
        <Grid item xs={4} sx={{ height: "100px", mx: "1rem" }}>
          <img className="projectImg" src={projectOnDisplay.img1} />
        </Grid>
        <Grid item xs={4} sx={{ height: "100px", mx: "1rem" }}>
          <img className="projectImg" src={projectOnDisplay.img2} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProjectDetail