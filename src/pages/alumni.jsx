import React, { useState } from 'react';

const Alumni = () => {
  const [alumni, setAlumni] = useState([
    { name: "Guen Idjao", profession: "Educator", achievements: "Organizing events and program for the youth." }
  ]);

  const [newAlumni, setNewAlumni] = useState({
    name: "",
    profession: "",
    achievements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAlumni((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlumni([...alumni, newAlumni]);
    setNewAlumni({ name: "", profession: "", achievements: "" });
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4 shadow-md">Alumni</h2>
          <p className="text-lg text-gray-200 font-semibold">Join our community of successful alumni and stay connected!</p>
        </div>
      </div>

      {/* Alumni Directory */}
      <div className="container mx-auto px-6 py-8 mt-6">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-center mb-4">Alumni Directory</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {alumni.map((a, index) => (
              <li key={index} className="bg-yellow-400 p-4 shadow-md rounded-lg">
                <p className="font-semibold text-lg text-blue-800">{a.name}</p>
                <p className="text-gray-600 text-black">{a.profession}</p>
                <p className="text-gray-600 text-black">{a.achievements}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Alumni Registration Form */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-4">Alumni Registration</h3>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
            <input
              type="text"
              name="name"
              value={newAlumni.name}
              onChange={handleChange}
              placeholder="Name"
              className="border p-2 w-full rounded-md"
              required
            />
            <input
              type="text"
              name="profession"
              value={newAlumni.profession}
              onChange={handleChange}
              placeholder="Profession"
              className="border p-2 w-full rounded-md"
              required
            />
            <input
              type="text"
              name="achievements"
              value={newAlumni.achievements}
              onChange={handleChange}
              placeholder="Achievements"
              className="border p-2 w-full rounded-md"
              required
            />
            <button type="submit" className="bg-blue-800 text-white p-2 rounded-md hover:bg-blue-700 w-full mb-4">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Alumni;