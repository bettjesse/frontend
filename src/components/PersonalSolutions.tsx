import React from 'react';

const PersonalSolutions = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Personal Solutions
      </h2>

      {/* Centered Paragraph */}
      <div className="flex justify-center mb-12">
        <p className="text-xl  text-center max-w-4xl">
          Looking for motor, health, property, or general cover? Enjoy quality product offerings with high standards of service from NBK Bancassurance Intermediary Limited.
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:mx-4">
        {/* Image 1 */}
        <div className="relative w-full h-60 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="/images/general.png"  
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
            src="/images/health.png"  
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
            src="/images/motor.png"  
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
            src="/images/property.png"  
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

export default PersonalSolutions;
