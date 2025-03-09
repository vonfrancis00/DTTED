import React, { useEffect, useRef } from 'react';

const ModalAnnounce = ({ isOpen, onClose, title, description, image }) => {
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
        className="bg-white w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 p-8 rounded-lg shadow-lg overflow-hidden"
      >
        {image && (
          <div className="overflow-auto max-h-80 mb-6">
            <img 
              src={image} 
              alt={title}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        )}

        <h4 className="text-3xl font-semibold text-gray-800 mb-6">{title}</h4>

        <div className="overflow-y-auto max-h-72 mb-6">
          <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
        </div>

        <div className="flex justify-end">
          <button 
            className="bg-blue-600 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAnnounce;
