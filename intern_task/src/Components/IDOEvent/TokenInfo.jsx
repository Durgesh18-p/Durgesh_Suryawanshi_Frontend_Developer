import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Function to generate a random string of specified length
const generateRandomString = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

// TokenInfo component
const TokenInfo = () => {
  const [referralLink, setReferralLink] = useState(""); // State variable to store the generated referral link

  // Function to generate a random referral link
  const generateReferralLink = () => {
    const randomString = generateRandomString(10); // Change the length as needed
    setReferralLink(randomString);
  };

  // Function to copy the referral link to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink); // Copy to clipboard
    setReferralLink(""); // Clear the referral link from state
    toast("Copied to clipboard!"); // Display toast message
  };

  return (
    <div>
      {/* Text information */}
      <p className="w-[539px] h-[111px] absolute top-[1180px] left-[80px] heading font-normal leading-[36.51px] align-center text-[#E6E3E3] text-center border-[#C4110C]">
        During our IDO event, you will gain early access to our <br />
        revolutionary ecosystem, designed to empower <br /> everyone to share
        wealth and achieve success.
      </p>
      {/* Token Info heading */}
      <p className="bg-[#ED0137] text-[#FFFFFF] absolute w-[244px] h-[70px] top-[1325px] left-[229px] rounded-[20px] z-1 font-normal font-shojumaru leading-[23.84px] flex justify-center items-center">
        Token Info
      </p>
      {/* Token information container */}
      <div className="w-[412px] h-[382px] absolute top-[1360.27px] left-[145px] rounded-[20px] border-[1.5px] border-gradient border-[#C4110C]">
        {/* Token details */}
        {/* ... */}
        {/* Affiliate section */}
        <h1 className="w-[547px] h-[74px] absolute top-[500px] left-[-80px] heading font-normal heading-[37.08px] text-center text-[#ED0137] text-[25px]">
          Become an affiliate & Earn <br /> 7% as Commission!
        </h1>
        {/* Referral link input and generate button */}
        <input
          type="text"
          placeholder="Generate a unique referral link"
          value={referralLink}
          readOnly
          className="w-[467px] h-[48px] absolute top-[590px] left-[-48px] rounded-[20px] border-[1px] bg-transparent border-[#C4110C] pl-[10px] heading text-[#ffffff]"
        />
        <button
          className="w-[100px] h-[44px] absolute top-[592px] left-[318px] bg-[#ED0137] text-[#ffffff] rounded-[20px]"
          onClick={generateReferralLink}
        >
          Generate
        </button>
        {/* Copy button */}
        <FaCopy
          className="h-[34px] w-[34px] absolute top-[598px] left-[430px]  text-[#ED0137] cursor-pointer"
          onClick={copyToClipboard}
        />
      </div>
      {/* Toast container for displaying copy success message */}
      <ToastContainer />
    </div>
  );
};

export default TokenInfo; // Exporting the TokenInfo component
