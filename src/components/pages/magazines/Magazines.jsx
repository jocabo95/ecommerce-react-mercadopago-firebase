import { Box, Grid, Typography } from "@mui/material"

const Magazines = ({data}) => {

  const {publications} = data
  return (
    <Grid container>
      
      {
        publications.map((el)=>{
          return (
            <Grid key={el.title} item>
              <Box>
                <Typography variant="h6">{el.title}</Typography>
                <img src={el.portada}/>
              </Box>
            </Grid>
          );
        })
      }
    </Grid>
  )
}

export default Magazines