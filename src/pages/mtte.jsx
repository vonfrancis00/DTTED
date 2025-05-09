import React, { useState, useEffect } from "react";

const Masters = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const programOutcomes = [
        "Exhibit excellent communicative competence in both oral and written forms.",
        "Demonstrate cultural sensitivity and adaptability to diverse culture.",
        "Develop strong foundation to explain theoretical bases in their field of specialization.",
        "Conduct studies that will provide short-term and long-term solution to identified technical problem using knowledge and skills in research.",
        "Prepare and design innovative instructional materials.",
        "Actively engage in community development programs and activities.",
        "Apply professional creative skills learned in the production of instructional materials with the use of available resources and technologies.",
        "Formulate plans that enhances instructional delivery and processes."
    ];

    const prospectusImages = [
        { src: "/MTE(1).png", title: "Mechanical Engineering Technology" },
        { src: "/MTE(2).png", title: "Technical Drafting Technology" },
        { src: "/MTE(3).png", title: "Automotive Technology" },
        { src: "/MTE(4).png", title: "Electronics Engineering Technology" },
        { src: "/MTE(5).png", title: "Fashion and Garments Technology" },
        { src: "/MTE(6).png", title: "Food and Service Management" },
        { src: "/MTE(7).png", title: "Electrical Engineering Technology" },
        { src: "/MTE(8).png", title: "Civil Engineering Technology" }
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedImage("");
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gray-50 text-gray-800 font-sans">
            {/* Program Info Section */}
            <section className="container mx-auto py-20 px-6">
                <div className="bg-white shadow-md border border-gray-200 rounded-3xl p-10 max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8 leading-tight">About the MTTE Program</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        The <span className="font-bold text-gray-900">Master in Technical and Technology Education (MTTE)</span> program prepares professionals to become leaders and trainers in educational institutions, TVET, and industries. The curriculum emphasizes theoretical foundations, practical applications, and research excellence.
                    </p>
                </div>
            </section>

            {/* Image Gallery Section */}
            <section className="bg-white py-20">
                <div className="text-center mb-12 px-6">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-4">MTTE Program Prospectus</h2>
                    <p className="text-lg text-gray-600">Click on any image to view in full size</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 max-w-6xl mx-auto">
                    {prospectusImages.map((img, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center cursor-pointer"
                            onClick={() => handleImageClick(img.src)}
                        >
                            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 w-full">
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="w-full h-64 object-cover rounded-2xl"
                                />
                            </div>
                            <p className="mt-3 text-lg font-bold text-center text-gray-700">
                                Master of Technical and Technology Education Major in{" "}
                                <span className="block font-bold">{img.title}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal */}
            {showModal && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="relative p-6 bg-white rounded-3xl shadow-2xl w-full max-w-4xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-3xl font-bold bg-gray-800 rounded-full p-2 hover:bg-red-500 transition"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                        <img
                            src={selectedImage}
                            alt="Enlarged view"
                            className="w-full max-h-[80vh] object-contain rounded-xl"
                        />
                    </div>
                </div>
            )}

            {/* Program Outcomes Section */}
            <section className="container mx-auto py-24 px-6 bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-inner mt-6">
                <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Program Outcomes</h2>
                <p className="text-lg text-center text-gray-700 mb-12 max-w-2xl mx-auto">
                    Upon graduating from the MTTE program, students will be able to:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {programOutcomes.map((outcome, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
                        >
                            <div className="text-blue-600 text-2xl font-bold">•</div>
                            <p className="text-gray-700">{outcome}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <p className="text-lg font-medium text-gray-800 max-w-3xl mx-auto">
                        This program ensures graduates are equipped to meet the demands of the workforce and contribute significantly to community and industry development.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Masters;
