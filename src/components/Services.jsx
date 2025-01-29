import React from 'react';
import '../css/index.css';

const Services = () => {
  return (
    <section className="w-full bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
          Bridging the Gap in Modern Trade
        </h2>

        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center text-left">
          <img 
            src="https://plus.unsplash.com/premium_photo-1661385890129-8d7ae484b84f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D" 
            alt="Market Analysis" 
            className="w-48 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Challenges in Modern Trade</h3>
            <p className="text-gray-700 leading-relaxed">
              Many SMEs and production companies struggle to secure a presence in major retail chains like ShopRite, Jendol, and Justrite. Additionally, limited market access hinders brand visibility and sales growth.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="bg-green-50 shadow-sm rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-700 mb-4">Our Unique Solutions</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Seamless registration with top retail chains.</li>
              <li>✔ Market research to identify optimal store placements.</li>
              <li>✔ Cheque processing and payment facilitation.</li>
              <li>✔ Recruitment of in-store promoters and supervisors.</li>
              <li>✔ Tailored sales strategies to maximize brand visibility.</li>
            </ul>
          </div>

          <div className="bg-red-50 shadow-sm rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-red-700 mb-4">Key Market Challenges</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✖ Difficulty obtaining retail chain approvals.</li>
              <li>✖ Payment delays affecting cash flow stability.</li>
              <li>✖ Inefficient marketing strategies reducing ROI.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
