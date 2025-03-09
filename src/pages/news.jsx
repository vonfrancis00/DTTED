import React, { useState } from "react";
import { X } from "lucide-react"; // For a modern close button

const News = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // For image preview modal

  const images = [
    "/news/news(0).jpg", "/news/news(1).jpg", "/news/news(2).jpg", "/news/news(3).jpg",
    "/news/news(4).jpg", "/news/news(5).jpg", "/news/news(6).jpg", "/news/news(7).jpg",
    "/news/news(8).jpg", "/news/news(9).jpg", "/news/news(10).jpg", "/news/news(11).jpg",
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openImage = (img) => setSelectedImage(img);
  const closeImage = () => setSelectedImage(null);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white max-w-4xl mx-auto p-10 rounded-2xl shadow-xl text-center mt-20">
        <h1 className="text-4xl font-bold text-blue-900 mb-6 uppercase tracking-wide">
          Latest News
        </h1>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <p className="text-3xl md:text-4xl font-extrabold mb-8 tracking-wide text-blue-900 shadow-sm">
            ICMR: International Conference on Multidisciplinary Research 2024sdsd
          </p>
          
          {/* Display Two Large Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.slice(0, 2).map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`Faculty ${index + 1}`} 
                className="w-full h-80 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => openImage(img)}
              />
            ))}
          </div>

          <button
            onClick={openModal}
            className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            See More
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
          onClick={closeModal} // Close modal when clicking outside
        >
          <div 
            className="bg-white p-6 rounded-lg shadow-2xl max-w-5xl w-full relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing on inside click
          >
            {/* Close Button */}
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-gray-700 text-2xl hover:text-gray-900"
            >
              <X size={28} />
            </button>

            <p className="text-blue-900 text-2xl font-bold mb-4">
              ICMR: International Conference on Multidisciplinary Research 2024
            </p>

            <h2 className="text-lg font-medium text-gray-700 mb-6 leading-relaxed">
              Heartfelt Congratulations to the esteemed faculty of the Department of Technical and Technology Education for their successful presentation 
              at the 12th International Conference on Multidisciplinary Research (ICMR). The conference, held on November 15, 2024, at Tan Trao University 
              in Vietnam, centered around the theme, <span className="font-semibold">"Promoting Multidisciplinary Studies on Emerging Trends and Innovations in Education and Sustainable Development."</span>
            </h2>

            {/* Image Grid (2 Columns on Large Screens) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {images.map((img, index) => (
                <img 
                  key={index} 
                  src={img} 
                  alt={`Faculty ${index + 1}`} 
                  className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => openImage(img)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Image Preview Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
          onClick={closeImage}
        >
          <div className="relative">
            <button 
              onClick={closeImage} 
              className="absolute top-4 right-4 text-white text-2xl bg-gray-800 p-2 rounded-full hover:bg-gray-600"
            >
              <X size={28} />
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
