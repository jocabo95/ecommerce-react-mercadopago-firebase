import { Box, Typography } from "@mui/material";

const Horarios = () => {
  return (
    <Box sx={{ ml: "1rem" , height: "50%"}}>
      <Typography variant="h6">Horarios</Typography>
      <Typography variant="body2">
        Lunes a Viernes 10:30 am - 6:30 pm
      </Typography>
      <Typography variant="body2">
        Sábados 10:30 am - 3:30 pm
      </Typography>
    </Box>
  );
};

export default Horarios;
