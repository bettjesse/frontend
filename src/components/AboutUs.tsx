import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row md:space-x-8">
     
        <div className="md:w-3/5">
          <h2 className="text-3xl text-black font-bold mb-4">About Bancassurance</h2>
          <p className="mb-6 text-lg">
            NBK Bancassurance Intermediary Limited, established in 2009, is a fully-fledged subsidiary of National Bank of Kenya Limited. It meets the insurance needs of our customers and the bank. NBK Bancassurance Intermediary is regulated by the Insurance Regulatory Authority. We have partnered with major insurance companies in Kenya to provide you with competitive products and high standards of service.
          </p>
<div className=' mt-12 md:py-6 py-4 '>
          <h3 className="text-xl font-semibold mb-4">Why NBK Bancassurance Intermediary Ltd ( Not Insurance Agency).</h3>
          <ul className="list-disc list-inside space-y-2 text-md">
            <li>Convenience of buying insurance through a trusted intermediary</li>
            <li>One stop shop for all your insurance and banking needs.</li>
            <li>Risk advisory on suitable insurance coverage based on your needs</li>
            <li>Insurance claims</li>
          </ul>
          </div>
        </div>

        {/* Form Section */}
        <div className="md:w-2/5 mt-8 md:mt-0 bg-[#3C251F] p-4">
          <h2 className="text-xl font-bold mb-4 text-white">Interested in Bancassurance or have a question?</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-white ">Full Name</label>
              <input
                type="text"
                id="fullName"
                className="mt-1 block w-full px-3 py-2 border border-white rounded-md shadow-sm bg-transparent focus:outline-none focus:bg-white focus:text-black focus:ring-[#FFBA00] focus:border-[#FFBA00]"
                placeholder="Your Full Name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white ">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full px-3 py-2 border border-white rounded-md shadow-sm bg-transparent focus:outline-none focus:bg-white focus:text-black focus:ring-[#FFBA00] focus:border-[#FFBA00]"
                placeholder="Your Phone Number"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white ">Email Address</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-white rounded-md shadow-sm bg-transparent focus:outline-none focus:bg-white focus:text-black focus:ring-[#FFBA00] focus:border-[#FFBA00]"
                placeholder="Your Email Address"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white ">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-white rounded-md shadow-sm bg-transparent focus:outline-none focus:bg-white focus:text-black focus:ring-[#FFBA00] focus:border-[#FFBA00]"
                placeholder="Your Message"
              />
            </div>

            <button
              type="submit"
              className="w-full md:text-lg bg-[#FFBA00] text-[#3C251F] py-2 px-4 rounded-md shadow hover:bg-[#e1a900] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFBA00] flex justify-between items-center"
            >
              Send My Request
              <BsArrowRight size={25}/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
