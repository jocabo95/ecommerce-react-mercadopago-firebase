import "./shopHeader.css";
import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const ShopHeader = ({ data }) => {
  const { filterProductByCategory } = data;
  const allCategories = ["Lámparas", "Stools", "Columnas", "Tornillos"];
  return (
    <Box sx={{ px: { xs: "1rem", md: "3rem" } }}>
      <Typography
        className="page-title"
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem" },
          fontWeight: "200",
          letterSpacing: { xs: "0.5rem" },
          pl: "0rem",
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
          mb: "1rem",
        }}
      >
        <Grid container sx={{ width: "100%" }}>
          {allCategories.map((category) => {
            return (
              <Grid
                key={category}
                item
                xs={6}
                sm={3}
                //! sx={{ minHeight: "30px" }}
              >
                <Button
                  onClick={() => filterProductByCategory(category)}
                  variant="outlined"
                  sx={{ width: "100%", borderRadius: "0" }}
                >
                  <Typography
                    className="category"
                    variant="body2"
                    sx={{ fontWeight: "600" }}
                  >
                    {category}
                  </Typography>
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </Box>
  );
};

export default ShopHeader;
