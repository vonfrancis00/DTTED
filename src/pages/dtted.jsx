import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Dtted = () => {
  const [isOpen, setIsOpen] = useState(null); // Use null to track which modal is open
  const modalRef = useRef(null); // Reference for the modal container

  const openModal = (modalType) => {
    setIsOpen(modalType);
  };

  const closeModal = () => {
    setIsOpen(null);
  };

  // Close the modal if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    // Attach the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-6">Course Offerings & Faculty</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Course Offerings</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our program offers a comprehensive curriculum designed to equip students with the skills and knowledge needed for success in global management roles. Below are some of the key courses:
          </p>
          <ul className="gap-8">
            <li className="p-6 bg-yellow-100 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-10 transform hover:scale-105 hover:translate-y-2">
              <Link to="/dtled">
                <h3 className="text-2xl font-bold text-center hover:underline text-blue-800 mb-2">Bachelor of Technology and Livelihood Education (BTLED)</h3>
              </Link>
              <p className="text-gray-700 text-xl">
                The Bachelor of Technology and Livelihood Education (BTLED) program is designed to equip future teachers who will be teaching the Technology and Livelihood Education subjects for Grades 4 to 8 in the basic education. Specifically, the BTLEd program is expected to produce teachers who can assume the following major roles:
              </p>
              <ul className="list-disc pl-6 text-gray-700 text-xl">
                <li>Effective synthesizers of organized knowledge to allow analytical and critical thinking skills.</li>
                <li>Efficient and effective promoters and facilitators of learning to enable the learners to develop to the fullest their potential for a continuing pursuit of lifelong learning in technology and livelihood education.</li>
                <li>Committed humanists whose clear understanding and appreciation of human ideals and values inspire learners to realize their potential.</li>
                <li>Model teachers with competence to teach the TLE exploratory courses from Grades 4-8.</li>
                <li>With high regard for learning imbued with proper work attitude and values as practiced in industry.</li>
                <li>Nationally-certified trainers in their fields of specialization.</li>
              </ul>
            </li>
            
            <li className="p-6 bg-yellow-100 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-20 transform hover:scale-105 hover:translate-y-2">
              <Link to="/dtvted">
                <h3 className="text-2xl font-bold hover:underline text-center text-blue-800 mb-2">Bachelor in Technical-Vocational Teacher Education (BTVTEd)</h3>
              </Link>
              <p className="text-gray-700 text-xl">
                The Bachelor in Technical-Vocational Teacher Education (BTVTEd) is a four-year program designed to prepare future teachers in Technical and Vocational Education and Training (TVET) for roles in TLE, Senior High School, and TVET institutions. It equips students with the knowledge, skills, attitudes, and values necessary for effective teaching. BTVTEd graduates meet TESDA’s Trainer’s Methodology requirement and are exempt from the TM assessment after passing the licensure exam. The program also aims to develop teachers who can contribute to community development with competence and human values.
              </p>
            </li>
          </ul>

        </section>

        <section>
          <h2 className="text-3xl text-center font-bold text-blue-800 mb-4">Meet Our Faculty</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our VGMO faculty members are highly experienced professionals with a deep understanding of global management. Meet some of our esteemed professors:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {/* CSTE Dean */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center" onClick={() => openModal('csteDean')}>
              <img
                src="/Dean-Pimentel.png"
                alt="CSTE Dean"
                className="w-48 h-48 rounded-full mb-4 object-cover"
              />
              <h3 className="text-2xl text-center font-bold text-blue-800 mb-2">Grace Pimentel, PhD</h3>
              <p className="text-gray-700 text-center text-lg mb-2">CSTE DEAN</p>
            </div>

            {/* DTTED Chairman */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center" onClick={() => openModal('dttedChairman')}>
              <img
                src="/no-image(1).avif"
                alt="DTTED Chairman"
                className="w-48 h-48 rounded-full mb-4 object-cover"
              />
              <h3 className="text-2xl text-center font-bold text-blue-800 mb-2">Aljun Sumud-ong, PhD</h3>
              <p className="text-gray-700 text-center text-lg mb-2">DTTED Chairman</p>
            </div>

            {/* Faculty Members */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-110 cursor-pointer flex flex-col items-center" onClick={() => openModal('facultyMembers')}>
              <img
                src="/FACULTY.JPG"
                alt="Faculty Members"
                className="w-48 h-48 mb-4 object-cover"
              />
              <h3 className="text-2xl text-center font-bold text-blue-800 mb-2">FACULTY MEMBERS</h3>
            </div>
          </div>

        {/* Modal Popup */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
            <div ref={modalRef} className="bg-white p-8 rounded-2xl shadow-2xl relative max-w-2xl w-full max-h-[90vh] overflow-y-auto mt-5 mb-5">
              <button
                className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-gray-900 focus:outline-none transition-colors duration-200"
                onClick={closeModal}
              >
                &times;
              </button>

              {isOpen === 'csteDean' && (
                <div className="flex flex-col items-center">
                  <h3 className="text-4xl font-extrabold text-blue-900 mb-6">Grace Pimentel, PhD</h3>
                  <img 
                    src="/Dean-Pimentel.png" 
                    alt="CSTE Dean"
                    className="w-45 h-45 rounded-full shadow-xl transform transition-transform duration-300 hover:scale-105 mb-6"
                  />
                  <p className="text-gray-700 mt-6 text-xl font-semibold text-center leading-relaxed max-w-xl mx-auto">
                    Grace S. Pimentel is a dedicated educator with extensive experience in Secondary, Tertiary, and Post-Graduate education. 
                    A graduate of Xavier University – Ateneo de Cagayan, she holds Bachelor’s, Master’s, and Doctorate degrees.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 text-lg font-medium text-left mt-4 space-y-2">
                    <li>Chairperson of the Teaching Languages Department and played a key role in the Level 2 accreditation of the MATESL program</li>
                    <li>Secondment as College President of Salay Community College</li>
                    <li>Achieved institutional recognition and Certificates of Program Compliance (COPC) for three programs within a year</li>
                    <li>An active researcher and scholar</li>
                  </ul>
                </div>
              )}

              {isOpen === 'dttedChairman' && (
                <div className="flex flex-col items-center">
                  <h3 className="text-4xl font-bold text-blue-900 mb-6">Aljun Sumud-ong, PhD</h3>
                  <img 
                    src="/no-image(1).avif" 
                    alt="DTTED Chairman" 
                    className="w-full max-w-xl rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 mb-6"
                  />
                  <p className="text-gray-700 mt-6 text-lg text-center leading-relaxed max-w-xl mx-auto">
                    Dr. Aljun Sumud-ong is the Chairman of the Department of Technical and Technology Education (DTTED). He brings years of experience in both industry and academia.
                  </p>
                </div>
              )}

              {isOpen === 'facultyMembers' && (
                <div className="flex flex-col items-center">
                  <h3 className="text-4xl font-bold text-blue-900 mb-6">Faculty Members</h3>
                  <img 
                    src="/FACULTY.JPG" 
                    alt="Faculty Members" 
                    className="w-full max-w-xl rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 mb-6"
                  />
                  <p className="text-gray-700 mt-6 text-lg text-center leading-relaxed max-w-xl mx-auto">
                    Explore our esteemed faculty members who bring a wealth of knowledge and expertise to our department.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
        </section>
      </div>
    </div>
  );
};

export default Dtted;
