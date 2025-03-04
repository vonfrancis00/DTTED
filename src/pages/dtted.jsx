import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Dtted = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="bg-white max-w-6xl mx-auto p-8 rounded-lg shadow-xl mt-20">
        <section className="mb-12">
          <h2 className="text-3xl font-extrabold text-blue-800 text-center mb-4">Goals</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-4">
            <li>To provide students with a comprehensive understanding of global business dynamics.</li>
            <li>To develop leadership, management, and communication skills for the global workforce.</li>
            <li>To foster critical thinking and problem-solving abilities in an international business context.</li>
            <li>To cultivate ethical decision-making and sustainable business practices in global management.</li>
            <li>To create opportunities for practical learning and exposure to the global marketplace.</li>
          </ul>
        </section>
        </div>
        <div className="bg-white max-w-6xl mx-auto p-8 rounded-lg shadow-xl mt-10">
        <section className="mb-12">
          <h2 className="text-3xl font-extrabold text-blue-800 text-center mb-4">Objectives</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-4">
            <li>To prepare students for leadership roles in multinational organizations.</li>
            <li>To enhance students’ cultural awareness and adaptability in diverse business environments.</li>
            <li>To provide practical experience through internships and industry collaborations.</li>
            <li>To ensure a solid foundation in both qualitative and quantitative methods in global business decision-making.</li>
            <li>To foster a global mindset among students, encouraging them to think and act beyond borders.</li>
          </ul>
        </section>
        </div>
      <div className="bg-white max-w-6xl mx-auto p-8 rounded-lg shadow-xl mt-20">
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-6">
          Course Offerings & Faculty
        </h1>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Course Offerings</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our program offers a comprehensive curriculum designed to equip students with the
            skills and knowledge needed for success in global management roles. Below are some of
            the key courses:
          </p>
          <ul className="gap-8">
            <li className="p-6 bg-yellow-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-10">
              <Link to="/dtled">
              <h3 className="text-2xl font-bold text-center hover:underline text-blue-800 mb-2">Bachelor of Technology and Livelihood Education (BTLED)</h3>
              </Link>
              <p className="text-gray-700 text-xl">
              The Bachelor of Technology and Livelihood Education (BTLED) program is design to equip future teachers who will be teaching the Technology and Livelihood Education 
              subjects for Grades 4 to 8 in the basic education. Specifically, the BTLEd program is expected to produce teachers who can assume the following major roles:<b/>  
              </p>
              <ul className="list-disc pl-6 text-gray-700 text-xl">
                <li>Effective synthesizers of organized knowledge to allow analytical and critical thinking skills.</li>
                <li>Efficient and effective promoters and facilitators of learning to enable the learners to develop to the fullest their potential for a continuing pursuit of lifelong learning in technology and livelihood education.</li>
                <li>Committed humanists whose clear understanding and appreciation of human ideals and values inspire learners to realize their potential.</li>
                <li> Model teachers with competence to teach the TLE exploratory courses from Grades 4-8.</li>
                <li> With high regard for learning imbued with proper work attitude and values as practiced in industry.</li>
                <li> Nationally-certified trainers in their fields of specialization.</li>
              </ul>
            </li>
            <li className="p-6 bg-yellow-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-20">
              <Link to="/dtvted">
                <h3 className="text-2xl font-bold hover:underline text-center text-blue-800 mb-2">Bachelor in Technical-Vocational Teacher Education (BTVTEd)</h3>
              </Link>
              <p className="text-gray-700 text-xl">
              The Bachelor in Technical-Vocational Teacher Education (BTVTEd) is a four-year program designed to prepare future teachers in Technical and Vocational Education and Training (TVET) 
              for roles in TLE, Senior High School, and TVET institutions. It equips students with the knowledge, skills, attitudes, and values necessary for effective teaching. 
              BTVTEd graduates meet TESDA’s Trainer’s Methodology requirement and are exempt from the TM assessment after passing the licensure exam. The program also aims to develop teachers 
              who can contribute to community development with competence and human values.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl text-center font-bold text-blue-800 mb-4">Meet Our Faculty</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our VGMO faculty members are highly experienced professionals with a deep understanding of global management.
            Meet some of our esteemed professors:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/no-image(1).avif"
                alt="Faculty Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl text-center font-bold text-blue-800 mb-2">Grace Pimentel, PhD</h3>
              <p className="text-gray-700 text-center text-lg mb-2">CSTE DEAN</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/no-image(1).avif"
                alt="Faculty Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl text-center font-bold text-blue-800 mb-2">Aljun Sumud-ong, PhD</h3>
              <p className="text-gray-700 text-center text-lg mb-2">DTTED Chairman</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-110 cursor-pointer" onClick={() => setIsOpen(true)}>
          <img src="/FACULTY.JPG" alt="Faculty Members" className="w-34 h-32 mx-auto mb-4" />
          <h3 className="text-2xl text-center font-bold text-blue-800 mb-2">FACULTY MEMBERS</h3>
        </div>
          </div>

          {/* Modal Popup */}
          {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-start justify-center p-4 mt-10">
            <div className="bg-white p-6 rounded-2xl shadow-2xl relative max-w-2xl w-full max-h-[90vh] overflow-y-auto mt-5 mb-5">
              <button
                className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-gray-900 focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                &times;
              </button>
              <div className="flex flex-col items-center">
                <h3 className="text-3xl font-bold text-blue-800 mb-6">Faculty Members</h3>
                <img 
                  src="/FACULTY.JPG" 
                  alt="Popup" 
                  className="w-full max-w-xl rounded-lg shadow-lg"
                />
                <p className="text-gray-700 mt-6 text-lg text-center">
                  Explore our esteemed faculty members who bring a wealth of knowledge and expertise.
                </p>
              </div>
            </div>
          </div>
        )}
        </section>
      </div>
    </div>
  );
};

export default Dtted;
