import image from "../../assets/Rectangle.jpg"; // Importing background image
import Presale from "./Presale"; // Importing Presale component
import { GoDotFill } from "react-icons/go"; // Importing GoDotFill icon component
import ButtonContainer from "./ButtonContainer"; // Importing ButtonContainer component
import TokenInfo from "./TokenInfo"; // Importing TokenInfo component

// IDOEvent component
const IDOEvent = () => {
  return (
    <div className="bg-[#000000] w-[100vw] h-[180vh]" id="ido">
      {/* Background image */}
      <img
        src={image}
        alt="background image"
        className="w-[100%] h-[1145px] absolute top-[1015px] overflow-hidden opacity-[15%]"
      />
      <div>
        {/* Heading */}
        <h1 className="font-shojumaru absolute w-[823px] h-[54px] top-[1070px] left-[230px] font-normal leading-[50.19px] text-[#ED0137] text-xl text-center">
          Participate in our IDO Event!
        </h1>
      </div>
      <div className="w-[100wh]">
        {/* TokenInfo component */}
        <TokenInfo />
        <div>
          <div className="w-[200px] h-[50.86px] absolute top-[1200px] left-[900px] rounded-[3.23px] border-[#ED0137] flex justify-around items-center">
            {/* Dot indicators */}
            <span className="pr-[3px]  text-[#FFFFFF] text-center  text-[30px] border-[0.86px] border-[#ED0137]">
              0
            </span>
            <span className="text-[#FFFFFF] text-center  pr-[3px] text-[30px] border-[0.86px] border-[#ED0137]">
              0
            </span>
            <div className="flex flex-col text-[#ED0137]">
              <GoDotFill />
              <GoDotFill />
            </div>
            <span className="text-[#FFFFFF] text-center  pr-[3px] text-[30px] border-[0.86px] border-l-[0.86px] border-[#ED0137] pl-[3px]">
              0
            </span>
            <span className="text-[#FFFFFF] text-center  pr-[3px] text-[30px]  border-[0.86px] border-[#ED0137]">
              0
            </span>
          </div>
        </div>
        {/* Presale component */}
        <Presale />
        {/* ButtonContainer component */}
        <ButtonContainer />
      </div>
    </div>
  );
};

export default IDOEvent; // Exporting the IDOEvent component
