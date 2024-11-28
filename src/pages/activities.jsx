import React, { useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([
    { title: "Annual Tech Conference", description: "A conference on the latest trends in technology.", date: "2024-04-20" },
    { title: "Workshop on Data Science", description: "A hands-on workshop to learn data science basics.", date: "2024-05-10" },
  ]);

  const [newActivity, setNewActivity] = useState({
    title: "",
    description: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewActivity((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setActivities([...activities, newActivity]);
    setNewActivity({ title: "", description: "", date: "" });
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Monthly Activities</h2>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-center mb-4">Upcoming Activities</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-lg">
              <h4 className="font-semibold text-xl">{activity.title}</h4>
              <p className="text-gray-600">{activity.description}</p>
              <p className="text-gray-500 mt-2">{new Date(activity.date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-center mb-4">Add New Activity</h3>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
          <input
            type="text"
            name="title"
            value={newActivity.title}
            onChange={handleChange}
            placeholder="Activity Title"
            className="border p-2 w-full rounded-md"
          />
          <textarea
            name="description"
            value={newActivity.description}
            onChange={handleChange}
            placeholder="Activity Description"
            className="border p-2 w-full rounded-md"
            rows="4"
          />
          <input
            type="date"
            name="date"
            value={newActivity.date}
            onChange={handleChange}
            className="border p-2 w-full rounded-md"
          />
          <button type="submit" className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 w-full">Submit Activity</button>
        </form>
      </div>
    </div>
  );
};

export default Activities;
