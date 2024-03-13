// Presale component
const Presale = () => {
  return (
    <div className="w-[460px] h-[738px] absolute top-[1225px] left-[760px] rounded-[20px] border-[1.5px] border-[#ED0137]">
      {/* Heading */}
      <h1 className="font-shojumaru text-[20px] text-[#ED0137] absolute top-[50px] left-[170px] font-[700] w-[150px] text-center leading-[63.56px]">
        PRESALE 1
      </h1>
      {/* Presale details */}
      <p className="w-[367px] h-[32px] absolute top-[128px] left-[150px] heading leading-[32px] text-[#F5F1F1]">
        1 Saviour = 0.657 USDT
      </p>
      <p className="w-[367px] h-[32px] absolute top-[188px] left-[105px] heading leading-[32px] text-[#F5F1F1]">
        Next Stage Price = 0.723 USDT
      </p>
      <p className="w-[367px] h-[32px] absolute top-[248px] left-[90px] heading leading-[32px] text-[#F5F1F1]">
        Sold - $34,56,56,764/$50,00,00,000
      </p>
      <p className="w-[367px] h-[32px] absolute top-[308px] left-[80px] heading leading-[32px] text-[#F5F1F1]">
        Raised - $34,56,56,764/$40,00,00,000
      </p>
      {/* Input fields */}
      <div className="flex flex-col absolute top-[400px] left-[45px] gap-[20px]">
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
  );
};

export default Presale; // Exporting the Presale component
