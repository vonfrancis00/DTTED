import React from "react";

const Team = () => {
  const teamMembers = [
    { name: "Guen Idjao", image: "/IDJAOGUEN(2).png" },
    { name: "Lugine Mae Mira", image: "/lugi.jfif" },
    { name: "Kimberly Ann Radaza", image: "/RADAZAKIM(2).png" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6 flex justify-center items-center">
      <div className="bg-white max-w-5xl mx-auto p-12 rounded-lg shadow-2xl text-center">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-12 uppercase tracking-wide">
          Meet Our Team
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-10">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-blue-200 object-cover"
              />
              <h3 className="text-2xl font-bold text-blue-900">{member.name}</h3>
              <p className="text-gray-600 text-lg mt-2">Team Member</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
