import { FaCopy } from "react-icons/fa";

const TokenInfo = () => {
  return (
    <div>
      <p className="w-[539px] h-[111px] absolute top-[1180px] left-[80px] heading font-normal leading-[36.51px] align-center text-[#E6E3E3] text-center border-[#C4110C]">
        During our IDO event, you will gain early access to our <br />
        revolutionary ecosystem, designed to empower <br /> everyone to share
        wealth and achieve success.
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
  );
};

export default TokenInfo;
