import React, { useState, useEffect } from "react";

const TeacherEducation = () => {
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [selectedYear, setSelectedYear] = useState("");

    const foodServiceGroups = {
        "1st Year": [
            "/foodservices/foodservices(1styr1stsem).png",
            "/foodservices/foodservices(1styr2ndsem).png"
        ],
        "2nd Year": [
            "/foodservices/foodservices(2ndyr1stsem).png",
            "/foodservices/foodservices(2ndyr2ndsem).png"
        ],
        "3rd Year": [
            "/foodservices/foodservices(3rdyr1stsem).png",
            "/foodservices/foodservices(3rdyr2ndsem).png",
            "/foodservices/foodservices(3rdyrSummer).png"
        ],
        "4th Year": [
            "/foodservices/foodservices(4thyr1stsem).png",
            "/foodservices/foodservices(4thyr2ndsem).png"
        ]
    };

    const fashionGarmentsGroups = {
        "1st Year": [
            "/fashiongarments/fashiongarments(1styr1stsem).png",
            "/fashiongarments/fashiongarments(1styr2ndsem).png"
        ],
        "2nd Year": [
            "/fashiongarments/fashiongarments(2ndyr1stsem).png",
            "/fashiongarments/fashiongarments(2ndyr2ndsem).png"
        ],
        "3rd Year": [
            "/fashiongarments/fashiongarments(3rdyr1stsem).png",
            "/fashiongarments/fashiongarments(3rdyr2ndsem).png",
            "/fashiongarments/fashiongarments(3rdyrSummer).png"
        ],
        "4th Year": [
            "/fashiongarments/fashiongarments(4thyr1stsem).png",
            "/fashiongarments/fashiongarments(4thyr2ndsem).png"
        ]
    };

    const computerSystemGroups = {
        "1st Year": [
            "/computersystem/computersystem(1styr1stsem).png",
            "/computersystem/computersystem(1styr2ndsem).png"
        ],
        "2nd Year": [
            "/computersystem/computersystem(2ndyr1stsem).png",
            "/computersystem/computersystem(2ndyr2ndsem).png"
        ],
        "3rd Year": [
            "/computersystem/computersystem(3rdyr1stsem).png",
            "/computersystem/computersystem(3rdyr2ndsem).png",
            "/computersystem/computersystem(3rdyrSummer).png"
        ],
        "4th Year": [
            "/computersystem/computersystem(4thyr1stsem).png",
            "/computersystem/computersystem(4thyr2ndsem).png"
        ]
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
        
        <section className="container mx-auto py-10">
            <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6 mt-20">
                BACHELOR OF TECHNICAL-VOCATIONAL TEACHER EDUCATION MAJOR IN FOOD SERVICE MANAGEMENT (BTVTEd- Food Service Management)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {Object.entries(foodServiceGroups).map(([yearLevel, images], index) => (
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
                <div className="fixed inset-0 bg-transparent bg-opacity-80 flex justify-center items-center z-50">
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
            
            <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6 mt-20">
                BACHELOR OF TECHNICAL-VOCATIONAL TEACHER EDUCATION MAJOR IN FASHION AND GARMENTS (BTVTEd- Fashion and Garments)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {Object.entries(fashionGarmentsGroups).map(([yearLevel, images], index) => (
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
                <div className="fixed inset-0 bg-transparent bg-opacity-80 flex justify-center items-center z-50">
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

            <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6 mt-20">
            BACHELOR OF TECHNICAL-VOCATIONAL TEACHER EDUCATION MAJOR IN COMPUTER SYSTEM SERVICING(BTVTEd- Computer System Servicing)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-2">
                {Object.entries(computerSystemGroups).map(([yearLevel, images], index) => (
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
                                    alt={`Computer Systems 1`}
                                    className="w-full max-w-[700px] max-h-[400px] object-cover rounded-lg shadow-lg"
                                />
                            </div>
                            {selectedGroup[1] && (
                                <div className="flex justify-center">
                                    <img
                                        src={selectedGroup[1]}
                                        alt={`Computer Systems 2`}
                                        className="w-full max-w-[700px] max-h-[400px] object-cover rounded-lg shadow-lg"
                                    />
                                </div>
                            )}
                            {selectedGroup.slice(2).map((src, index) => (
                                <div key={index} className="flex justify-center">
                                    <img
                                        src={src}
                                        alt={`Computer Systems ${index + 3}`}
                                        className="w-full max-w-[700px] max-h-[400px] object-cover rounded-lg shadow-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
        <section className="container mx-auto py-16 bg-gray-50 mt-2 rounded-lg shadow-xl">
    <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Program Outcomes
    </h2>
    <p className="text-xl font-bold text-gray-700 text-center mb-6">
        Upon completing the program, graduates will be able to:
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-4">
            <li>
                Demonstrate competence and mastery in teaching the subject or area of specialization as required by the 
                Philippine TVET Trainers-Assessors Qualification Framework (PTTQF).
            </li>
            <li>
                Practice professional and ethical teaching standards sensitive to local, national, and global realities, as prescribed by UNESCO.
            </li>
            <li>
                Pursue lifelong learning for personal and professional growth through experiential and field-based opportunities.
            </li>
            <li>
                Develop research and innovations that can contribute to the improvement of the community and the well-being of individuals.
            </li>
            <li>
                Demonstrate professionalism and excellence in leadership and technical contributions while promoting unity and stewardship.
            </li>
        </ul>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-4">
            <li>
                Exhibit research capacity and teaching competencies in their chosen specialization.
            </li>
            <li>
                Conduct research to improve the teaching-learning process and develop innovations for educational, commercial, and other purposes.
            </li>
            <li>
                Demonstrate broad and coherent knowledge and skills in their field of study for professional work and lifelong learning.
            </li>
            <li>
                Preserve and promote Filipino historical and cultural heritage as reflected in contextualized instruction, research, and innovations.
            </li>
            <li>
                Apply specialized knowledge and skills with minimal supervision in any specific field within technical-vocational teacher education.
            </li>
        </ul>
    </div>
    <div className="mt-5 text-center">
        <p className="text-lg font-bold text-gray-700">
            This program ensures that graduates are fully equipped to meet the growing demands of the workforce and contribute meaningfully to their communities and fields.
        </p>
    </div>
</section>
        </div>
    );
};

export default TeacherEducation;
