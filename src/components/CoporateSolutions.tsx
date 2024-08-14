

const CoporateSolutions = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F5F0F0]">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-8">
        Corporate Solutions
      </h2>

      {/* Centered Paragraph */}
      <div className="flex justify-center mb-12">
        <p className="text-xl  text-center max-w-4xl">
          NBK Bancassurance Intermediary Limited has partnered with major insurers to offer your organization with the best risk management advisory and insurance services in Kenya
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:mx-4">
        {/* Image 1 */}
        <div className="relative w-full h-60 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="/images/general-2.png"  
            alt="General Insurance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center  text-white text-center p-4">
            <h3 className="text-xl font-semibold mb-2">General Insurance</h3>
            <button className="border border-white hover:bg-[#FFBA00] text-white py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>
        {/* Image 2 */}
        <div className="relative w-full h-60 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="/images/medical-2.png"  
            alt="Health Insurance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center  text-white text-center p-4">
            <h3 className="text-xl font-semibold mb-2">Health Insurance</h3>
            <button className="border border-white hover:bg-[#FFBA00] text-white py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>
        {/* Image 3 */}
        <div className="relative w-full h-60 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="/images/motor-2.png"  
            alt="Motor Insurance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center  text-white text-center p-4">
            <h3 className="text-xl font-semibold mb-2">Motor Insurance</h3>
            <button className="border border-white hover:bg-[#FFBA00] text-white py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>
        {/* Image 4 */}
        <div className="relative w-full h-60 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="/images/property-2.png"  
            alt="Property Insurance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center  text-white text-center p-4">
            <h3 className="text-xl font-semibold mb-2">Property Insurance</h3>
            <button className="border border-white hover:bg-[#FFBA00] text-white py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoporateSolutions;
