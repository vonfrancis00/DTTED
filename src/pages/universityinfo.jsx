import React from "react";

const UniversityInformation = () => {
    return (
        <section id="about" className="py-20 bg-gray-50 mb-10">
          <div className="container mx-auto mt-10 flex flex-col md:flex-row items-center md:items-start bg-white shadow-lg rounded-2xl p-8">
            <img 
              src="/USTP-CDO.jpg" 
              alt="USTP Logo" 
              className="mb-6 md:mb-0 md:mr-10 object-cover rounded-xl w-80 h-80"
            />
            <div className="ml-0 md:ml-5">
              <h2 className="text-4xl font-extrabold text-gray-800 mb-4 mt-5">
                University of Science and Technology of Southern Philippines
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                The University of Science and Technology of Southern Philippines (USTP) is a premier state university in the Philippines,
                offering advanced education and research in science, technology, engineering, and mathematics.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                USTP is committed to fostering innovation, promoting sustainable development,
                and preparing students to meet the global challenges of the future.
              </p>
            </div>
          </div>
          <div className="bg-white max-w-full mx-auto p-8 rounded-lg shadow-xl mt-20">
          <section>
          <h2 className="text-3xl font-extrabold text-blue-800 mb-4">USTP Updates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/ustp(1).png"
                alt="ustp update"
                className="w-72 h-72 mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-800 text-center mb-2">USTP System President drives commitment to 
                innovation and growth <br/>in 2025 TTC</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/ustp(2).png"
                alt="ustp update"
                className="w-72 h-72 mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-center text-blue-800 mb-2">USTP empowers young technopreneurs at 
                CET Demo Day Pitching Competition</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/ustp(3).png"
                alt="ustp update"
                className="w-72 h-72 mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-center text-blue-800 mb-2">USTP Panaon’s 4th BTLED Pinning Ceremony marks 
                milestone for future teachers</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/ustp(4).png"
                alt="ustp update"
                className="w-72 h-72 mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-center text-blue-800 mb-2">Bridging Sustainable Projects: RSU benchmarks at 
                USTP CHD for hydroponic gardening</h3>
            </div>
          </div>
        </section>
          </div>
        </section>
        
      );
    };

export default UniversityInformation;
