import "./heroImage.css";
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";

const HeroImage = ({imgUrl, text, button}) => {

  //! text is boolean
  const theme = useTheme();
  const mediaQuery = useMediaQuery(theme.breakpoints.down("md")); // true if display bellow  md
  
  return (
    <>
      {mediaQuery ? (
        <div id="hero-container-mobile" className="hero-container">
          <img className="hero-img" alt="Basalto estudio" src={imgUrl} />

          {text && (
            <div className="hero-text-container">
              <Typography id="hero-title" sx={{ color: "white" }}>
                {text}
              </Typography>
            </div>
          )}

          {button && (
            <Button
              id="hero-button"
              variant="outlined"
              size="large"
              disableFocusRipple={true}
            >
              <Typography>Descubre más</Typography>
            </Button>
          )}
        </div>
      ) : (
        <div id="hero-container-desktop" className="hero-container">
          <img className="hero-img" alt="Basalto estudio" src={imgUrl} />
          {text && (
            <div className="hero-text-container">
              <Typography id="hero-title" sx={{ color: "white" }}>
                {text}
              </Typography>
            </div>
          )}
          {button && (
            <Button
              id="hero-button"
              variant="outlined"
              size="large"
              disableFocusRipple={true}
            >
              <Typography>Descubre más</Typography>
            </Button>
          )}
        </div>
      )}
    </>
  );
};

export default HeroImage;
