import logo from "../../assets/Logo.png";
import "./Navigation.css";
import Navbar from "./Navbar";

const Navigation = () => {
  return (
    <div>
      <div>
        <img
          src={logo}
          alt=""
          style={{
            width: " 106px",
            height: "117px",
            position: "absolute",
            top: "27px",
            left: "88px",
          }}
        />
        <h1
          className="w-32 h-8  ml-20 mt-5 font-normal text-2xl leading-8 text-center heading"
          style={{
            position: "absolute",
            top: "29px",
            left: "95px",
            color: "#FFFFFF",
          }}
        >
          Saviour
        </h1>
      </div>
      <Navbar />
      <div></div>
    </div>
  );
};

export default Navigation;
