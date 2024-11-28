import React from 'react';

const DepartmentInfo = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">About the Department</h2>
      <p className="text-lg mb-4">Here you can find information about the department, courses offered, and faculty.</p>

      <section>
        <h3 className="text-2xl font-semibold">Courses Offered</h3>
        <ul className="list-disc pl-5">
          <li>Course 1</li>
          <li>Course 2</li>
          <li>Course 3</li>
        </ul>
      </section>

      <section className="mt-6">
        <h3 className="text-2xl font-semibold">Faculty</h3>
        <ul className="list-disc pl-5">
          <li>Dr. John Doe - Professor</li>
          <li>Dr. Jane Smith - Associate Professor</li>
        </ul>
      </section>
    </div>
  );
};

export default DepartmentInfo;
