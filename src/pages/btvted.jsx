import React, { useState } from "react";

const LivelihoodEducation = () => {
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [selectedYear, setSelectedYear] = useState("");

    // Grouped image sources by year level for Food Service Management
    const foodServiceGroups = {
        "1st Year": [
            "/foodservices(1styr1stsem).png",
            "/foodservices(1styr2ndsem).png"
        ],
        "2nd Year": [
            "/foodservices(2ndyr1stsem).png",
            "/foodservices(2ndyr2ndsem).png"
        ],
        "3rd Year": [
            "/foodservices(3rdyr1stsem).png",
            "/foodservices(3rdyr2ndsem).png",
            "/foodservices(3rdyrSummer).png"
        ],
        "4th Year": [
            "/foodservices(4thyr1stsem).png",
            "/foodservices(4thyr2ndsem).png"
        ]
    };

    // Grouped image sources by year level for Fashion and Garments
    const fashionGarmentsGroups = {
        "1st Year": [
            "/fashiongarments(1styr1stsem).png",
            "/fashiongarments(1styr2ndsem).png"
        ],
        "2nd Year": [
            "/fashiongarments(2ndyr1stsem).png",
            "/fashiongarments(2ndyr2ndsem).png"
        ],
        "3rd Year": [
            "/fashiongarments(3rdyr1stsem).png",
            "/fashiongarments(3rdyr2ndsem).png",
            "/fashiongarments(3rdyrSummer).png"
        ],
        "4th Year": [
            "/fashiongarments(4thyr1stsem).png",
            "/fashiongarments(4thyr2ndsem).png"
        ]
    };

    return (
        <section className="container mx-auto py-10">
            <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6 mt-20">
                BACHELOR OF TECHNICAL-VOCATIONAL TEACHER EDUCATION <b />MAJOR IN FOOD SERVICE MANAGEMENT <b /> (BTVTEd- Food Service Management)
            </h2>

            {/* Group Images for Food Service Management */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {Object.entries(foodServiceGroups).map(([yearLevel, images], index) => (
                    <div key={index} className="relative cursor-pointer" 
                         onClick={() => { 
                             setSelectedGroup(images); 
                             setSelectedYear(yearLevel); // Set the selected year for the modal title 
                         }}>
                        <img
                            src={images[0]} // Use the first image of the group as the thumbnail
                            alt={`${yearLevel} Thumbnail`}
                            className="w-full h-auto max-h-[200px] object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white font-semibold text-lg">
                            <span>View All {yearLevel}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Food Service Management */}
            {selectedGroup && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                    <div className="relative p-4 bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-xl lg:w-4/5 xl:w-3/4">
                        <button
                            className="absolute top-4 right-4 text-white text-3xl font-bold bg-gray-800 rounded-full p-2 hover:bg-red-500 transition"
                            onClick={() => { setSelectedGroup(null); setSelectedYear(""); }} // Reset the modal state
                        >
                            ✕
                        </button>

                        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">{`View All ${selectedYear}`}</h3>

                        <div className="flex flex-col items-center gap-8 overflow-y-auto max-h-[80vh]">
                            <div className="flex justify-center">
                                <img
                                    src={selectedGroup[0]}
                                    alt={`Food Service 1`}
                                    className="w-full max-w-[700px] max-h-[400px] object-cover rounded-lg shadow-lg"
                                />
                            </div>

                            {selectedGroup[1] && (
                                <div className="flex justify-center">
                                    <img
                                        src={selectedGroup[1]}
                                        alt={`Food Service 2`}
                                        className="w-full max-w-[700px] max-h-[400px] object-cover rounded-lg shadow-lg"
                                    />
                                </div>
                            )}

                            {selectedGroup.slice(2).map((src, index) => (
                                <div key={index} className="flex justify-center">
                                    <img
                                        src={src}
                                        alt={`Food Service ${index + 3}`}
                                        className="w-full max-w-[700px] max-h-[400px] object-cover rounded-lg shadow-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Fashion and Garments Section */}
            <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6 mt-20">
                BACHELOR OF TECHNICAL-VOCATIONAL TEACHER EDUCATION <b />MAJOR IN FASHION AND GARMENTS <b /> (BTVTEd- Fashion and Garments)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {Object.entries(fashionGarmentsGroups).map(([yearLevel, images], index) => (
                    <div key={index} className="relative cursor-pointer" 
                         onClick={() => { 
                             setSelectedGroup(images); 
                             setSelectedYear(yearLevel);
                         }}>
                        <img
                            src={images[0]} // Use the first image of the group as the thumbnail
                            alt={`${yearLevel} Thumbnail`}
                            className="w-full h-auto max-h-[200px] object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white font-semibold text-lg">
                            <span>View All {yearLevel}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Fashion and Garments */}
            {selectedGroup && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                    <div className="relative p-4 bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-xl lg:w-4/5 xl:w-3/4">
                        <button
                            className="absolute top-4 right-4 text-white text-3xl font-bold bg-gray-800 rounded-full p-2 hover:bg-red-500 transition"
                            onClick={() => { setSelectedGroup(null); setSelectedYear(""); }} // Reset the modal state
                        >
                            ✕
                        </button>

                        <h4 className="text-2xl font-semibold text-center text-gray-800 mb-4">{`${selectedYear} Propectus (View All)`}</h4>

                        <div className="flex flex-col items-center gap-8 overflow-y-auto max-h-[80vh]">
                            <div className="flex justify-center">
                                <img
                                    src={selectedGroup[0]}
                                    alt={`Fashion and Garments 1`}
                                    className="w-full max-w-[700px] max-h-[400px] object-cover rounded-lg shadow-lg"
                                />
                            </div>

                            {selectedGroup[1] && (
                                <div className="flex justify-center">
                                    <img
                                        src={selectedGroup[1]}
                                        alt={`Fashion and Garments 2`}
                                        className="w-full max-w-[700px] max-h-[400px] object-cover rounded-lg shadow-lg"
                                    />
                                </div>
                            )}

                            {selectedGroup.slice(2).map((src, index) => (
                                <div key={index} className="flex justify-center">
                                    <img
                                        src={src}
                                        alt={`Fashion and Garments ${index + 3}`}
                                        className="w-full max-w-[700px] max-h-[400px] object-cover rounded-lg shadow-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default LivelihoodEducation;
