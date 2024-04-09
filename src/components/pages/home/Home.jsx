import HeroImage from "../../common/heroImage/HeroImage";

const Home = () => {

  const heroText="Arquitectura y diseño interior"

  return (
    <div>
      <HeroImage imgUrl={"src/images/heroDesktop.PNG"} text={heroText} button={true} />
    </div>
  );
};

export default Home;
