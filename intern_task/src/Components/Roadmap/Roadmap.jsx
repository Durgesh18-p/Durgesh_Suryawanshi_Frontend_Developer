import frame from "../../assets/Rectangle2.jpg";
import frame4 from "../../assets/Frame4.png";

const Roadmap = () => {
  return (
    <div className="w-[100vw] h-[100vh] absolute top-[2700px] bg-[#000000] ">
      <img src={frame} alt="backgroun Image" className="opacity-[15%]" />
      <div className="absolute top-[120px] left-[100px]">
        <h1 className="w-[282px] h-[52px] absolute top-[-70px] left-[500px] text-[35px] text-[#ED0137] font-shojumaru ">
          Road Map
        </h1>
        <img src={frame4} alt="" className="mt-[50px] " />
      </div>
    </div>
  );
};

export default Roadmap;
