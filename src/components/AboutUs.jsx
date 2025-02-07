import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 mb-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start bg-white shadow-lg rounded-2xl p-8">
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
    </section>
  );
};

export default About;
