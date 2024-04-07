import "./shopHeader.css";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const ShopHeader = () => {
  return (
    <>
      <Typography
        className="page-title"
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem" },
          fontWeight: "200",
          letterSpacing: { xs: "0.5rem"},

        }}
      >
        MOBILIARIO
      </Typography>

      {/* NAV MENU */}
      <Paper
        variant="outlined"
        square
        sx={{
          width: "auto",
          minHeight: "50px",
          mb: "2rem",
          marginRight: "1rem",
          marginLeft: "1rem",
        }}
      >
        <Grid container sx={{ width: "100%", minHeight: "60px" }}>
          <Grid item xs={6} sm={3} sx={{minHeight: "60px"}}>
            <Button
              variant="outlined"
              sx={{ width: "100%", height: "100%", borderRadius: "0" }}
            >
              <Typography className="category">LÁMPARAS</Typography>
            </Button>
          </Grid>
          <Grid item xs={6} sm={3} sx={{minHeight: "60px"}}>
            <Button
              variant="outlined"
              sx={{ width: "100%", height: "100%", borderRadius: "0" }}
            >
              <Typography className="category">COLUMNAS</Typography>
            </Button>
          </Grid>
          <Grid item xs={6} sm={3} sx={{minHeight: "60px"}}>
            <Button
              variant="outlined"
              sx={{ width: "100%", height: "100%", borderRadius: "0" }}
            >
              <Typography className="category">STOOLS</Typography>
            </Button>
          </Grid>
          <Grid item xs={6} sm={3} sx={{minHeight: "60px"}}>
            <Button
              variant="outlined"
              sx={{ width: "100%", height: "100%", borderRadius: "0" }}
            >
              <Typography className="category">TORNILLOS</Typography>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ShopHeader;
