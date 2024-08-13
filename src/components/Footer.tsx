import React from 'react';

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

      {/* Footer Section */}
      <footer className="bg-[#FFBA00] text-white py-8 px-4 md:px-8">
        <div className="container mx-auto">
   
         

          {/* Grid for larger screens */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Column 1 */}
            <div className="space-y-4 text-sm md:text-base">
              <h3 className="font-semibold">For You</h3>
              <ul>
                <li><a href="#" className="hover:underline">Link 1</a></li>
                <li><a href="#" className="hover:underline">Link 2</a></li>
                <li><a href="#" className="hover:underline">Link 3</a></li>
              </ul>
            </div>
            
            {/* Column 2 */}
            <div className="space-y-4 text-sm md:text-base">
              <h3 className="font-semibold">For Your Biashara</h3>
              <ul>
                <li><a href="#" className="hover:underline">Link 1</a></li>
                <li><a href="#" className="hover:underline">Link 2</a></li>
                <li><a href="#" className="hover:underline">Link 3</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-4 text-sm md:text-base">
              <h3 className="font-semibold">For Corporate</h3>
              <ul>
                <li><a href="#" className="hover:underline">Link 1</a></li>
                <li><a href="#" className="hover:underline">Link 2</a></li>
                <li><a href="#" className="hover:underline">Link 3</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="space-y-4 text-sm md:text-base">
              <h3 className="font-semibold">Quick Links</h3>
              <ul>
                <li><a href="#" className="hover:underline">Link 1</a></li>
                <li><a href="#" className="hover:underline">Link 2</a></li>
                <li><a href="#" className="hover:underline">Link 3</a></li>
              </ul>
            </div>

            {/* Column 5 */}
            <div className="space-y-4 text-sm md:text-base">
              <h3 className="font-semibold">Banking Hours</h3>
              <ul>
                <li><a href="#" className="hover:underline">Mon-Fri: 8:30 am- 4:00pm</a></li>
                <li><a href="#" className="hover:underline">Link 2</a></li>
                <li><a href="#" className="hover:underline">Link 3</a></li>
              </ul>
            </div>
          </div>

          {/* Grid layout for mobile devices */}
          <div className="md:hidden grid grid-cols-2 gap-8">
            {/* Column 1 & 2 */}
            <div className="space-y-4 text-sm">
              <h3 className="font-semibold">Column 1</h3>
              <ul>
                <li><a href="#" className="hover:underline">Link 1</a></li>
                <li><a href="#" className="hover:underline">Link 2</a></li>
                <li><a href="#" className="hover:underline">Link 3</a></li>
              </ul>
            </div>
            <div className="space-y-4 text-sm">
              <h3 className="font-semibold">Column 2</h3>
              <ul>
                <li><a href="#" className="hover:underline">Link 1</a></li>
                <li><a href="#" className="hover:underline">Link 2</a></li>
                <li><a href="#" className="hover:underline">Link 3</a></li>
              </ul>
            </div>

            {/* Column 3 & 4 */}
            <div className="space-y-4 text-sm">
              <h3 className="font-semibold">Column 3</h3>
              <ul>
                <li><a href="#" className="hover:underline">Link 1</a></li>
                <li><a href="#" className="hover:underline">Link 2</a></li>
                <li><a href="#" className="hover:underline">Link 3</a></li>
              </ul>
            </div>
            <div className="space-y-4 text-sm">
              <h3 className="font-semibold">Column 4</h3>
              <ul>
                <li><a href="#" className="hover:underline">Link 1</a></li>
                <li><a href="#" className="hover:underline">Link 2</a></li>
                <li><a href="#" className="hover:underline">Link 3</a></li>
              </ul>
            </div>

            {/* Column 5 */}
            <div className="space-y-4 text-sm">
              <h3 className="font-semibold">Column 5</h3>
              <ul>
                <li><a href="#" className="hover:underline">Link 1</a></li>
                <li><a href="#" className="hover:underline">Link 2</a></li>
                <li><a href="#" className="hover:underline">Link 3</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
