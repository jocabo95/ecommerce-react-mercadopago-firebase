import HeroImage from "../../common/heroImage/HeroImage";
import Mobiliario from "./mobiliario/Mobiliario";
import Proyectos from "./proyectos/Proyectos";



const Home = () => {

  const heroText="Arquitectura y diseño interior"

  return (
    <div>
      <HeroImage imgUrl={"src/images/heroDesktop1.PNG"} text={heroText} button={true} />
      <Mobiliario />
      <Proyectos />
    </div>
  );
};

export default Home;
