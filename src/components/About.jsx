import React from "react";
import "../css/index.css";

const About = () => {
  return (
    <section className="w-full bg-gray-900 text-gray-300">
      {/* Header Section */}
      <div className="about-img bg-cover bg-center h-60 sm:h-80 md:h-96 relative">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wider uppercase">
            About Promaket Links and Services
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-12 space-y-16">
        {/* Overview */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl font-semibold text-gray-400 mb-4 border-l-4 border-yellow-500 pl-4">
              Our Mission
            </h2>
            <p className="text-gray-400 text-lg leading-7">
            Promaket Links and Services is committed to helping SMEs and production companies gain seamless access to open market and modern trade markets such as ShopRite, Justrite, and Jendol, ensuring efficient market penetration and financial fluidity.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1663011185140-4b08ca98c94c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VwZXJzdG9yZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Industry"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Core Objectives */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-2">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl font-semibold text-gray-400 mb-4 border-r-4 border-yellow-500 pr-4 text-right">
              Core Objectives
            </h2>
            <p className="text-gray-400 text-lg leading-7 text-right">
            Promaket Links and Services main goal is to connect SMEs and production companies with modern trade stores and open markets. Also, this brand is actively concerned with ensuring that there is a seamless exchange of services and money between the stores and the companies. 
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://media.istockphoto.com/id/2157998608/photo/multiracial-warehouse-workers-engaged-in-daily-operations.webp?a=1&b=1&s=612x612&w=0&k=20&c=r-WmnAVHCdIJk6t0jQO9yDrvWWY64vEGm_2XnC7mkc8="
              alt="Trade"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Target Audience */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl font-semibold text-gray-400 mb-4 border-l-4 border-yellow-500 pl-4">
              Who We Serve
            </h2>
            <p className="text-gray-400 text-lg leading-7">
            We are committed to helping small businesses and production companies gain access into the sales floor of modern trade stores and open markets.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1661381007965-b21e0fb0681b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN1cGVybWFya2V0fGVufDB8fDB8fHww"
              alt="Business"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Quick Contact Section */}
      <div className="bg-yellow-50 py-8 px-2 md:px-16 lg:px-24 text-center text-gray-600 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-6">
          Have questions? Reach out to us and let’s discuss how we can support your business growth.
        </p>
        <div className="flex flex-row justify-center gap-5 items-center">
          {/* Gmail */}
          <a href="mailto:promaketlinksandservices@gmail.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/?size=100&id=qyRpAggnV0zH&format=png&color=000000"
              className="w-10"
              alt="Promaket Links and Services Gmail"
            />
          </a>
          {/* Facebook */}
          <a href="https://www.facebook.com/profile.php?id=61568311595650&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/?size=100&id=118467&format=png&color=000000"
              className="w-10"
              alt="Promaket Links and Services Facebook"
            />
          </a>
          {/* WhatsApp */}
          <a href="https://wa.me/+2349069932640" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/?size=100&id=uZWiLUyryScN&format=png&color=000000"
              className="w-10"
              alt="Promaket Links and Services WhatsApp"
            />
          </a>
          {/* TikTok */}
          <a href="https://www.tiktok.com/@promaket.links.and?_t=ZM-8tdBVxgUcej&_r=1" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/?size=100&id=118640&format=png&color=000000"
              className="w-10"
              alt="Promaket Links and Services TikTok"
            />
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/proma.ket" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=000000"
              className="w-10"
              alt="Promaket Links and Services Instagram"
            />
          </a>
          {/* Twitter */}
          <a href="https://twitter.com/promaket_" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/?size=100&id=ClbD5JTFM7FA&format=png&color=000000"
              className="w-10"
              alt="Promaket Links and Services Twitter"
            />
          </a>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="bg-gray-800 py-16 px-6 text-center text-gray-300">
        <h2 className="text-3xl font-bold text-yellow-500 mb-6">Contact Us</h2>
        <p className="text-lg mb-6">Have any questions? Reach out to us, and we’ll be happy to assist you.</p>
        <form className="max-w-3xl mx-auto bg-gray-700 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-600 text-white placeholder-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-600 text-white placeholder-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded bg-gray-600 text-white placeholder-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"></textarea>
          </div>
          <button type="submit" className="w-full py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-600 transition">Send Message</button>
        </form>
      </div>

      
    </section>
  );
};

export default About;
