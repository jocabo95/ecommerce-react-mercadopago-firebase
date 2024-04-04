import "./heroImage.css";
import { Button, Typography } from "@mui/material";

const HeroImage = ({imgUrl, text, button}) => {

 
  return (
    <>
      
      <div id="hero-container">
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
      
    </>
  );
};

export default HeroImage;
