import HeroImage from "../../common/heroImage/HeroImage";
import Mobiliario from "./mobiliario/Mobiliario";

const Home = () => {

  const heroText="Arquitectura y diseño interior"

  return (
    <div>
      <HeroImage imgUrl={"src/images/heroDesktop1.PNG"} text={heroText} button={true} />
      <Mobiliario />
    </div>
  );
};

export default Home;
