import "./shopHeader.css";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const ShopHeader = ({ data }) => {
  const { filterProductByCategory } = data;
  const allCategories = ["LÁMPARAS", "STOOLS", "COLUMNAS", "TORNILLOS"];
  return (
    <>
      <Typography
        className="page-title"
        sx={{
          fontSize: { xs: "2rem", sm: "3rem" },
          letterSpacing: { xs: "0.5rem", sm: "1rem", md: "1.5rem" },
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
          {allCategories.map((category) => {
            return (
              <Grid
                key={category}
                item
                xs={6}
                sm={3}
                sx={{ minHeight: "60px" }}
              >
                <Button
                  onClick={() => filterProductByCategory(category)}
                  variant="outlined"
                  sx={{ width: "100%", height: "100%", borderRadius: "0" }}
                >
                  <Typography className="category">{category}</Typography>
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </>
  );
};

export default ShopHeader;
