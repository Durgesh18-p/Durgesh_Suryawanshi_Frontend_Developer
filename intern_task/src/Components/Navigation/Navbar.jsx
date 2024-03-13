/* eslint-disable react/prop-types */
import { IoIosArrowDown } from "react-icons/io";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { useState } from "react";

const Navbar = ({ connectWallet }) => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <nav className="w-100   rounded-lg flex justify-center items-center absolute top-[50px] left-[498px] bg-[#191818]">
      <ul className=" px-8 py-2 flex gap-[24px] w-full text-gray-100 w-583 heading rounded-20">
        <li>Home</li>
        <li>IDO</li>
        <li>Tokenomics</li>
        <li>Roadmap</li>
        <li>
          Coming Soon{" "}
          <IoIosArrowDown className="absolute top-[13px] left-[460px]" />
        </li>
      </ul>

      {/* <div className="relative">
        <GiHamburgerMenu
          className="block md:hidden text-white text-2xl"
          onClick={toggleMenu}
        />
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-end">
            <ul className="p-8 flex flex-col gap-4 text-gray-100 w-60">
              <li>Home</li>
              <li>IDO</li>
              <li>Tokenomics</li>
              <li>Roadmap</li>
              <li className="flex items-center gap-3">
                Coming Soon <IoIosArrowDown />
              </li>
            </ul>
          </div>
        )}
      </div> */}

      <button
        className="gradient w-[127px] h-[38px] absolute top-[1px] right-[-300px] rounded-[15.44px]"
        onClick={() => {
          connectWallet();
        }}
      >
        Connect Wallet
      </button>
    </nav>
  );
};

export default Navbar;
