import React, { useState } from 'react';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([
    { title: "Seminar on Future of Education", description: "Join us for an exciting seminar on the future of education. Date: May 10, 2024." },
    { title: "Research Paper Submission Deadline", description: "Deadline for submitting research papers is June 15, 2024. Don't miss it!" },
  ]);

  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAnnouncement((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnnouncements([...announcements, newAnnouncement]);
    setNewAnnouncement({ title: "", description: "" });
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Announcements</h2>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-center mb-4">Latest Announcements</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {announcements.map((announcement, index) => (
            <li key={index} className="bg-yellow-400 p-4 shadow-md rounded-lg">
              <h4 className="font-semibold text-xl text-blue-900">{announcement.title}</h4>
              <p className="text-gray-600 text-black">{announcement.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-center mb-4">Add New Announcement</h3>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
          <input
            type="text"
            name="title"
            value={newAnnouncement.title}
            onChange={handleChange}
            placeholder="Announcement Title"
            className="border p-2 w-full rounded-md"
          />
          <textarea
            name="description"
            value={newAnnouncement.description}
            onChange={handleChange}
            placeholder="Announcement Description"
            className="border p-2 w-full rounded-md"
            rows="4"
          />
          <button type="submit" className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 w-full">Submit Announcement</button>
        </form>
      </div>
    </div>
  );
};

export default Announcements;
