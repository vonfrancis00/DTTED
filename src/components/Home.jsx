import React from "react";
import { Link } from "react-router-dom";
import { MdCalendarMonth } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";

const Home = () => {
  return (
    <section>
      <div
        className="w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url("/bg-landing.jpg")`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-full flex flex-col justify-start items-start text-left bg-black bg-opacity-50 p-8 mt-12">
          <img
            src="/logo-dept.png"
            alt="Department Logo"
            className="h-36 w-36 mb-4 mt-8"
          />

          <h2 className="text-4xl font-bold text-white mb-4">CSTE</h2>
          <p className="text-xl text-white mb-6">
            Department of Technical and Technology Education
          </p>

          <div className="bg-transparent p-6 shadow-md rounded-lg max-w-3xl mx-auto mt-8">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Department Event Coming Up!
            </h3>
            <p className="text-white">
              Join us for the annual seminar on "Future of Education".
            </p>
          </div>

          <div className="flex justify-center w-full gap-4 mt-5">
            <Link
              to="/activities"
              className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 flex items-center gap-2"
            >
              <MdCalendarMonth size={20} />
              Monthly Activities
            </Link>
            <Link
              to="/announcements"
              className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 flex items-center gap-2"
            >
              <GrAnnounce size={20} />
              Announcements
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
