import React from "react";
import { FaEnvelope, FaPhoneAlt, FaFacebook } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-6">
      <div className="bg-white w-full max-w-3xl p-10 rounded-lg shadow-2xl mt-5">
        <h1 className="text-5xl font-extrabold text-center text-blue-900 mb-8 uppercase tracking-wide">
          Contact Us
        </h1>

        <p className="text-lg text-gray-700 text-center mb-6">
          Have any questions? Feel free to reach out to us!
        </p>

        {/* Contact Details Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Get in Touch</h2>
          <ul className="space-y-4">
            <li className="text-lg text-gray-700 flex items-center">
              <FaEnvelope className="text-blue-600 mr-3" /> 
              <strong>Email:</strong>{" "}
              <a
                href="mailto:dtted@ustp.edu.ph"
                className="text-blue-600 hover:underline ml-3"
              >
                dtted@ustp.edu.ph
              </a>
            </li>
            <li className="text-lg text-gray-700 flex items-center">
              <FaPhoneAlt className="text-blue-600 mr-3" />
              <strong className="mr-2">Telephone:</strong> 000-1194
            </li>
            <li className="text-lg text-gray-700 flex items-center">
              <FaFacebook className="text-blue-600 mr-3" />
              <strong>Facebook Page: </strong>
              <a
                href="https://web.facebook.com/profile.php?id=100072248011408"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline ml-3"
              >
                 USTP Department of Technical and Technology Education
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
