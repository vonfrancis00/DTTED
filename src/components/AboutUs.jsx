import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-6">We are a team of passionate developers creating beautiful websites.</p>
        <a href="/contactus" className="text-blue-600 hover:underline">Contact Us</a>
      </div>
    </section>
  );
};

export default About;
