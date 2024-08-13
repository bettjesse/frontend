import React from 'react';

const Forex = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap relative bg-[#F9EBE8] py-8 px-8">
      <div className="absolute inset-0 flex animate-marquee items-center">
        <div className="flex space-x-8 text-lg font-semibold text-[#30120B]">
          {/* Forex Label */}
          <span className="mr-8 text-xl font-bold text-[#30120B]">Forex</span>
          {/* Currency Data */}
          <span className="text-[#30120B]">USD: <span className="text-black">Buying: 86.17</span></span>
          <span className="text-[#30120B]">GBP: <span className="text-black">Buying: 101.32</span></span>
          <span className="text-[#30120B]">INR: <span className="text-black">Buying: 1.16</span></span>
          <span className="text-[#30120B]">EURO: <span className="text-black">Buying: 92.47</span></span>
        </div>
        <div className="flex space-x-8 text-lg mx-8 font-semibold text-[#30120B]">
          {/* Repeat Currency Data */}
          <span className="text-[#30120B]">USD: <span className="text-black">Buying: 86.17</span></span>
          <span className="text-[#30120B]">GBP: <span className="text-black">Buying: 101.32</span></span>
          <span className="text-[#30120B]">INR: <span className=" text-black">Buying: 1.16</span></span>
          <span className="text-[#30120B]">EURO: <span className="text-black">Buying: 92.47</span></span>
        </div>
      </div>
    </div>
  );
};

export default Forex;
