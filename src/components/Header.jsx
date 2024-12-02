import React, { useState } from "react";
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-yellow-400 text-blue-800 px-8 py-2 flex flex-row items-center relative">
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
        className={`absolute ${
          isSidebarOpen ? "top-[66px]" : "top-0"
        } md:top-0 left-0 w-full bg-yellow-400 transform ${
          isSidebarOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-y-0 md:flex md:space-x-6`}
      >
        <ul className="flex flex-col md:w-full md:justify-end md:gap-6 md:flex-row space-y-4 md:space-y-0 p-4 md:p-0">
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
