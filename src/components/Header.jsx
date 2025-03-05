import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaInfoCircle,
  FaClipboardList,
  FaBullhorn,
} from "react-icons/fa";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  
  const headerRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsAboutDropdownOpen(false);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const handleLinkClick = () => {
    setIsAboutDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsAboutDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="bg-yellow-400 text-blue-800 px-8 py-2 flex flex-row items-center fixed top-0 left-0 w-full z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="bg-white rounded-md min-h-[60px] min-w-[60px] max-h-[60px] max-w-[60px] p-1">
          <Link to="/" onClick={handleLinkClick}>
            <img src="/ustp.png" alt="Ustp Logo" />
          </Link>
        </div>
        <button onClick={toggleSidebar} className="md:hidden">
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <nav
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } md:block md:flex md:space-x-6 md:w-full p-4 md:p-0 transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col md:w-full md:justify-end md:gap-6 md:flex-row space-y-4 md:space-y-0 relative">
          <li className="relative">
            <button
              onClick={toggleAboutDropdown}
              className="hover:underline font-semibold flex items-center gap-2"
            >
              <FaInfoCircle /> About
            </button>
            {isAboutDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-56 bg-white shadow-xl rounded-lg overflow-hidden z-50 transition-all duration-300 ease-out">
                <li>
                  <Link
                    to="/University/universityinfo"
                    onClick={handleLinkClick}
                    className="block px-6 py-3 text-gray-800 font-semibold hover:bg-blue-300 hover:text-blue-800 transition-colors duration-200"
                  >
                    University Information
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Department/dtted"
                    onClick={handleLinkClick}
                    className="block px-6 py-3 text-gray-800 font-semibold hover:bg-blue-300 hover:text-blue-800 transition-colors duration-200"
                  >
                    Department of Technical & Technology Education
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aboutus/facultynews"
                    onClick={handleLinkClick}
                    className="block px-6 py-3 text-gray-800 font-semibold hover:bg-blue-300 hover:text-blue-800 transition-colors duration-200"
                  >
                    Faculty & Staff News
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aboutus/team"
                    onClick={handleLinkClick}
                    className="block px-6 py-3 text-gray-800 font-semibold hover:bg-blue-300 hover:text-blue-800 transition-colors duration-200"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aboutus/contactinfo"
                    onClick={handleLinkClick}
                    className="block px-6 py-3 text-gray-800 font-semibold hover:bg-blue-300 hover:text-blue-800 transition-colors duration-200"
                  >
                    Contact Information
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              to="/activities"
              onClick={handleLinkClick}
              className="hover:underline font-semibold flex items-center gap-2"
            >
              <FaClipboardList /> Activities
            </Link>
          </li>
          <li>
            <Link
              to="/announcements"
              onClick={handleLinkClick}
              className="hover:underline font-semibold flex items-center gap-2"
            >
              <FaBullhorn /> Announcements
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
