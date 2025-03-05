import React, { useState, useEffect } from 'react';
import ModalActivities from './modalactivities';

const Activities = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const activities = [
    { 
      title: "𝙆𝘼-𝙋𝙃𝙊𝙀𝙉𝙄𝙓, 𝙏𝙃𝙄𝙎 𝙄𝙎 𝙄𝙏 𝙋𝘼𝙉𝘼𝙂𝘿𝘼𝙄𝙏!", 
      description: "The highly anticipated week is here! The Student Council of Science and Technology Education’s PANAGDAIT (CSTE Days) program aims to strengthen bonds within the College of Science and Technology Education. As we approach the end of the school year, we embark on a journey to embrace the future with joy, fun, and positivity. Let’s dance, celebrate, and soar together! Join us for Panagdait: CSTE Days on May 5, 6, 8, and 9, 2023!",
      image: "/panagdait.jpeg",
    },
    { 
      title: "𝙅𝙤𝙞𝙣 𝙪𝙨 𝙞𝙣 𝙖 𝙢𝙤𝙢𝙚𝙣𝙩𝙤𝙪𝙨 𝙟𝙤𝙪𝙧𝙣𝙚𝙮!", 
      description: "The time has come to witness a remarkable chapter in the lives of our dear pre-service educators as they embark on their 𝐏𝐢𝐧𝐧𝐢𝐧𝐠 𝐂𝐞𝐫𝐞𝐦𝐨𝐧𝐲 2025 With the theme, 𝙁𝙧𝙤𝙢 𝙑𝙞𝙨𝙞𝙤𝙣 𝙩𝙤 𝙍𝙚𝙖𝙡𝙞𝙩𝙮: 𝙄𝙣𝙣𝙤𝙫𝙖𝙩𝙞𝙣𝙜 𝙩𝙝𝙚 𝙁𝙪𝙩𝙪𝙧𝙚 𝙤𝙛 𝙀𝙙𝙪𝙘𝙖𝙩𝙞𝙤𝙣, we draw inspiration from the guiding star, a beacon of light that leads us through challenges and into a future brimming with possibilities.",
      image: "/pinning.jpeg",
    }
  ];

  const handleOpenModal = (activity) => {
    setSelectedActivity(activity);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedActivity(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-6 py-12 mt-20 mb-20">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10 uppercase tracking-wide">
        Activities & Events
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((activity, index) => (
          <div 
            key={index} 
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img 
              src={activity.image} 
              alt={activity.title} 
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h4 className="text-2xl text-blue-900 font-extrabold mb-2">
                {activity.title}
              </h4>
              <p className="text-gray-600 text-lg mb-4">
                {activity.description.length > 100 ? `${activity.description.substring(0, 100)}...` : activity.description}
              </p>
              <button 
                onClick={() => handleOpenModal(activity)} 
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium text-lg hover:bg-blue-700 transition-all"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedActivity && (
        <ModalActivities 
          isOpen={isModalOpen} 
          onClose={handleCloseModal}
          title={selectedActivity.title}
          description={selectedActivity.description}
          image={selectedActivity.image}
        />
      )}
    </div>
  );
};

export default Activities;
