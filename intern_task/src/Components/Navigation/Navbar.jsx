import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="w-100   rounded-lg flex justify-center items-center absolute top-[50px] left-[498px] bg-[#191818]">
      <ul className=" px-8 py-2 flex gap-[24px] w-full text-gray-100 w-583 heading rounded-20">
        <li>Home</li>
        <li>IDO</li>
        <li>Tokenomics</li>
        <li>Roadmap</li>
        <li className="flex gap-[3px]">
          Coming Soon{" "}
          <IoIosArrowDown className="absolute top-[13px] left-[460px]" />
        </li>
      </ul>

      <button className="gradient w-[127px] h-[38px] absolute top-[1px] right-[-300px] rounded-[15.44px]">
        Connect Wallet
      </button>
    </nav>
  );
};

export default Navbar;
