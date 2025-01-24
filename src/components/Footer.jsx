import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white p-6">
      <div className="flex justify-between items-start mb-6">

        <div className="flex items-start">
          <img 
            src="/ustp.png" 
            alt="Department Logo" 
            className="max-w-[100px] h-auto mb-4" 
          />
          <div className="ml-10">
            <a href="/aboutus">
              <h1 className="text-white text-sm mb-2 font-semibold hover:underline">About Us</h1>
            </a>
            <a href="/activities">
              <h2 className="text-white text-sm mb-2 font-semibold hover:underline">Activities</h2>
            </a>
            <a href="/alumni">
              <h2 className="text-white text-sm mb-2 font-semibold hover:underline">Alumni</h2>
            </a>
            <a href="/contactus">
              <h2 className="text-white text-sm mb-2 font-semibold hover:underline">Contact Us</h2>
            </a>
          </div>
        </div>

        <div className="text-right">
          <div className="mb-3 text-left">
            <h1 className="flex items-center mb-1">
              <FaLocationDot className="mr-2" /> Claro M. Recto Avenue, Lapasan
            </h1>
            <h2 className="mb-2 ml-6">9000 Cagayan de Oro City<br /> Philippines</h2>
            <h3 className="flex items-center">
              <BsFillTelephoneForwardFill className="mr-2" /> Fax: 088-856-4696
            </h3>
          </div>

          <div className="flex space-x-2 mt-4 text-left">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-white hover:text-blue-500 transition-colors" size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-white hover:text-blue-500 transition-colors" size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white hover:text-blue-500 transition-colors" size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-white hover:text-red-500 transition-colors" size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-2">
        <p className="text-yellow-500 text-sm">© 2024 Department of Technical and Technology Education. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
