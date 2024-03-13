import logo from "../../assets/footerlogo.png"; // Importing the logo image
import { FaTwitter } from "react-icons/fa"; // Importing the Twitter icon
import { FaTelegramPlane } from "react-icons/fa"; // Importing the Telegram icon
import { IoIosMail } from "react-icons/io"; // Importing the Mail icon

// Footer component
const Footer = () => {
  return (
    <div className="background_gradient w-[100vw] h-[420px] absolute top-[3905px] flex flex-col items-center">
      <div>
        {/* Logo */}
        <img
          src={logo}
          alt="saviour logo"
          className="w-[215px] h-[210px] mt-[10px]"
        />

        {/* Text */}
        <div className="absolute left-[645px] text-[20px] font-[600]">
          <span
            style={{
              background: "linear-gradient(90deg, #FF002A 0%, #720005 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            S
          </span>
          <span
            style={{
              background: "linear-gradient(90deg, #FF002A 0%, #720005 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            I
          </span>
          <span
            style={{
              background: "linear-gradient(90deg, #FF002A 0%, #720005 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            T
          </span>
          <span
            style={{
              background: "linear-gradient(90deg, #FF002A 0%, #720005 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            E
          </span>
          <span
            style={{
              background: "linear-gradient(90deg, #FF002A 0%, #720005 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            M
          </span>
          <span
            style={{
              background: "linear-gradient(90deg, #FF002A 0%, #720005 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            A
          </span>
          <span
            style={{
              background: "linear-gradient(90deg, #FF002A 0%, #720005 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            P
          </span>
        </div>

        {/* Navigation */}
        <div className="w-[620px] h-[20px] absolute top-[290px] left-[380px]">
          <ul className="flex gap-[17px] text-[#ffffff] font_poppins">
            <li>Home</li>
            <li>IDO</li>
            <li>Tokenomics</li>
            <li>Road Map</li>
            <li>Whitepaper</li>
            <li>Pledge</li>
            <li>NFT</li>
            <li>Games</li>
          </ul>
        </div>

        {/* Social media icons */}
        <div className="flex gap-[1px] absolute top-[350px] left-[610px]">
          <FaTwitter className="text-[#ED0137] w-[50px] h-[27px] " />
          <FaTelegramPlane className="text-[#ED0137] w-[50px] h-[27px] " />
          <IoIosMail className="text-[#ED0137] w-[50px] h-[27px] " />
        </div>
      </div>
    </div>
  );
};

export default Footer; // Exporting the Footer component
