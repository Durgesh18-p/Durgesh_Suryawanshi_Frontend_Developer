import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const QnA = () => {
  const [expand, setExpand] = useState(false);

  const expandQna = () => {
    setExpand(!expand);
  };

  return (
    <div className="font-shojumaru">
      <h1 className="text-[#ED0137] absolute top-[50px] left-[885px] text-[30px] ">
        FAQ
      </h1>
      <div
        className="w-[559px] h-[55px] absolute top-[120px] left-[650px]  text-[#ffffff] font-normal border-[1px] border-[#ED0137] rounded-[20px]"
        onClick={() => {
          expandQna();
        }}
      >
        <span className="absolute top-[20px] left-[40px] leading-[23.84px]">
          1
        </span>
        <p className="w-[285px] h-[25px] absolute top-[17px] left-[80px] leading-[26px] ">
          Why choose "Savior"?
        </p>
        <IoIosArrowDown className="text-[20px] absolute top-[20px] left-[500px]" />
      </div>
      <div className="w-[559px] h-[55px] absolute top-[190px] left-[650px]  text-[#ffffff] font-normal border-[1px] border-[#ED0137] rounded-[20px]">
        <span className="absolute top-[20px] left-[40px] leading-[23.84px]">
          2
        </span>
        <p className="w-[545px] h-[25px] absolute top-[17px] left-[80px] leading-[26px] ">
          Why is the IDO duration so long?
        </p>
        <IoIosArrowDown className="text-[20px] absolute top-[20px] left-[500px]" />
      </div>
      <div className="w-[559px] h-[55px] absolute top-[260px] left-[650px]  text-[#ffffff] font-normal border-[1px] border-[#ED0137] rounded-[20px]">
        <span className="absolute top-[20px] left-[40px] leading-[23.84px]">
          3
        </span>
        <p className="w-[340px] h-[25px] absolute top-[17px] left-[80px] leading-[26px] ">
          When will trading go live?
        </p>
        <IoIosArrowDown className="text-[20px] absolute top-[20px] left-[500px]" />
      </div>

      <div className="w-[559px] h-[180px] absolute top-[335px] left-[650px]  text-[#ffffff] font-normal border-[1px] border-[#ED0137] rounded-[20px]">
        <span className="absolute top-[20px] left-[40px] leading-[23.84px]">
          4
        </span>
        <p className="w-[340px] h-[25px] absolute top-[17px] left-[80px] leading-[26px] ">
          When can we claim the tokens?
        </p>
        <IoIosArrowUp className="text-[20px] absolute top-[20px] left-[500px]" />
        <div className="w-[450px] h-[50px] absolute top-[75px] left-[35px] p-[10px] rounded-[20px] bg-[#353434] text-[9px]">
          After the IDO concludes, you can claim the tokens on our official
          website.
        </div>
      </div>
    </div>
  );
};

export default QnA;
