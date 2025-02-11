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
              <p className="text-xl text-gray-600 leading-relaxed mt-4">
              The USTP Cagayan de Oro is one of the university system’s major campuses strategically located at the center of 
              the City of Golden Friendship with a total land area of 9 hectares.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mt-4">
              The campus is CHED-recognized as a Center of Excellence in Information Technology and Centers of Development in Electrical Engineering and Mathematics. 
              It is also acknowledged as a Top 4 Performing SUC with the Highest Number of Level III Accredited Programs in 2020 as adjudged by the AACCUP, Inc. 
              Its niche programs include Bachelor of Science in Electrical Engineering, Bachelor of Science in Information Technology, and Bachelor of Science in Applied Mathematics.
              </p>
            </div>
          </div>
          <div className="bg-white max-w-7xl mx-auto p-8 rounded-lg shadow-xl mt-20">
            
            <section className="mb-12">
            <h2 className="text-3xl font-extrabold text-center text-blue-800 mb-4">Vision</h2>
            <p className="text-lg font-bold text-center text-gray-700 mb-4">
            The University is a nationally recognized Science and Technology University providing the vital link between 
            education and the economy.

            </p>
            </section>
          </div>
          <div className="bg-white max-w-7xl mx-auto p-8 rounded-lg shadow-xl mt-10">
            
            <section className="mb-12">
            <h2 className="text-3xl font-extrabold text-center text-blue-800 mb-4">Mission</h2>
            <p className="text-xl font-bold text-gray-700 mb-4">
            The mission of the University is to:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-4">
              <li>Bring the world of work (industry) into the actual higher education and training of students,</li>
              <li>Offer entrepreneurs the opportunity to maximize their business potential through a gamut of services from product conceptualization to commercialization, and</li>
              <li>Contribute significantly to the National Development Goals of food security and energy sufficiency through technological solutions.</li>
            </ul>
            </section>
          </div>
          <div className="bg-white max-w-7xl mx-auto p-8 rounded-lg shadow-xl mt-10">
            
            <section className="mb-12">
            <h2 className="text-3xl font-extrabold text-center text-blue-800 mb-4">USTP Core Values</h2>
            <p className="text-xl font-semibold text-gray-700 mb-5">
            Setting the right behavior and perspectives is fundamental in the fulfillment of one’s goals. Thus, the university agreed upon the following core values that would 
            guide its members and stakeholders in all their undertakings and move them on the right path:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-extrabold text-center text-blue-800 mb-2">Unselfish Dedication</h3>
            <p className="text-gray-700 text-lg mt-5 mb-2">Selfless commitment and complete fidelity towards a course of action or goal.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-extrabold text-center text-blue-800 mb-2">Social Responsiveness</h3>
            <p className="text-gray-700 text-lg mt-5 mb-2">Ethical/moral responsibility leads to corrective action on social issues and contributions to the betterment of the environment and the community’s quality of life.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-extrabold text-center text-blue-800 mb-2">Transformational Leadership</h3>
            <p className="text-gray-700 text-lg mt-5 mb-2">Leading through inspiration and by example fosters positive change with the end goal of developing followers into leaders.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-extrabold text-center text-blue-800 mt-5 mb-2">Prudence</h3>
            <p className="text-gray-700 text-lg mt-5 mb-2">Self-governance leads to circumspection and good judgment in the management of affairs and use of resources.</p>
            </div>
            </div>
            </section>
          </div>

          <div className="bg-white max-w-full mx-auto p-8 rounded-lg shadow-xl mt-10">
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
