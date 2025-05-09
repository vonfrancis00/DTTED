import React, { useState, useEffect } from 'react';
import ModalAnnounce from './modalannounce';

const Announcements = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const announcements = [
    { 
      title: "Application for Graduation for 2nd Semester", 
      description: "Ensure you submit all required documents and meet the deadlines.",
      image: "/activities(1).jpg",
      link: "https://www.facebook.com/photo/?fbid=1081700317308455&set=pcb.1081702817308205",  // Add the link here
    },
    { 
      title: "Schedule for Application", 
      description: "Application period starts from March 4th to March 28th. Don't miss it!",
      image: "/activities(2).jpg",
      link: "https://www.facebook.com/photo/?fbid=1081701713974982&set=pcb.1081702817308205",  // Add the link here
    },
    { 
      title: "Attention MTTE and DTE Students!", 
      description: `Mark your calendars! The Comprehensive Exam schedule has been released. DEADLINE FOR APPLICATION: February 28, 2025.`,
      image: "/announcement(1).png",
      link: "https://www.facebook.com/photo?fbid=692670143151247&set=a.160352309716369",  // Add the link here
    },
    { 
      title: "New Chapter for the Department", 
      description: `A new chapter begins for the Department of Technical and Technology Education as we proudly welcome our new Department Head, Dr. Aljon Y. Sumod-ong.`,
      image: "/announcement(2).png",
      link: "https://www.facebook.com/photo/?fbid=654778803607048&set=a.160352309716369",  // Add the link here
    },
    {
      title: "Honoring the Outgoing Chairman of Department of Technical and Technology Education",
      description: "As we bid farewell to Prof. Nivea Louwah D. Sermona...",
      image: "/announcement(3).jpg",
      link: "https://www.facebook.com/photo/?fbid=654140560337539&set=a.160352309716369",  // Add the link here
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
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {announcements.map((announcement, index) => (
            <li key={index} className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col h-full">
              <img 
                src={announcement.image} 
                alt={announcement.title} 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex-grow">
                <h4 className="text-2xl font-bold text-blue-900 mb-3">{announcement.title}</h4>
                <p className="text-gray-700 text-lg">{announcement.description.substring(0, 100)}...</p>
              </div>
              <button 
                onClick={() => handleOpenModal(announcement)} 
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 w-full"
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
          link={selectedAnnouncement.link}  // Pass the link here
        />
      )}
    </div>
  );
};

export default Announcements;
