import React from "react";
import "../css/index.css";

const About = () => {
  return (
    <div className="w-full bg-gray-900 text-gray-300">
      {/* Header Image Section */}
      <div className="about-img bg-cover bg-center h-60 sm:h-80 md:h-96 relative">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wider">
            About Us
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-12 space-y-16">
        
        {/* Overview */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl font-semibold text-gray-400 mb-4 border-l-4 border-yellow-500 pl-4">
              Overview
            </h2>
            <p className="text-gray-400 text-lg leading-7">
              HelpOrg International is a promotional brand that helps small 
              businesses and production companies gain access to modern trade 
              markets such as ShopRite, Justrite, Jendol, and more.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://source.unsplash.com/400x300/?industry,factory"
              alt="Industry"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Objective */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl font-semibold text-gray-400 mb-4 border-r-4 border-yellow-500 pr-4 text-right">
              Objective
            </h2>
            <p className="text-gray-400 text-lg leading-7 text-right">
              HelpOrg International's primary mission is to connect SMEs 
              and production companies with modern trade stores and open 
              markets.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://source.unsplash.com/400x300/?warehouse,business"
              alt="Trade"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Target Audience */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl font-semibold text-gray-400 mb-4 border-l-4 border-yellow-500 pl-4">
              Target Audience
            </h2>
            <p className="text-gray-400 text-lg leading-7">
              HelpOrg International is dedicated to empowering small 
              businesses and production companies by ensuring their products 
              reach modern trade stores and open markets.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://source.unsplash.com/400x300/?business,teamwork"
              alt="Business"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-500 mb-6">Get in Touch</h2>
          <p className="text-gray-400 text-lg mb-8">
            Have any questions? Fill out the form below and we’ll get back to you.
          </p>

          {/* Contact Form */}
          <form className="max-w-3xl mx-auto bg-gray-700 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded bg-gray-600 text-white placeholder-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded bg-gray-600 text-white placeholder-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded bg-gray-600 text-white placeholder-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-600 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-around text-gray-400 text-lg">
            <div className="mb-6 md:mb-0">
              <p>📍 123 Industrial Zone, Lagos, Nigeria</p>
            </div>
            <div className="mb-6 md:mb-0">
              <p>📧 contact@helporg.com</p>
            </div>
            <div>
              <p>📞 +234 812 345 6789</p>
            </div>
          </div>

          {/* Google Map Embed (Optional) */}
          <div className="mt-12">
            <iframe
              className="w-full h-64 rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.511021124177!2d3.379205014705297!3d6.524379295262274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c6b1e88f4df%3A0xe03d767f4de59527!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1648626143004!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
