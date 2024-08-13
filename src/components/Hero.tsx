const Hero: React.FC = () => {
    return (
      <>
        {/* Desktop version */}
        <div className="hidden md:flex w-full items-center justify-center relative">
          <img 
            src="/images/h.png" 
            alt="Hero Image" 
            className="w-full h-auto" 
          />
          {/* Content overlay on top of the image */}
          <div className="absolute top-1/2 transform -translate-y-1/2 md:left-20 md:w-1/3 w-4/5 max-w-xl">
            <div className="bg-[#30120B] bg-opacity-75 p-4 md:p-8 relative rounded-lg">
              {/* Yellow border with specific positioning */}
              <div className="absolute left-0 top-1/4 bottom-1/4 w-3 bg-[#FFBA00]"></div>
              <h1 className="text-2xl md:text-3xl text-[#FFBA00] font-bold">
                NBK Bancassurance <br /> Intermediary Limited
              </h1>
              <h2 className="text-lg md:text-xl mt-4 text-white">
                A financial safety net designed for you <br /> and everything that matters to you
              </h2>
            </div>
          </div>
        </div>
  
        {/* Mobile version */}
        <div className="md:hidden w-full mx-auto relative">
          <img 
            src="/images/h.png" 
            alt="Hero Image" 
            className="w-full h-auto" 
          />
          {/* Content overlay on top of the image */}
          <div className="absolute top-1/2 transform -translate-y-1/2 w-4/5 max-w-xl mx-4 my-1 bg-[#30120B] bg-opacity-75 p-2 rounded-lg">
            <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-[#FFBA00] mr-2"></div>
            <p className="text-md text-[#FFBA00] font-bold">
              NBK Bancassurance <br /> Intermediary Limited
            </p>
            <p className="text-sm mt-2 text-white">
              A financial safety net designed for you <br /> and everything that matters to you
            </p>
          </div>
        </div>
      </>
    );
  };
  
  export default Hero;
  