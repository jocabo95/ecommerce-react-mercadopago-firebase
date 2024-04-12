import { useTheme } from "@emotion/react";
import "./footer.css";
import { Grid, Paper, useMediaQuery } from "@mui/material";
import Socials from "./socials/Socials";
import CompanyInfo from "./companyInfo/CompanyInfo";
import Horarios from "./horarios/Horarios";

const Footer = () => {
  let theme = useTheme();

  let desktopQuery = useMediaQuery(theme.breakpoints.up("md"));
  let tabletQuery = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Paper id="footer-container" elevation={3} variant="outlined" sx={{borderRadius:"0px"}}>
      <Grid container>
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
          <Grid item xs={12}>
            <CompanyInfo />
            <Horarios />
            <Socials />
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};

export default Footer;
