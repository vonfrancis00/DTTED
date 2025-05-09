import React, { useState, useEffect } from "react";

const LivelihoodEducation = () => {
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [selectedYear, setSelectedYear] = useState("");

    const IndustrialArtGroup = {
        "1st year": [
            "/IndustrialArt/IndustrialArt(1styr1stsem).png",
            "/IndustrialArt/IndustrialArt(1styr2ndsem).png",
        ],
        "2nd year": [
            "/IndustrialArt/IndustrialArt(2ndyr1stsem).png",
            "/IndustrialArt/IndustrialArt(2ndyr2ndsem).png",
        ],
        "3rd year": [
            "/IndustrialArt/IndustrialArt(3rdyr1stsem).png",
            "/IndustrialArt/IndustrialArt(3rdyr2ndsem).png",
        ],
        "4th year": [
            "/IndustrialArt/IndustrialArt(4thyr1stsem).png",
            "/IndustrialArt/IndustrialArt(4thyr2ndsem).png",
        ],
    };

    const HomeEconomicGroup = {
        "1st year": [
            "/homeeconomic/HomeEconomic(1styr1stsem).png",
            "/homeeconomic/HomeEconomic(1styr2ndsem).png",
        ],
        "2nd year": [
            "/homeeconomic/HomeEconomic(2ndyr1stsem).png",
            "/homeeconomic/HomeEconomic(2ndyr2ndsem).png",
        ],
        "3rd year": [
            "/homeeconomic/HomeEconomic(3rdyr1stsem).png",
            "/homeeconomic/HomeEconomic(3rdyr2ndsem).png",
        ],
        "4th year": [
            "/homeeconomic/HomeEconomic(4thyr1stsem).png",
            "/homeeconomic/HomeEconomic(4thyr2ndsem).png",
        ],
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <section className="container mx-auto py-10">
            <div className="bg-gradient-to-br from-white to-gray-50 shadow-lg border border-gray-200 rounded-2xl p-10 max-w-5xl mx-auto mt-16 font-serif transition duration-500 ease-in-out">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 tracking-wide">
                    About the BTLEd Program
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    The <span className="font-semibold text-gray-900">Bachelor of Technology and Livelihood Education (BTLED)</span> program is designed to equip future teachers who will be teaching the Technology and Livelihood Education subjects for Grades 4 to 8 in basic education. Specifically, the BTLEd program is expected to produce teachers who can assume the following major roles:
                </p>

                <ul className="list-disc pl-6 text-gray-800 text-lg space-y-4">
                    {[
                    "Effective synthesizers of organized knowledge to allow analytical and critical thinking skills.",
                    "Efficient and effective promoters and facilitators of learning to enable learners to develop their full potential in lifelong learning.",
                    "Committed humanists whose understanding and appreciation of human ideals inspire learners to grow.",
                    "Model teachers with competence to teach TLE exploratory courses from Grades 4–8.",
                    "Individuals with a high regard for learning and industry-based values.",
                    "Nationally-certified trainers in their fields of specialization."
                    ].map((item, index) => (
                    <li
                        key={index}
                        className="transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-indigo-600 hover:font-semibold"
                    >
                        {item}
                    </li>
                    ))}
                </ul>
                </div>

                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6 mt-20">
                    BACHELOR OF TECHNOLOGY AND LIVELIHOOD EDUCATION MAJOR IN INDUSTRIAL ARTS <br />(BTLEd-Industrial Arts)
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

                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6 mt-20">
                    BACHELOR OF TECHNOLOGY AND LIVELIHOOD EDUCATION MAJOR IN HOME ECONOMICS<br />(BTLEd-Home Economics)
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
                            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">{`${selectedYear} Prospectus (View All)`}</h3>
                            <div className="flex flex-col items-center gap-8 overflow-y-auto max-h-[80vh]">
                                {selectedGroup.map((src, index) => (
                                    <div key={index} className="flex justify-center">
                                        <img
                                            src={src}
                                            alt={`Slide ${index + 1}`}
                                            className="w-full max-w-[700px] max-h-[400px] object-cover rounded-lg shadow-lg"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </section>

            <section className="container mx-auto py-20 px-6 bg-gradient-to-br from-white to-blue-50 mt-8 rounded-xl shadow-2xl">
  <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-8">
    Program Outcomes
  </h2>

  <p className="text-lg md:text-xl font-medium text-gray-800 text-center mb-12 max-w-3xl mx-auto">
    Upon graduating from the program, students will be able to:
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
    {[
      "Demonstrate broad and coherent knowledge and skills in teaching Home Economics, Industrial Arts, Information Communication Technology, and Agri-Fishery Arts respectively.",
      "Work effectively as an individual and as a member or leader in a diverse team, recognizing the different roles within a team.",
      "Apply the principles of professional teaching by integrating core content and interdisciplinary themes through activities that promote Creativity, Critical Thinking, Communication, and Collaboration in preparation for 21st-century skills.",
      "Utilize ICT in teaching-learning practices to promote excellence, relevant and sustainable educational practices.",
      "Demonstrate global awareness, including Financial, Economic, Business, Entrepreneurial Literacy, Civic Literacy, Health Literacy, and Environmental Literacy.",
      "Engage in research and development projects in Home Economics, Industrial Arts, Information Communication Technology, and Agri-Fishery, aligned with regional and national development goals.",
      "Apply a wide range of teaching process skills, including curriculum development, lesson planning, instructional material development, educational assessment, and teaching approaches.",
      "Apply professional knowledge and skills in teaching Home Economics, Industrial Arts, Information Communication Technology, and Agri-Fishery Arts with minimal supervision.",
      "Understand how educational processes relate to larger historical, social, cultural, and political contexts.",
    ].map((item, index) => (
      <div
        key={index}
        className="flex items-start gap-4 bg-white p-5 rounded-lg shadow hover:shadow-md transition-all duration-300"
      >
        <div className="text-blue-600 text-xl font-bold pt-1">•</div>
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

export default LivelihoodEducation;
