import React from "react";

const Dtted = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="bg-white max-w-6xl mx-auto p-8 rounded-lg shadow-xl mt-20">
        <h1 className="text-4xl font-semibold text-center text-blue-800 mb-6">
          VGMO Course Offerings & Faculty
        </h1>

        {/* Course Offerings Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Course Offerings</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our DTTED program offers a comprehensive curriculum designed to equip students with the
            skills and knowledge needed for success in global management roles. Below are some of
            the key courses:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <li className="p-6 bg-yellow-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">Global Business Strategy</h3>
              <p className="text-gray-700">
                Explore the key strategies businesses use to succeed in an increasingly interconnected global market.
              </p>
            </li>
            <li className="p-6 bg-yellow-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">International Marketing</h3>
              <p className="text-gray-700">
                Learn how to develop marketing strategies that resonate across cultures and international markets.
              </p>
            </li>
            <li className="p-6 bg-yellow-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">Cross-Cultural Communication</h3>
              <p className="text-gray-700">
                Study effective communication techniques for navigating cultural differences in a global business environment.
              </p>
            </li>
            <li className="p-6 bg-yellow-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">Leadership in Global Contexts</h3>
              <p className="text-gray-700">
                Develop the leadership skills required to guide diverse teams across international markets.
              </p>
            </li>
            <li className="p-6 bg-yellow-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">Global Financial Management</h3>
              <p className="text-gray-700">
                Gain insights into financial decision-making in a globalized economic environment.
              </p>
            </li>
            <li className="p-6 bg-yellow-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">Global Supply Chain Management</h3>
              <p className="text-gray-700">
                Learn about managing supply chains that span multiple countries and continents.
              </p>
            </li>
          </ul>
        </section>

        {/* Faculty Section */}
        <section>
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Meet Our Faculty</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our VGMO faculty members are highly experienced professionals with a deep understanding of global management. 
            Meet some of our esteemed professors:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Faculty Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">PROF 1</h3>
              <p className="text-gray-700 mb-2">Professor of Global Business Strategy</p>
              <p className="text-gray-500">
               
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Faculty Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">PROF 2</h3>
              <p className="text-gray-700 mb-2">Professor of International Marketing</p>
              <p className="text-gray-500">
                
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Faculty Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">PROF 3</h3>
              <p className="text-gray-700 mb-2">Professor of Cross-Cultural Communication</p>
              <p className="text-gray-500">
                
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dtted;
