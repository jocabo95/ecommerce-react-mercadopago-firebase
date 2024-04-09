import "./heroImage.css";
import { useTheme } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";


const HeroImage = ({imgUrl, text, button}) => {

  let theme = useTheme()

  let desktop = useMediaQuery(theme.breakpoints.up('sm'))

 
  return (
    <>
      <div id="hero-container">
        {desktop ? (
          <img className="hero-img" alt="Basalto estudio" src={imgUrl} />
        ) : (
          <img
            className="hero-img"
            alt="Basalto estudio"
            src={"src/images/heroMobile1.PNG"}
          />
        )}

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
    </>
  );
};

export default HeroImage;
