'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#050A44] text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Section - Logo and Copyright */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">AI Image Generator</span>
            
          </div>

          {/* Center Section - Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-gray-300 hover:text-[#0A21C0] text-sm transition-colors duration-200">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-[#0A21C0] text-sm transition-colors duration-200">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-[#0A21C0] text-sm transition-colors duration-200">
              Contact
            </Link>
            <Link href="/privacy-policy" className="text-gray-300 hover:text-[#0A21C0] text-sm transition-colors duration-200">
              Privacy
            </Link>
            <Link href="/terms-and-conditions" className="text-gray-300 hover:text-[#0A21C0] text-sm transition-colors duration-200">
              Terms and Conditions
            </Link>
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-[#0A21C0] transition-colors duration-200">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-[#0A21C0] transition-colors duration-200">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-[#0A21C0] transition-colors duration-200">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-[#0A21C0] transition-colors duration-200">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
