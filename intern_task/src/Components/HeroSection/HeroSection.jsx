import "../Navigation/Navigation.css";
import { IoIosArrowDown } from "react-icons/io";
import warrior from "../../assets/warrior.png";

const HeroSection = () => {
  return (
    <div className="bg-[#191818] h-[70vh] flex justify-center items-center ">
      <div className="w-[50%]">
        <h1 className="text-[#ED0137] font-normal leading-[3.2725] font-shojumaru ">
          INTRODUCTION
        </h1>
        <p className="  font-normal text-[#FFFFFF] w-[500px] leading-[28.56px]">
          We've all been in the mud once, and now we've <br /> decided to fight
          it out. <br />
          Pay tribute to those pioneers of WEB3 and the <br />
          warriors who dedicated their love to the <br /> blockchain. Save the
          lucky ones alive, join us to <br /> save the future! <br /> Our
          mission is to empower everyone to share <br /> wealth and succeed.
        </p>
        <span className="color-[#f5f5f4] heading">read more...</span>
        <button className="gradient w-[178.94px] h-[18.06px] flex justify-center items-center font-shojumaru pt-[17.03px] pr-[21.29px] pb-[17.03px] pl-[21.29px] rounded-[21.92px] gap-[11.35px] mt-[10px]">
          Documents <IoIosArrowDown />
        </button>
      </div>
      <div>
        <img
          src={warrior}
          alt="warrior"
          className="w-[398px] h-[452px] absolute top-[570px] left-[863px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
