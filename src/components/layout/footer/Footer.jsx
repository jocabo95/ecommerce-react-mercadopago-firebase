import { useTheme } from "@emotion/react";
import "./footer.css";
import { Divider, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import Socials from "./socials/Socials";
import CompanyInfo from "./companyInfo/CompanyInfo";
import Horarios from "./horarios/Horarios";

const Footer = () => {
  let theme = useTheme();

  let desktopQuery = useMediaQuery(theme.breakpoints.up("md"));
  let tabletQuery = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Paper
      id="footer-container"
      variant="outlined"
      sx={{ borderRadius: "0px", padding: "1rem" }}
    >
      <Grid container id="footerContentContainer">
        {desktopQuery ? (
          <>
            <Grid item xs={4}>
              <CompanyInfo />
            </Grid>
            <Grid item xs={4}>
              <Horarios />
            </Grid>
            <Grid item xs={4}>
              <Socials />
            </Grid>
          </>
        ) : tabletQuery ? (
          <>
            <Grid item xs={6}>
              <CompanyInfo />
            </Grid>
            <Grid item xs={6}>
              <Horarios />
              <Socials />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12}>
              <Horarios />
            </Grid>
            <Grid item xs={12} sx={{ mt: "2rem", mb: "2rem" }}>
              <Socials />
            </Grid>
            <Grid
              item
              container
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <CompanyInfo />
            </Grid>
          </>
        )}
      </Grid>
      <div style={{height:"300px", width:"100%", marginTop:"3rem", marginBottom:"3rem"}}>
        <gmp-map
          center="4.663970470428467,-74.0535888671875"
          zoom="14"
          map-id="DEMO_MAP_ID"
          style={{height:"100%"}}
        >
          <gmp-advanced-marker
            position="4.663970470428467,-74.0535888671875"
            title="My location"
          ></gmp-advanced-marker>
        </gmp-map>
      </div>
      <Divider sx={{ mt: "1.5rem", mb: "1rem" }} />
      <Typography variant="body2" sx={{ fontFamily: "Playfair" }}>
        © 2023 copyrights All rights reserved. BASALTO STUDIO, Susana Garavito
      </Typography>
    </Paper>
  );
};

export default Footer;
