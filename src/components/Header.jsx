import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaInfoCircle,
  FaClipboardList,
  FaBullhorn,
  FaHome
} from "react-icons/fa";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);
  const headerRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsAboutDropdownOpen(false);
  };

  const handleLinkClick = () => {
    setIsAboutDropdownOpen(false);
    setIsSidebarOpen(false);
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

  // Dropdown show/hide with delay
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsAboutDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsAboutDropdownOpen(false);
    }, 200); // Delay in milliseconds
  };

  return (
    <header
      ref={headerRef}
      className="bg-yellow-400 text-blue-800 px-8 py-2 flex flex-row items-center fixed top-0 left-0 w-full z-50"
    >
      <div className="container mx-auto flex justify-between items-center w-full">
        <div className="bg-white rounded-md min-h-[60px] min-w-[60px] max-h-[60px] max-w-[60px] p-1">
          <Link to="/" onClick={handleLinkClick}>
            <img src="/logo-dept.png"
            alt="Department Logo" className="w-full h-full object-contain"/>
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
          {/* About Dropdown */}
          <li>
            <Link
              to="/"
              onClick={handleLinkClick}
              className="hover:underline font-semibold flex items-center gap-2"
            >
              <FaHome /> Home
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:underline font-semibold flex items-center gap-2">
              <FaInfoCircle /> About
            </button>

            <div className="absolute left-0 mt-2 w-56 z-50">
              {isAboutDropdownOpen && (
                <ul className="bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 ease-out">
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
                      to="/News/facultynews"
                      onClick={handleLinkClick}
                      className="block px-6 py-3 text-gray-800 font-semibold hover:bg-blue-300 hover:text-blue-800 transition-colors duration-200"
                    >
                      Faculty & Staff News
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Team/ourteam"
                      onClick={handleLinkClick}
                      className="block px-6 py-3 text-gray-800 font-semibold hover:bg-blue-300 hover:text-blue-800 transition-colors duration-200"
                    >
                      Our Staff
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
            </div>
          </li>

          {/* Other Links */}
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
