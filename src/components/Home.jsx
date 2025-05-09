import React from "react";
import { Link } from "react-router-dom";
import { MdCalendarMonth } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";

const Home = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/bgvideo.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay and Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center bg-black bg-opacity-50 px-4 py-8">
  {/* Optional Logo */}
  <img
    src="/logo-dept.png"
    alt="Department Logo"
    className="h-40 w-40 md:h-48 md:w-48 mb-5"
  />

  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow">
    Department of Technical and Technology Education
  </h2>

  <div className="bg-white bg-opacity-60 p-5 rounded-xl shadow-md max-w-xl w-full mt-4">
    <h3 className="text-xl font-semibold text-gray-800 mb-1">
      Department Events Coming Up!
    </h3>
    <p className="text-gray-700 text-sm">
      Stay tuned for the latest updates and announcements.
    </p>
  </div>

  <div className="flex flex-wrap justify-center gap-3 mt-6">
    <Link
      to="/activities"
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm flex items-center gap-2"
    >
      <MdCalendarMonth size={16} />
      Activities & Events
    </Link>
    <Link
      to="/announcements"
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm flex items-center gap-2"
    >
      <GrAnnounce size={16} />
      Announcements
    </Link>
  </div>
</div>

    </section>
  );
};

export default Home;
