import React, { useState, useEffect } from 'react';
import ModalAnnounce from './modalannounce';

const Announcements = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const announcements = [
    { 
      title: "Attention MTTE and DTE Students!", 
      description: `Mark your calendars! The Comprehensive Exam schedule has been released. DEADLINE FOR APPLICATION: February 28, 2025. Please present your Complete Academic Requirement (CAR) Certificate upon application. MTTE: Choose two core courses and two major courses. DTE: Choose two core courses and four major courses. For more information, contact Sir Jomar P. Flores and Dr. Aljon Y. Sumod-ong.`,
      image: "/announcement(1).png",
    },
    { 
      title: "New Chapter for the Department", 
      description: `A new chapter begins for the Department of Technical and Technology Education as we proudly welcome our new Department Head, Dr. Aljon Y. Sumod-ong.`,
      image: "/announcement(2).png",
    }
  ];

  const handleOpenModal = (announcement) => {
    setSelectedAnnouncement(announcement);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAnnouncement(null);
  };
  useEffect(() => {
          window.scrollTo(0, 0);
      }, []);
  return (
    <div className="container mx-auto px-6 py-8 mt-20 mb-20">
      <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-6">ANNOUNCEMENTS</h2>
      
      <div className="mb-6">
        <h3 className="text-3xl font-semibold text-center text-blue-800 mb-4">Latest Announcements</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {announcements.map((announcement, index) => (
            <li key={index} className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
              <img 
                src={announcement.image} 
                alt={announcement.title} 
                className="w-full h-auto rounded-lg mb-4"
              />
              
              <h4 className="text-2xl font-semibold text-blue-900 mb-3">{announcement.title}</h4>
              <p className="text-gray-700 text-lg">{announcement.description.substring(0, 100)}...</p>
              <button 
                onClick={() => handleOpenModal(announcement)} 
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Read More
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedAnnouncement && (
        <ModalAnnounce 
          isOpen={isModalOpen} 
          onClose={handleCloseModal}
          title={selectedAnnouncement.title}
          description={selectedAnnouncement.description}
          image={selectedAnnouncement.image}
        />
      )}
    </div>
  );
};

export default Announcements;
