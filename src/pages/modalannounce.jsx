import React, { useEffect } from "react";

const ModalAnnounce = ({ isOpen, onClose, title, description, image, link }) => {
  // Close modal when clicking outside of it
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent body scrolling when modal is open
    } else {
      document.body.style.overflow = "unset"; // Re-enable body scrolling when modal is closed
    }
    return () => {
      document.body.style.overflow = "unset"; // Clean up when component is unmounted
    };
  }, [isOpen]);

  return isOpen ? (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleBackdropClick}
    >
      <div
        className="relative p-6 bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()} // Prevent click event from propagating to the backdrop
      >
        <button
          className="absolute top-4 right-4 text-white text-3xl font-bold bg-gray-800 rounded-full p-2 hover:bg-red-500 transition"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="flex justify-center mb-6">
          <img
            src={image}
            alt={title}
            className="w-full max-w-[700px] max-h-[400px] object-cover rounded-lg shadow-xl"
          />
        </div>
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">{title}</h2>
        <p className="text-lg text-gray-700 mb-4">{description}</p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Read More
          </a>
        )}
      </div>
    </div>
  ) : null;
};

export default ModalAnnounce;
