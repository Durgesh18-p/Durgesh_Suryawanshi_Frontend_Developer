/* eslint-disable react/prop-types */
import logo from "../../assets/Logo.png";

import Navbar from "./Navbar";

const Navigation = ({ connectWallet }) => {
  return (
    <div>
      <div>
        <img
          src={logo}
          alt="Logo"
          className="w-[103px] h-[117px] absolute top-[27px] left-[88px]"
        />
        <h1 className="w-32 h-8  ml-20 mt-5 font-normal text-2xl leading-8 text-center heading absolute top-[29px] left-[95px] text-[#FFFFFF]">
          Saviour
        </h1>
      </div>
      <Navbar connectWallet={connectWallet} />
      <div></div>
    </div>
  );
};

export default Navigation;
