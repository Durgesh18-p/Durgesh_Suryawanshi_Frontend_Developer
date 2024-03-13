import hero from "../../assets/Hero_image.png";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <div>
      <img src={hero} alt="Hero image" className="h-[588px] w-[1512px] z-1" />
      <div className="absolute top-[176px] left-[123px] h-[108px] w-[1262px] text-[#FBF6F6] flex justify-center items-center">
        <p className="font-shojumaru text-4xl leading-10 text-center absolute top-[110px] left-[70px] animated-text">
          Where Blockchain Heroes Thrive, Rescuing <br /> Dreams, Elevating
          Fortunes.
        </p>
      </div>
      <Navigation />
    </div>
  );
};

export default Hero;
