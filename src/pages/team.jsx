import React from "react";

const Team = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="bg-white max-w-6xl mx-auto p-8 rounded-lg shadow-xl mt-20">
        <h1 className="text-4xl font-semibold text-center text-blue-800 mb-8">
          Meet Our Team
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Member 1</h3>
            <p className="text-lg text-gray-700 mb-2">Project Manager</p>
            <p className="text-gray-500">
              Alice leads our projects with a passion for team collaboration and timely delivery. With 10+ years of
              experience in project management, she ensures our goals are always met with precision.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Member 2</h3>
            <p className="text-lg text-gray-700 mb-2">Lead Developer</p>
            <p className="text-gray-500">
              John is an expert in software development, specializing in web applications. He is committed to building
              efficient, scalable solutions and enjoys tackling complex technical challenges.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Member 3</h3>
            <p className="text-lg text-gray-700 mb-2">Marketing Specialist</p>
            <p className="text-gray-500">
              With a keen eye for digital trends, Emma crafts engaging marketing strategies that amplify our brand's
              presence. Her creative vision and expertise in content marketing drive our outreach campaigns.
            </p>
          </div>

          {/* Team Member 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Member 4</h3>
            <p className="text-lg text-gray-700 mb-2">UI/UX Designer</p>
            <p className="text-gray-500">
              David creates intuitive and aesthetically pleasing user interfaces that prioritize user experience. He
              believes that design is key to delivering exceptional digital products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
