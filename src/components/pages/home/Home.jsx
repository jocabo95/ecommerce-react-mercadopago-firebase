import HeroImage from "../../common/heroImage/HeroImage";

const Home = () => {

  const heroText="Arquitectura y diseño interior"

  return (
    <div>
      <HeroImage imgUrl={"src/images/lampara.PNG"} text={heroText} button={true} />
    </div>
  );
};

export default Home;
