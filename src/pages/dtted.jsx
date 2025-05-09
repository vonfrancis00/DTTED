import React from "react";
import { Link } from "react-router-dom";

const Dtted = () => {
  const courseOfferings = [
    {
      img: "/BTLED.png",
      title: "Bachelor of Technology and Livelihood Education (BTLED)",
      link: "/dtled"
    },
    {
      img: "/BTVTED.png",
      title: "Bachelor in Technical-Vocational Teacher Education (BTVTEd)",
      link: "/dtvted"
    },
    {
      img: "/mastersIMG.png",
      title: "Master in Technical and Technology Education (MTTE)",
      link: "/masters"
    },
    {
      img: "/DTE.png",
      title: "Doctor of Technical Education",
      link: "/dte"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      
      {/* CSTE Academic Goals */}
      <div className="bg-white max-w-6xl mx-auto p-10 rounded-2xl shadow-md mt-24 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <section className="mb-12 px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 text-center mb-8">
            CSTE Academic Goals
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 max-w-4xl mx-auto space-y-4 leading-relaxed">
            <li>
              Conduct science and technology education research responsive to the multi-faceted and changing needs of the local, national, and international community, contributing to the sustainable development goals.
            </li>
            <li>
              Specialize in the conduct of effective and sustainable research-based extension programs in science and technology education for various stakeholders.
            </li>
            <li>
              Trailblaze in producing innovative solutions and processes to bridge education and the economy.
            </li>
            <li>
              Empower culturally-sensitive, effective, dedicated, resilient, and dynamic teachers and educational leaders with high proficiency in technological, pedagogical, and content knowledge.
            </li>
          </ul>
        </section>
      </div>

      {/* Objectives */}
      <div className="bg-white max-w-6xl mx-auto p-10 rounded-2xl shadow-md mt-16 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <section>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 text-center mb-8">Program Objectives</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-4 leading-relaxed max-w-4xl mx-auto">
            <li>To prepare students for leadership roles in multinational organizations.</li>
            <li>To enhance students’ cultural awareness and adaptability in diverse business environments.</li>
            <li>To provide practical experience through internships and industry collaborations.</li>
            <li>To ensure a solid foundation in both qualitative and quantitative methods in global business decision-making.</li>
            <li>To foster a global mindset among students, encouraging them to think and act beyond borders.</li>
          </ul>
        </section>
      </div>

      {/* Course Offerings */}
      <div className="bg-white max-w-6xl mx-auto p-10 rounded-2xl shadow-md mt-20 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <section>
          <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-10">
            Course Offerings
          </h1>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto text-center">
            Our program offers a comprehensive curriculum designed to equip students with the skills and knowledge needed for success in global education and leadership roles.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {courseOfferings.map((course, index) => (
              <li
                key={index}
                className="bg-yellow-50 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 p-6 flex flex-col items-center text-center"
              >
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-24 h-24 object-cover rounded-full shadow-md mb-4 transition-transform duration-300 transform hover:scale-110"
                />
                <Link
                  to={course.link}
                  className="text-blue-800 font-semibold hover:underline text-sm leading-tight"
                >
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Dtted;
