import React from "react";
import { Link } from "react-router-dom";

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
        <div className="h-full flex flex-col justify-start items-start text-left bg-black bg-opacity-50 p-8">
          <img
            src="/logo-dept.png"
            alt="Department Logo"
            className="h-36 w-36 mb-4"
          />

          <h2 className="text-4xl font-bold text-white mb-4">D.T.T.E.D</h2>
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
        </div>

        <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <Link
            to="/activities"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 text-nowrap"
          >
            Monthly Activities
          </Link>
          <Link
            to="/announcements"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 text-nowrap"
          >
            Announcements
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
