import "./projects.css"
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const Projects = ({ data }) => {
  const { projects } = data;

  return (
    <div>
      <Grid container spacing={1} rowSpacing={3} sx={{mt:"3rem"}}>
        {projects.map((el) => {
          return (
            <Grid key={el.title} item xs={12} md={4}>
              <Card
                sx={{
                  borderRadius: "0px",
                  mx:{sm:"3rem"},
                  boxShadow:"none"
                }}
              >
                <CardActionArea>
                  <Box id="prject-imgContainer" sx={{height:{xs:"50vh", md:"30vh"}}}>
                    <img src={el.mainImg} alt={el.title}/>
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {el.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Projects;
