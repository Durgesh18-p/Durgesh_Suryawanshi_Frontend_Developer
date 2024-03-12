import image from "../../assets/Rectangle2.jpg";
import frame from "../../assets/Frame.png";

const Tokenomics = () => {
  return (
    <div className="w-[100vw] h-[100vh] absolute top-[2100px] bg-[#000000] ">
      <img src={image} alt="backgroun Image" className="opacity-[15%]" />
      <div>
        <h1 className="w-[330px] h-[52px] absolute top-[50px] left-[562px] font-shojumaru font-[700] text-[35px] leading-[52.36px] text-[#ED0137]">
          Tokenomics
        </h1>
      </div>
      <div>
        <p className="w-[200px] h-[24px] absolute top-[150px] left-[260px] font-shojumaru  leading-[23.84px] text-[#ffffff] text-center bg-[#ED0137] rounded-[20px] flex justify-center items-center p-[25px]">
          Token Details
        </p>
        <div className="w-[412px] h-[306px] absolute top-[175px] left-[150px] heading  rounded-[20px] border-[1.5px]">
          <p className="w-[55px] h-[20px] absolute top-[50px] left-[80px] leading-[20px] text-[#ffffff]">
            Name
          </p>
          <p className="w-[55px] h-[20px] absolute top-[50px] left-[275px] leading-[20px] text-[#DF180A]">
            Saviour
          </p>
          <p className="w-[55px] h-[20px] absolute top-[110px] left-[80px] leading-[20px] text-[#ffffff]">
            Symbol
          </p>
          <p className="w-[55px] h-[20px] absolute top-[110px] left-[275px] leading-[20px] text-[#DF180A]">
            SVR
          </p>
          <p className="w-[100px] h-[20px] absolute top-[170px] left-[80px] leading-[20px] text-[#ffffff]">
            Total Supply
          </p>
          <p className="w-[100px] h-[20px] absolute top-[170px] left-[275px] leading-[20px] text-[#DF180A]">
            1000 Trillion
          </p>
          <p className="w-[55px] h-[20px] absolute top-[230px] left-[80px] leading-[20px] text-[#ffffff]">
            Decimals{" "}
          </p>
          <p className="w-[55px] h-[20px] absolute top-[230px] left-[275px] leading-[20px] text-[#DF180A]">
            18
          </p>
        </div>
      </div>
      <div>
        <img
          src={frame}
          alt="Frame"
          className="w-[600px] h-[302px] absolute top-[170px] left-[700px]"
        />
      </div>
    </div>
  );
};

export default Tokenomics;
