import image from "../../assets/image1.png";
import QnA from "./QnA";

const Faq = () => {
  return (
    <div className="bg-[#000000] h-[100vh] w-[100vw] absolute top-[3300px]">
      <div>
        <img
          src={image}
          alt="Shield"
          className="absolute w-[470px] h-[470px] top-[60px] animate-shine-grow"
        />
      </div>
      <QnA />
    </div>
  );
};

export default Faq;
