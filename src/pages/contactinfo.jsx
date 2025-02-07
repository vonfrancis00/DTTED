import React from "react";

const ContactInfo = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-8 px-4 mt-5">
      <div className="bg-white w-full max-w-2xl p-8 rounded-lg shadow-lg mt-10">
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-6">Contact Information</h1>
        
        <p className="text-lg text-gray-700 mb-4">
          If you have any questions or would like more information, feel free to reach out to us!
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-2">Our Contact Details:</h2>
          <ul className="list-none">
            <li className="text-lg text-gray-700 mb-2">
              <strong>Email:</strong> test@ustp.edu
            </li>
            <li className="text-lg text-gray-700 mb-2">
              <strong>Phone:</strong> +1 234 567 890
            </li>
            <li className="text-lg text-gray-700 mb-2">
              <strong>Address:</strong> Claro M. Recto Avenue, Lapasan 9000 Cagayan de Oro City Philippines
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Send us a message:</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="py-2 px-6 rounded-md bg-yellow-400 text-blue-800 font-semibold hover:bg-yellow-500 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
