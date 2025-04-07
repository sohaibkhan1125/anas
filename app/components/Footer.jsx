'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#050A44] text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Section - Logo and Copyright */}
          <div className="flex items-center space-x-2">
          <div className='flex gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain-circuit-icon lucide-brain-circuit"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M12 13h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1"/><path d="M12 8h8"/><path d="M16 8V5a2 2 0 0 1 2-2"/><circle cx="16" cy="13" r=".5"/><circle cx="18" cy="3" r=".5"/><circle cx="20" cy="21" r=".5"/><circle cx="20" cy="8" r=".5"/></svg>            
          <Link href="/" className="text-white font-bold text-xl">
              AI Image Generator
            </Link>
            </div>
            
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
