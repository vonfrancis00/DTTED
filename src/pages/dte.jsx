import React, { useState, useEffect } from "react";

const Doctors = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const programOutcomes = [
        "Demonstrate competence, competitiveness, and ethical standards and become systematic in promoting technology.",
        "Articulate the rootedness in education and philosophical, socio-cultural, historical, psychological and political contexts.",
        "Exhibit behaviors of professional leaders in the field of specialization.",
        "Exemplify a motivated attitude and proficiency as educational managers in technology education.",
        "Conduct research and extension for the improvement of the quality of life in the community.",
        "Imbibe awareness in the participation and implementation of environmental policies and standards.",
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedImage("");
    };

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/* Program Info Section */}
            <section className="container mx-auto py-12 bg-gradient-to-r from-blue-50 to-white">
                <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-10 max-w-5xl mx-auto mt-16 font-serif">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 leading-tight">
                        About the DTE Program
                    </h2>
                    <p className="text-gray-700 text-lg font-semibold leading-relaxed mb-6">
                        The <span className="font-bold text-gray-900">Doctor of Technology Education (DTE)</span> program is designed to provide advanced training and research, producing specialized technical and technology leaders and consultants in education, TVET, and industries. It aims to cultivate innovation and leadership in technology education.
                    </p>
                </div>
            </section>

            {/* Image Section with Modal */}
            <section className="container mx-auto py-16 text-center">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
                    Doctor of Technology Education (DTE) Program Prospectus
                </h2>
                <div className="relative cursor-pointer mb-2">
                    <img
                        src="/DTE(PIC).png"
                        alt="Doctor of Technology Education program showcasing course content and features"
                        className="w-80 h-80 object-cover rounded-lg shadow-xl mx-auto transition-transform duration-300 transform hover:scale-105"
                        onClick={() => handleImageClick("/DTE(PIC).png")}
                    />
                </div>

                {/* Modal */}
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50" onClick={closeModal}>
                        <div
                            className="relative p-6 bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-3xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 text-white text-3xl font-bold bg-gray-800 rounded-full p-2 hover:bg-red-500 transition"
                                onClick={closeModal}
                            >
                                ✕
                            </button>
                            <div className="flex justify-center">
                                <img
                                    src={selectedImage}
                                    alt="Enlarged view of Doctor of Technology Education program"
                                    className="w-full max-w-[90%] max-h-[80vh] object-contain rounded-lg shadow-xl"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* Program Outcomes Section */}
            <section className="container mx-auto py-20 px-6 bg-gradient-to-br from-white to-blue-50 mt-2 rounded-xl shadow-lg">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-8">
                    Program Outcomes
                </h2>
                <p className="text-lg md:text-xl font-medium text-gray-800 text-center mb-12 max-w-3xl mx-auto">
                    Upon graduating from the program, students will be able to:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {programOutcomes.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="text-blue-600 text-2xl font-bold pt-1">•</div>
                            <p className="text-gray-700 text-base leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center max-w-3xl mx-auto">
                    <p className="text-lg md:text-xl font-semibold text-gray-700">
                        This program ensures that graduates are equipped to meet the growing demands of the workforce and contribute meaningfully to their communities.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Doctors;
