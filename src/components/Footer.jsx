import React, { useState, useEffect, useRef } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const footerRef = useRef(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown); 
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (footerRef.current && !footerRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-blue-800 text-white p-5">
      <div className="flex justify-between items-start mb-5">
        <div className="flex items-start">
          <img 
            src="/ustp.png" 
            alt="Department Logo" 
            className="max-w-[150px] h-auto mb-4" 
          />
          <div className="ml-10 mt-5">
            <button 
              onClick={() => toggleDropdown('about')} 
              className="text-white text-sm mb-2 font-semibold hover:underline"
            >
              About
            </button>
            {openDropdown === 'about' && (
              <ul className="text-white text-sm ml-6 space-y-2 mb-5">
                <li>
                  <a href="/University/universityinfo" className="hover:underline">University Information</a>
                </li>
                <li>
                  <a href="/Department/dtted" className="hover:underline">Department of Technical & Technology Education</a>
                </li>
                <li>
                  <a href="/aboutus/facultynews" className="hover:underline">Faculty & Staff News</a>
                </li>
                <li>
                  <a href="/aboutus/team" className="hover:underline">Our Team</a>
                </li>
                <li>
                  <a href="/aboutus/contactinfo" className="hover:underline">Contact Information</a>
                </li>
              </ul>
            )}
            <a href="/activities">
              <h2 className="text-white text-sm mb-2 font-semibold hover:underline">Activities</h2>
            </a>
            <a href="/announcements">
              <h3 className="text-white text-sm mb-2 font-semibold hover:underline">Announcement</h3>
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
            <a href="/aboutus/contactinfo">
              <h4 className="text-gray-400 text-sm mr-10 hover:underline">Contact Us</h4>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray mt-4"></div>
      <div className="text-center text-sm mt-3">
        <p className="text-yellow-500 text-sm mt-5">© 2024 Department of Technical and Technology Education. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
