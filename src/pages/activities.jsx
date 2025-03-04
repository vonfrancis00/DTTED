import React, { useState, useEffect } from 'react';
import ModalActivities from './modalactivities';

const Activities = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const activities = [
    { 
      title: "Application for Graduation for 2nd Semester", 
      description: "Ensure you submit all required documents and meet the deadlines.",
      image: "/activities(1).jpg",
    },
    { 
      title: "Date of the Application", 
      description: "Application period starts from March 4th to March 28th. Don't miss it!",
      image: "/activities(2).jpg",
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
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8 uppercase tracking-wide">
        Activities
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
              <h4 className="text-2xl text-blue-900 font-bold mb-2">
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
