/* eslint-disable react/prop-types */

import hero from "../../assets/Hero_image.png"; // Importing the hero image
import Navigation from "./Navigation"; // Importing the Navigation component

// Hero component definition
const Hero = ({ connectWallet }) => {
  return (
    <div id="home">
      {/* Hero image */}
      <img src={hero} alt="Hero image" className="h-[588px] w-[1512px] z-1" />
      {/* Text overlay */}
      <div className="absolute top-[176px] left-[123px] h-[108px] w-[1262px] text-[#FBF6F6] flex justify-center items-center">
        <p className="font-shojumaru text-4xl leading-10 text-center absolute top-[110px] left-[70px] animated-text">
          Where Blockchain Heroes Thrive, Rescuing <br /> Dreams, Elevating
          Fortunes.
        </p>
      </div>
      {/* Navigation component */}
      <Navigation connectWallet={connectWallet} />
    </div>
  );
};

export default Hero; // Exporting the Hero component
