import React, { useState } from "react";

const LivelihoodEducation = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Image sources
    const images = [
        "/foodservices(1styr1stsem).png",
        "/foodservices(1styr2ndsem).png",
        "/foodservices(2ndyr1stsem).png",
        "/foodservices(2ndyr2ndsem).png",
        "/foodservices(3rdyr1stsem).png",
        "/foodservices(3rdyr2ndsem).png",
        "/foodservices(4thyr1stsem).png",
        "/foodservices(4styr2ndsem).png"
    ];

    return (
        <section className="container mx-auto py-10">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 mt-20">
            BACHELOR OF TECHNICAL-VOCATIONAL TEACHER EDUCATION <b/>MAJOR IN FOOD SERVICE MANAGEMENT <b/>(BTVTEd- Food Service Management)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Food Service ${index + 1}`}
                        className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
                        onClick={() => setSelectedImage(src)}
                    />
                ))}
            </div>
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                    <div className="relative p-4">
                        <button
                            className="absolute top-2 right-2 text-white text-2xl font-bold bg-gray-800 rounded-full px-3 py-1 hover:bg-red-500"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>
                        <img src={selectedImage} alt="Preview" className="max-w-full max-h-screen rounded-lg shadow-lg" />
                    </div>
                </div>
            )}
        </section>
    );
};

export default LivelihoodEducation;
