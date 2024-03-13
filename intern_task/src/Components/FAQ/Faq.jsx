import image from "../../assets/image1.png"; // Importing image1.png from the assets directory
import QnA from "./QnA"; // Importing the QnA component

// Functional component for FAQ section
const Faq = () => {
  return (
    <div className="bg-[#000000] h-[100vh] w-[100vw] absolute top-[3300px]">
      {/* Container for the shield image */}
      <div>
        {/* Shield image */}
        <img
          src={image} // Image source set to the imported image
          alt="Shield" // Alt attribute for accessibility
          className="absolute w-[470px] h-[470px] top-[60px] animate-shine-grow" // CSS classes for styling
        />
      </div>
      {/* Render the QnA component */}
      <QnA />
    </div>
  );
};

export default Faq; // Export the Faq component
