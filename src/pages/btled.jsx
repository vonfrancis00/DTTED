import React, { useState, useEffect } from "react";

const LivelihoodEducation = () => {
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [selectedYear, setSelectedYear] = useState("");

    const IndustrialArtGroup = {
        "1st year" : [
            "/IndustrialArt/IndustrialArt(1styr1stsem).png",
            "/IndustrialArt/IndustrialArt(1styr2ndsem).png"
        ],
        "2nd year" : [
            "/IndustrialArt/IndustrialArt(2ndyr1stsem).png",
            "/IndustrialArt/IndustrialArt(2ndyr2ndsem).png"
        ],
        "3rd year" : [
            "/IndustrialArt/IndustrialArt(3rdyr1stsem).png",
            "/IndustrialArt/IndustrialArt(3rdyr2ndsem).png"
        ],
        "4th year" : [
            "/IndustrialArt/IndustrialArt(4thyr1stsem).png",
            "/IndustrialArt/IndustrialArt(4thyr2ndsem).png"
        ]
    };
    const HomeEconomicGroup = {
        "1st year" : [
            "/homeeconomic/HomeEconomic(1styr1stsem).png",
            "/homeeconomic/HomeEconomic(1styr2ndsem).png"
        ],
        "2nd year" : [
            "/homeeconomic/HomeEconomic(2ndyr1stsem).png",
            "/homeeconomic/HomeEconomic(2ndyr2ndsem).png"
        ],
        "3rd year" : [
            "/homeeconomic/HomeEconomic(3rdyr1stsem).png",
            "/homeeconomic/HomeEconomic(3rdyr2ndsem).png"
        ],
        "4th year" : [
            "/homeeconomic/HomeEconomic(4thyr1stsem).png",
            "/homeeconomic/HomeEconomic(4thyr2ndsem).png"
        ]
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
        <section className="container mx-auto py-10">
            <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6 mt-20">
                BACHELOR OF TECHNOLOGY AND LIVELIHOOD EDUCATION MAJOR IN INDUSTRIAL ARTS <br/>(BTLEd-Industrial Arts)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Object.entries(IndustrialArtGroup).map(([yearLevel, images], index) => (
                    <div key={index} className="relative cursor-pointer" 
                         onClick={() => { 
                             setSelectedGroup(images); 
                             setSelectedYear(yearLevel); 
                         }}>
                        <img
                            src={images[0]} 
                            alt={`${yearLevel} Thumbnail`}
                            className="w-full h-auto max-h-[200px] object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white font-semibold text-lg">
                            <span>View All {yearLevel}</span>
                        </div>
                    </div>
                ))}
            </div>

            {selectedGroup && (
                <div className="fixed inset-0 bg-transoarent bg-opacity-80 flex justify-center items-center z-50">
                    <div className="relative p-4 bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-xl lg:w-4/5 xl:w-3/4">
                        <button
                            className="absolute top-4 right-4 text-white text-3xl font-bold bg-gray-800 rounded-full p-2 hover:bg-red-500 transition"
                            onClick={() => { setSelectedGroup(null); setSelectedYear(""); }}
                        >
                            ✕
                        </button>
                        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">{`${selectedYear} Prospectus(View All)`}</h3>
                        <div className="flex flex-col items-center gap-8 overflow-y-auto max-h-[80vh]">
                            <div className="flex justify-center">
                                <img
                                    src={selectedGroup[0]}
                                    alt={`Industrial Arts 1`}
                                    className="w-full max-w-[700px] max-h-[400px] object-cover rounded-lg shadow-lg"
                                />
                            </div>
                            {selectedGroup[1] && (
                                <div className="flex justify-center">
                                    <img
                                        src={selectedGroup[1]}
                                        alt={`Industrial Arts 2`}
                                        className="w-full max-w-[700px] max-h-[400px] object-cover rounded-lg shadow-lg"
                                    />
                                </div>
                            )}
                            {selectedGroup.slice(2).map((src, index) => (
                                <div key={index} className="flex justify-center">
                                    <img
                                        src={src}
                                        alt={`Industrial Arts ${index + 3}`}
                                        className="w-full max-w-[700px] max-h-[400px] object-cover rounded-lg shadow-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
             <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6 mt-20">
             BACHELOR OF TECHNOLOGY AND LIVELIHOOD EDUCATION MAJOR IN HOME ECONOMICS<br/>(BTLEd-Home Economics)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Object.entries(HomeEconomicGroup).map(([yearLevel, images], index) => (
                    <div key={index} className="relative cursor-pointer" 
                         onClick={() => { 
                             setSelectedGroup(images); 
                             setSelectedYear(yearLevel); 
                         }}>
                        <img
                            src={images[0]} 
                            alt={`${yearLevel} Thumbnail`}
                            className="w-full h-auto max-h-[200px] object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white font-semibold text-lg">
                            <span>View All {yearLevel}</span>
                        </div>
                    </div>
                ))}
            </div>

            {selectedGroup && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                    <div className="relative p-4 bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-xl lg:w-4/5 xl:w-3/4">
                        <button
                            className="absolute top-4 right-4 text-white text-3xl font-bold bg-gray-800 rounded-full p-2 hover:bg-red-500 transition"
                            onClick={() => { setSelectedGroup(null); setSelectedYear(""); }}
                        >
                            ✕
                        </button>
                        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">{`${selectedYear} Prospectus(View All)`}</h3>
                        <div className="flex flex-col items-center gap-8 overflow-y-auto max-h-[80vh]">
                            <div className="flex justify-center">
                                <img
                                    src={selectedGroup[0]}
                                    alt={`Home Economics 1`}
                                    className="w-full max-w-[700px] max-h-[400px] object-cover rounded-lg shadow-lg"
                                />
                            </div>
                            {selectedGroup[1] && (
                                <div className="flex justify-center">
                                    <img
                                        src={selectedGroup[1]}
                                        alt={`Home Economics 2`}
                                        className="w-full max-w-[700px] max-h-[400px] object-cover rounded-lg shadow-lg"
                                    />
                                </div>
                            )}
                            {selectedGroup.slice(2).map((src, index) => (
                                <div key={index} className="flex justify-center">
                                    <img
                                        src={src}
                                        alt={`Home Economics ${index + 3}`}
                                        className="w-full max-w-[700px] max-h-[400px] object-cover rounded-lg shadow-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
        <section className="container mx-auto py-20 bg-white mt-4 rounded-xl shadow-lg">
    <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-8">
        Program Outcomes
    </h2>
    <p className="text-xl font-semibold text-gray-800 text-center mb-12 px-6">
        Upon graduating from the program, students will be able to:
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-6">
            <li>
                <strong className="font-semibold text-gray-800">Demonstrate broad and coherent knowledge and skills</strong> in teaching Home Economics, Industrial Arts, Information Communication Technology, and Agri-Fishery Arts respectively.
            </li>
            <li>
                <strong className="font-semibold text-gray-800">Work effectively as an individual</strong> and as a member or leader in a diverse team, recognizing the different roles within a team.
            </li>
            <li>
                <strong className="font-semibold text-gray-800">Apply the principles of professional teaching</strong> by integrating core content and interdisciplinary themes through activities that promote Creativity, Critical Thinking, Communication, and Collaboration in preparation for 21st-century skills.
            </li>
            <li>
                <strong className="font-semibold text-gray-800">Utilize ICT in teaching-learning practices</strong> to promote excellence, relevant and sustainable educational practices.
            </li>
            <li>
                <strong className="font-semibold text-gray-800">Demonstrate global awareness</strong>, including Financial, Economic, Business, Entrepreneurial Literacy, Civic Literacy, Health Literacy, and Environmental Literacy.
            </li>
        </ul>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-6">
            <li>
                <strong className="font-semibold text-gray-800">Engage in research and development projects</strong> in Home Economics, Industrial Arts, Information Communication Technology, and Agri-Fishery, aligned with regional and national development goals.
            </li>
            <li>
                <strong className="font-semibold text-gray-800">Apply a wide range of teaching process skills</strong>, including curriculum development, lesson planning, instructional material development, educational assessment, and teaching approaches.
            </li>
            <li>
                <strong className="font-semibold text-gray-800">Apply professional knowledge and skills</strong> in teaching Home Economics, Industrial Arts, Information Communication Technology, and Agri-Fishery Arts with minimal supervision.
            </li>
            <li>
                <strong className="font-semibold text-gray-800">Understand how educational processes</strong> relate to larger historical, social, cultural, and political contexts.
            </li>
        </ul>
    </div>
    <div className="mt-8 text-center px-4">
        <p className="text-lg font-semibold text-gray-700">
            This program ensures that graduates are equipped to meet the growing demands of the workforce and contribute meaningfully to their communities.
        </p>
    </div>
</section>

</div>

    );
};

export default LivelihoodEducation;
