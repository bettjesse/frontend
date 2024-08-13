import React from 'react';

const CoreValues: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
        
        {/* Our Mission */}
        <div className="flex-1 text-center bg-[#F5F0F0] p-4 rounded-md">
          <img
            src="/images/mission.jpg"
            alt="Our Mission"
            className="mx-auto mb-4 w-24 h-24 object-cover rounded-full"
          />
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-700">
          We are dedicated to care and skill in providing competitive insurance and risk management solutions to our customers, providing attractive opportunities to our employees and improving our stakeholders’ value.
          </p>
        </div>

        {/* Our Vision */}
        <div className="flex-1 text-center  bg-[#F5F0F0] p-4 rounded-md">
          <img
            src="/images/vision.jpg"
            alt="Our Vision"
            className="mx-auto mb-4 w-24 h-24 object-cover rounded-full"
          />
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-700">
          To be the insurance intermediary of choice for our customers.
          </p>
        </div>

        {/* Our Purpose */}
        <div className="flex-1 text-center  bg-[#F5F0F0] p-4 rounded-md">
          <img
            src="/images/purpose.jpg"
            alt="Our Purpose"
            className="mx-auto mb-4 w-24 h-24 object-cover rounded-full"
          />
          <h3 className="text-xl font-semibold mb-2">Our Purpose</h3>
          <p className="text-gray-700">
          We believe that insurance is one of the best ways of protecting your wealth. Our solutions provide our customers with an opportunity to manage and mitigate against any perils.
          </p>
        </div>

        {/* Our Customer Promise */}
        <div className="flex-1 text-center  bg-[#F5F0F0] p-4 rounded-md">
          <img
            src="/images/promise.jpg"
            alt="Our Customer Promise"
            className="mx-auto mb-4 w-24 h-24 object-cover rounded-full"
          />
          <h3 className="text-xl font-semibold mb-2">Our Customer Promise</h3>
          <p className="text-gray-700">
          To put our customers firmly at the forefront of everything we do and deliver on our promises.
          </p>
        </div>

      </div>
    </div>
  );
};

export default CoreValues;
