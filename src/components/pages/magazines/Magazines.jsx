import { Box, Grid, Typography } from "@mui/material"

const Magazines = ({data}) => {

  const {publications} = data
  return (
    <Box sx={{m:{xs:"1rem", md:"3rem"}, border:"solid red"}}>
      <Grid container>
        {publications.map((el) => {
          return (
            <Grid key={el.title} item xs={12} md={4}>
              <Box>
                <img src={el.portada} />
                <Typography variant="h6">{el.title}</Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Magazines