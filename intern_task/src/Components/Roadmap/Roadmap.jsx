import frame from "../../assets/Rectangle2.jpg"; // Import background image
import frame4 from "../../assets/Frame4.png"; // Import image for the roadmap

// Roadmap component responsible for rendering the roadmap section
const Roadmap = () => {
  return (
    <div className="w-[100vw] h-[100vh] absolute top-[2700px] bg-[#000000] ">
      {/* Background image */}
      <img src={frame} alt="backgroun Image" className="opacity-[15%]" />

      {/* Content */}
      <div className="absolute top-[120px] left-[100px]">
        {/* Heading */}
        <h1 className="w-[282px] h-[52px] absolute top-[-70px] left-[500px] text-[35px] text-[#ED0137] font-shojumaru ">
          Road Map {/* Road Map heading */}
        </h1>

        {/* Roadmap image */}
        <img src={frame4} alt="" className="mt-[50px]" />
      </div>
    </div>
  );
};

export default Roadmap; // Export the Roadmap component
