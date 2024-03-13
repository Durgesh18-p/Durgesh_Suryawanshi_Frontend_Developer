/* eslint-disable react/prop-types */ // Disables prop type checking for this file

import logo from "../../assets/Logo.png";
import Navbar from "./Navbar"; // Importing the Navbar component

// Navigation component responsible for rendering the logo, heading, and Navbar
const Navigation = ({ connectWallet }) => {
  return (
    <div>
      {/* Logo and Heading */}
      <div>
        <img
          src={logo} // Logo image source
          alt="Logo" // Alternate text for the logo
          className="w-[103px] h-[117px] absolute top-[27px] left-[88px]" // CSS classes for styling
        />
        <h1 className="w-32 h-8 ml-20 mt-5 font-normal text-2xl leading-8 text-center heading absolute top-[29px] left-[95px] text-[#FFFFFF]">
          Saviour {/* Heading text */}
        </h1>
      </div>
      {/* Navbar Component */}
      <Navbar connectWallet={connectWallet} />{" "}
      {/* Passing the connectWallet prop to the Navbar component */}
      {/* Empty div */}
      <div></div>
    </div>
  );
};

export default Navigation; // Exporting the Navigation component
