import { Grid, Typography } from "@mui/material"

const CompanyInfo = () => {
  return (
    <Grid container sx={{ml: "1rem" }}>
      <Grid item xs={6} sx={{ mb:"1rem"}}>
        <img src="src\images\logo.PNG" />
      </Grid>
      <Grid item>
        <Typography variant="body2">ventasbasaltostudio@gmail.com</Typography>
        <Typography variant="body2">basaltostudio@gmail.com</Typography>
        <Typography variant="body2">
            calle 80 # 10 - 43 piso 1
            Showroom: piso 1
            Oficina: piso 4 con cita previa
        </Typography>
      </Grid>
    </Grid>
  );
}

export default CompanyInfo