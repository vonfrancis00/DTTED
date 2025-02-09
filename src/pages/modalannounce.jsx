import React from 'react';

const ModalAnnounce = ({ isOpen, onClose, title, description, image }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-11/12 md:w-1/2 lg:w-1/3 p-6 rounded-lg shadow-lg">

        {image && (
          <img 
            src={image} 
            alt={title}
            className="w-full h-auto rounded-lg mb-4"
          />
        )}

        <h4 className="text-2xl font-semibold text-blue-800 mb-4">{title}</h4>
        <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
        
        <button 
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalAnnounce;
