import image from "../../assets/Rectangle2.jpg"; // Import background image
import frame from "../../assets/Frame.png"; // Import image for Tokenomics section

// Tokenomics component responsible for rendering the Tokenomics section
const Tokenomics = () => {
  return (
    <div className="w-[100vw] h-[100vh] absolute top-[2100px] bg-[#000000] ">
      {/* Background image */}
      <img src={image} alt="background Image" className="opacity-[15%]" />

      {/* Tokenomics content */}
      <div>
        {/* Heading */}
        <h1 className="w-[330px] h-[52px] absolute top-[50px] left-[562px] font-shojumaru font-[700] text-[35px] leading-[52.36px] text-[#ED0137]">
          Tokenomics {/* Tokenomics heading */}
        </h1>
      </div>

      {/* Token Details */}
      <div>
        {/* Token Details heading */}
        <p className="w-[200px] h-[24px] absolute top-[150px] left-[260px] font-shojumaru  leading-[23.84px] text-[#ffffff] text-center bg-[#ED0137] rounded-[20px] flex justify-center items-center p-[25px]">
          Token Details
        </p>

        {/* Token Details content */}
        <div className="w-[412px] h-[306px] absolute top-[175px] left-[150px] heading  rounded-[20px] border-[1.5px]">
          <p className="w-[55px] h-[20px] absolute top-[50px] left-[80px] leading-[20px] text-[#ffffff]">
            Name {/* Token name */}
          </p>
          <p className="w-[55px] h-[20px] absolute top-[50px] left-[275px] leading-[20px] text-[#DF180A]">
            Saviour {/* Token symbol */}
          </p>
          <p className="w-[100px] h-[20px] absolute top-[110px] left-[80px] leading-[20px] text-[#ffffff]">
            Total Supply {/* Token total supply */}
          </p>
          <p className="w-[100px] h-[20px] absolute top-[110px] left-[275px] leading-[20px] text-[#DF180A]">
            1000 Trillion {/* Token total supply value */}
          </p>
          <p className="w-[55px] h-[20px] absolute top-[170px] left-[80px] leading-[20px] text-[#ffffff]">
            Decimals {/* Token decimals */}
          </p>
          <p className="w-[55px] h-[20px] absolute top-[170px] left-[275px] leading-[20px] text-[#DF180A]">
            18 {/* Token decimals value */}
          </p>
        </div>
      </div>

      {/* Frame image */}
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

export default Tokenomics; // Export the Tokenomics component
