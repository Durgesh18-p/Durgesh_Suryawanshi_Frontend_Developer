import hero from "../assets/Hero_image.png";
import Navigation from "./Navigation/Navigation";

const Hero = () => {
  return (
    <div>
      <img
        src={hero}
        alt="Hero image"
        style={{
          height: "588px",
          width: "1512px",
          zIndex: "-1",
        }}
      />
      <div
        style={{
          position: "fixed",
          top: "276px",
          left: "123px",
          height: "108px",
          width: "1262px",
          color: "#FBF6F6",
        }}
      >
        <p className="font-shojumaru text-4xl leading-10 text-center">
          Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
        </p>
      </div>
      <Navigation />
    </div>
  );
};

export default Hero;
