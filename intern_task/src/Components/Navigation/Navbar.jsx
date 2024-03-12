import "./Navigation.css";

const Navbar = () => {
  return (
    <nav className="w-100   rounded-lg flex justify-center items-center fixed top-[50px] left-[498px] bg-[#191818]">
      <ul className=" px-8 py-2 flex gap-[24px] w-full text-gray-100 w-583 heading rounded-20">
        <li>Home</li>
        <li>IDO</li>
        <li>Tokenomics</li>
        <li>Roadmap</li>
        <li>Coming Soon</li>
      </ul>

      <button className="gradient w-[127px] h-[38px] fixed top-[40px] right-[50px] rounded-[15.44px]">
        Connect Wallet
      </button>
    </nav>
  );
};

export default Navbar;
