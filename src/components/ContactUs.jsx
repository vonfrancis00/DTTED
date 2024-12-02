import React from "react";

const ContactUs = () => {
    return (
        <div className="max-w-6xl mx-auto my-0 md:my-32">
        <div className="grid md:grid-cols-2 gap-12 p-4">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
              <p className="text-gray-700">Mabaylan Compound, Carinugan, Balulang</p>
              <p className="text-gray-700">Cagayan De Oro City, 9000</p>
              <p className="text-gray-700">Phone: 09123456789</p>
              <p className="text-gray-700">Email: vonacenas17@gmail.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default ContactUs;
  


