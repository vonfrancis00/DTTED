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
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Alumni</h2>
      
      {/* Alumni Directory */}
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
          />
          <input
            type="text"
            name="profession"
            value={newAlumni.profession}
            onChange={handleChange}
            placeholder="Profession"
            className="border p-2 w-full rounded-md"
          />
          <input
            type="text"
            name="achievements"
            value={newAlumni.achievements}
            onChange={handleChange}
            placeholder="Achievements"
            className="border p-2 w-full rounded-md"
          />
          <button type="submit" className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 w-full">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Alumni;
