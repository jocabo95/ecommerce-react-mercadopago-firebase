import "./projectDetails.css"
import { Box, Grid, Typography } from "@mui/material";

const ProjectDetail = ({data}) => {

  const { projectOnDisplay } = data;

  return (
    <div style={{ width: "100%", padding: "3rem" }}>
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
        // spacing={4}
        sx={{ display: "flex", justifyContent: "center", mt: "2rem" }}
      >
        <Grid item xs={4} sx={{ height: "100px", mx:"1rem" }}>
          <img className="projectImg" src={projectOnDisplay.img1} />
        </Grid>
        <Grid item xs={4} sx={{ height: "100px", mx:"1rem" }}>
          <img className="projectImg" src={projectOnDisplay.img2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectDetail