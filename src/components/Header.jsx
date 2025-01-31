import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaInfoCircle,
  FaUserGraduate,
  FaClipboardList,
  FaBullhorn,
} from "react-icons/fa";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [headerOpacity, setHeaderOpacity] = useState(1); // State for header opacity

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const newOpacity = Math.max(0.7, 1 - scrollY / 200); // Adjust the divisor for sensitivity
    setHeaderOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="bg-yellow-400 text-blue-800 px-8 py-2 flex flex-row items-center fixed top-0 left-0 w-full z-50"
      style={{ opacity: headerOpacity }} // Set the opacity style
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="bg-white rounded-md min-h-[60px] min-w-[60px] max-h-[60px] max-w-[60px] p-1">
          <Link to="/">
            <img src="/ustp.png" alt="Department Logo" />
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
        <ul className="flex flex-col md:w-full md:justify-end md:gap-6 md:flex-row space-y-4 md:space-y-0">
          <li>
            <Link
              to="/aboutus"
              className="hover:underline font-bold flex items-center gap-2"
            >
              <FaInfoCircle /> About
            </Link>
          </li>
          <li>
            <Link
              to="/alumni"
              className="hover:underline font-bold flex items-center gap-2"
            >
              <FaUserGraduate /> Alumni
            </Link>
          </li>
          <li>
            <Link
              to="/activities"
              className="hover:underline font-bold flex items-center gap-2"
            >
              <FaClipboardList /> Activities
            </Link>
          </li>
          <li>
            <Link
              to="/announcements"
              className="hover:underline font-bold flex items-center gap-2"
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