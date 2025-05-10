import React, { useState } from "react";

const Team = () => {
  const individualMembers = [
    { name: "Grace Pimentel, PhD", image: "/Dean-Pimentel.png", role: "CSTE Dean" },
    { name: "Aljun Sumud-ong, PhD", image: "/chair.JPG", role: "DTTED Chairman" },
  ];

  const facultyGroup = {
    name: "FACULTY MEMBERS",
    image: "/FACULTY.JPG",
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6 flex justify-center items-center">
      <div className="bg-white max-w-6xl mx-auto p-12 rounded-lg shadow-2xl text-center">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-12 uppercase tracking-wide">
          Meet Our Faculty & Staff
        </h1>

        {/* Individual Members */}
        <div className="flex flex-col md:flex-row justify-center gap-10 mb-12">
          {individualMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-blue-200 object-cover"
              />
              <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
              <p className="text-gray-600 text-lg mt-2">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Faculty Members Card (Click to Open Modal) */}
        {!showModal && (
          <div
            onClick={() => setShowModal(true)}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-center cursor-pointer inline-block"
          >
            <img
              src={facultyGroup.image}
              alt={facultyGroup.name}
              className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-blue-200 object-cover"
            />
            <h3 className="text-xl font-bold text-blue-900">{facultyGroup.name}</h3>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-3xl mx-auto relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">Faculty Members</h2>
            <img
              src={facultyGroup.image}
              alt={facultyGroup.name}
              className="rounded-lg mx-auto w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
