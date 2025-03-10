import React, { useEffect, useRef } from 'react';

const ModalActivity = ({ isOpen, onClose, title, description, image }) => {
  const modalRef = useRef(null);

  // Close the modal when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div
        ref={modalRef}
        className="bg-white w-11/12 md:w-2/3 lg:w-1/2 p-8 rounded-lg shadow-lg max-h-[90vh] overflow-y-auto"
      >
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

export default ModalActivity;
