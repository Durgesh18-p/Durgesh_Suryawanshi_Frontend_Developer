import image from "../../assets/Rectangle.jpg";
import { FaCopy } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const IDOEvent = () => {
  return (
    <div className="bg-[#000000] w-[100vw] h-[180vh]">
      <img
        src={image}
        alt="background image"
        className="w-[100%] h-[1145px] absolute top-[1015px] overflow-hidden opacity-[15%]"
      />
      <div>
        <h1 className="font-shojumaru absolute w-[823px] h-[54px] top-[1070px] left-[230px] font-normal leading-[50.19px] text-[#ED0137] text-xl text-center">
          Participate in our IDO Event!
        </h1>
      </div>
      <div className="w-[100wh]">
        <div>
          <p className="w-[539px] h-[111px] absolute top-[1180px] left-[80px] heading font-normal leading-[36.51px] align-center text-[#E6E3E3] text-center border-[#C4110C]">
            During our IDO event, you will gain early access to our <br />
            revolutionary ecosystem, designed to empower <br /> everyone to
            share wealth and achieve success.
          </p>
          <p className="bg-[#ED0137] text-[#FFFFFF] absolute w-[244px] h-[70px] top-[1325px] left-[229px] rounded-[20px] z-1 font-normal font-shojumaru leading-[23.84px] flex justify-center items-center">
            Token Info
          </p>
          <div className="w-[412px] h-[382px] absolute top-[1360.27px] left-[145px] rounded-[20px] border-[1.5px] border-gradient border-[#C4110C]">
            <p className="w-[176px] h-[40px] absolute top-[50.26px] left-[70px] heading font-normal leading-[20px] text-[#FFFFFF]">
              Total token <br /> supply
            </p>
            <p className="w-[39px] h-[20px] absolute top-[55.27px] left-[270px] heading font-normal leading-[20px] text-[#DF180A]">
              20%
            </p>
            <p className="w-[176px] h-[40px] absolute top-[115.26px] left-[70px] heading font-normal leading-[20px] text-[#FFFFFF]">
              Soft Cap
            </p>
            <p className="w-[79px] h-[20px] absolute top-[113.27px] left-[270px] heading font-normal leading-[20px] text-[#DF180A]">
              200 BNB
            </p>
            <p className="w-[176px] h-[40px] absolute top-[155.26px] left-[70px] heading font-normal leading-[20px] text-[#FFFFFF]">
              Initial exchange <br />
              rate
            </p>
            <p className="w-[79px] h-[20px] absolute top-[153.27px] left-[270px] heading font-normal leading-[20px] text-[#DF180A]">
              1 BNB
            </p>

            <span className="w-[338px] h-[20px] absolute top-[236.27px] left-[70px] heading font-normal leading-[20px] text-[#FFFFFF]">
              Recommended Referral Commission
            </span>

            <p className="w-[176px] h-[40px] absolute top-[285.26px] left-[70px] heading font-normal leading-[20px] text-[#FFFFFF]">
              1st Generation
            </p>
            <p className="w-[79px] h-[20px] absolute top-[283.27px] left-[270px] heading font-normal leading-[20px] text-[#DF180A]">
              5%
            </p>

            <p className="w-[176px] h-[40px] absolute top-[330.26px] left-[70px] heading font-normal leading-[20px] text-[#FFFFFF]">
              2nd Generation
            </p>
            <p className="w-[79px] h-[20px] absolute top-[330.27px] left-[270px] heading font-normal leading-[20px] text-[#DF180A]">
              2%
            </p>

            <button className="w-[180.49px] h-[39.2px] absolute top-[420px] left-[116px] rounded-[16.21px] pt-[12.6px] pr-[15.75px] pb-[12.6px] pl-[15.75px] gradient flex justify-center items-center text-[#ffffff] font-normal heading">
              Connect Wallet
            </button>

            <h1 className="w-[547px] h-[74px] absolute top-[500px] left-[-80px] heading font-normal heading-[37.08px] text-center text-[#ED0137] text-[25px]">
              Become an affiliate & Earn <br /> 7% as Commission!
            </h1>

            <input
              type="text"
              placeholder="Generate a unique referral link"
              className="w-[467px] h-[48px] absolute top-[590px] left-[-48px] rounded-[20px] border-[1px] bg-transparent border-[#C4110C] pl-[10px] heading"
            />
            <button className="w-[100px] h-[44px] absolute top-[592px] left-[318px] bg-[#ED0137] text-[#ffffff] rounded-[20px] ">
              Generate
            </button>
            <FaCopy className="h-[34px] w-[34px] absolute top-[598px] left-[430px]  text-[#ED0137]" />
          </div>
        </div>
        <div>
          <div
            className="w-[200px] h-[50.86px] absolute top-[1200px] left-[900px] rounded-[3.23px]  border-[#ED0137] flex justify-around items-center
          "
          >
            <span className="pr-[3px]  text-[#FFFFFF] text-center  text-[30px] border-[0.86px] border-[#ED0137]">
              0
            </span>
            <span className=" text-[#FFFFFF] text-center  pr-[3px] text-[30px] border-[0.86px] border-[#ED0137]">
              0
            </span>
            <div className="flex flex-col text-[#ED0137]">
              <GoDotFill />
              <GoDotFill />
            </div>
            <span className=" text-[#FFFFFF] text-center  pr-[3px] text-[30px] border-[0.86px] border-l-[0.86px] border-[#ED0137] pl-[3px]">
              0
            </span>
            <span className=" text-[#FFFFFF] text-center  pr-[3px] text-[30px]  border-[0.86px] border-[#ED0137]">
              0
            </span>
          </div>
          <div className="w-[460px] h-[738px] absolute top-[1225px] left-[760px] rounded-[20px] border-[1.5px] border-[#ED0137]">
            <h1 className="font-shojumaru text-[20px] text-[#ED0137] absolute top-[50px] left-[170px] font-[700]  w-[150px] text-center leading-[63.56px]">
              PRESALE 1
            </h1>
            <p className="w-[367px] h-[32px] absolute top-[128px] left-[150px] heading leading-[32px] text-[#F5F1F1] ">
              1 Saviour = 0.657 USDT
            </p>
            <p className="w-[367px] h-[32px] absolute top-[188px] left-[105px] heading leading-[32px] text-[#F5F1F1] ">
              Next Stage Price = 0.723 USDT
            </p>
            <p className="w-[367px] h-[32px] absolute top-[248px] left-[90px] heading leading-[32px] text-[#F5F1F1] ">
              Sold - $34,56,56,764/$50,00,00,000
            </p>
            <p className="w-[367px] h-[32px] absolute top-[308px] left-[80px] heading leading-[32px] text-[#F5F1F1] ">
              Raised - $34,56,56,764/$40,00,00,000
            </p>
            <div className="flex flex-col absolute top-[400px] left-[45px] gap-[20px]">
              {" "}
              <input
                type="text"
                placeholder="Enter the amount (BNB)"
                className="pr-[18px] pt-[5px] pb-[5px] pl-[5px] bg-transparent border-[0.86px] w-[370px] border-[#C4110C] rounded-[20px] h-[48px]"
              />
              <input
                type="text"
                placeholder="Minimum Quantity to Buy"
                className="pr-[18px] pt-[5px] pb-[5px] pl-[5px] bg-transparent border-[1px] w-[370px] border-[#C4110C] rounded-[20px] h-[48px]"
              />
              <input
                type="text"
                placeholder="Maximum Quantity to Buy"
                className="pr-[18px] pt-[5px] pb-[5px] pl-[5px] bg-transparent border-[1px] w-[370px] border-[#C4110C] rounded-[20px] h-[48px]"
              />
            </div>
          </div>
        </div>
        <div>
          <button className="gradient absolute top-[1870px] left-[880px] p-[14px,21px] rounded-[21.92px] w-[73.8px] h-[45px] text-[#ffffff] heading">
            Buy
          </button>
          <button className="gradient absolute top-[1870px] left-[980px] p-[14px,21px] rounded-[21.92px] w-[131.58px] h-[45px] text-[#ffffff] heading">
            Claim Drop
          </button>
        </div>
      </div>
    </div>
  );
};

export default IDOEvent;
