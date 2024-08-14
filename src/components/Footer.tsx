
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <div>
      {/* Image at the top */}
      <div className="w-full">
        <img
          src="/images/footer-1.png" 
          alt="Footer Background"
          className="w-full h-auto"
        />
      </div>

      {/* First Footer Section */}
      <footer className="bg-[#FFBA00] text-white py-8 px-4 md:px-8">
        <div className="container mx-auto">
          {/* Grid for larger screens */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Column 1 */}
            <div className="space-y-4 ">
              <h3 className="font-bold text-sm md:text-xl text-[#30120B]">For You</h3>
              <ul className=' text-sm font-semibold text-[#30120B]'>
                <li><a href="#" className="hover:underline">Open an Account</a></li>
                <li><a href="#" className="hover:underline">Get a Loan</a></li>
                <li><a href="#" className="hover:underline">Invest</a></li>
                <li><a href="#" className="hover:underline">Get a Card</a></li>
            
              </ul>
            </div>
            
            {/* Column 2 */}
            <div className="space-y-4 text-sm md:text-base">
              <h3 className="font-bold text-sm md:text-xl text-[#30120B]">For Your Biashara</h3>
              <ul className=' text-sm font-semibold text-[#30120B]'>
              <li><a href="#" className="hover:underline">Open an Account</a></li>
              <li><a href="#" className="hover:underline">Get a Loan</a></li>
                <li><a href="#" className="hover:underline">Trade Finance</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-4 text-sm md:text-base">
              <h3 className="font-bold text-sm md:text-xl text-[#30120B]">For Corporate</h3>
              <ul className=' text-sm font-semibold text-[#30120B]'>
              <li><a href="#" className="hover:underline">Accounts</a></li>
                <li><a href="#" className="hover:underline">Financing</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
             
              </ul>
            </div>

            {/* Column 4 */}
            <div className="space-y-4 text-sm md:text-base">
              <h3 className="font-bold text-sm md:text-xl text-[#30120B]">Quick Links</h3>
              <ul className=' text-sm font-semibold text-[#30120B]'>
              <li><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Complaing Handling</a></li>
                <li><a href="#" className="hover:underline">Service Charter</a></li>
              </ul>
            </div>

            {/* Column 5 */}
            <div className="space-y-4 text-sm md:text-base">
              <h3 className="font-bold text-sm md:text-xl text-[#30120B]">Banking Hours</h3>
              <ul className=' text-sm font-semibold text-[#30120B]'>
                <li><a href="#" className="hover:underline">Mon-Fri: 8:30 am- 4:00pm</a></li>
                <li><a href="#" className="hover:underline">Sat: 8:30 am -12:00pm</a></li>
                <li><a href="#" className="hover:underline">Public Holidays : Closed</a></li>
              </ul>
            </div>
          </div>

          {/* Grid layout for mobile devices */}
          <div className="md:hidden grid grid-cols-2 gap-8">
            {/* Column 1 & 2 */}
            <div className="space-y-4 ">
            <h3 className="font-bold text-lg text-[#30120B]">For You</h3>
            <ul className=' text-sm font-semibold text-[#30120B]'>
                <li><a href="#" className="hover:underline">Open an Account</a></li>
                <li><a href="#" className="hover:underline">Get a Loan</a></li>
                <li><a href="#" className="hover:underline">Invest</a></li>
                <li><a href="#" className="hover:underline">Get a Card</a></li>
            
              </ul>
            </div>
            <div className="space-y-4 ">
            <h3 className="font-bold text-lg text-[#30120B]">For Your Biashara</h3>
            <ul className=' text-sm font-semibold text-[#30120B]'>
              <li><a href="#" className="hover:underline">Open an Account</a></li>
              <li><a href="#" className="hover:underline">Get a Loan</a></li>
                <li><a href="#" className="hover:underline">Trade Finance</a></li>
              </ul>
            </div>

            {/* Column 3 & 4 */}
            <div className="space-y-4 ">
            <h3 className="font-bold text-lg text-[#30120B]">For Coporate</h3>
            <ul className=' text-sm font-semibold text-[#30120B]'>
              <li><a href="#" className="hover:underline">Accounts</a></li>
                <li><a href="#" className="hover:underline">Financing</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
             
              </ul>
            </div>
            <div className="space-y-4 ">
            <h3 className="font-bold text-lg text-[#30120B]">Quick Links</h3>
            <ul className=' text-sm font-semibold text-[#30120B]'>
              <li><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Complaing Handling</a></li>
                <li><a href="#" className="hover:underline">Service Charter</a></li>
              </ul>
            </div>

            {/* Column 5 */}
           
          </div>
          <div className=" md:hidden   space-y-4 ">
           
            <h3 className="font-bold text-lg text-[#30120B]">Banking Hours</h3>
            <ul className=' text-sm font-semibold text-[#30120B]'>
                <li><a href="#" className="hover:underline">Mon-Fri: 8:30 am- 4:00pm</a></li>
                <li><a href="#" className="hover:underline">Sat: 8:30 am -12:00pm</a></li>
                <li><a href="#" className="hover:underline">Public Holidays : Closed</a></li>
              </ul>
           
            </div>
        </div>
      </footer>

      {/* Second Footer Section */}
      <footer className="bg-[#3C251F] text-white py-4 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs  text-center md:text-left mb-4 md:mb-0">
            Regulated by Central Bank of Kenya | © National Bank Limited. All rights reserved.
          </div>
          <div className="flex flex-col md:flex-row items-center text-xxs ">
            <div className="flex md:space-x-2 space-x-2 mb-4 md:mb-0">
              <a href="#" className="hover:underline">Terms and Conditions</a>
              <span>|</span>
              <a href="#" className="hover:underline">Disclaimer</a>
              <span>|</span>
              <a href="#" className="hover:underline">Tariff Guide</a>
          

            </div>
            <div className="flex space-x-4 ml-0 md:ml-8">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaTwitter /></a> 
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
