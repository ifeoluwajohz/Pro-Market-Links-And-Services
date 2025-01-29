import React from 'react';
import '../css/index.css';

const Services = () => {
  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">The Problem We Solve</h2>

        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center text-left">
          <img src="https://plus.unsplash.com/premium_photo-1661385890129-8d7ae484b84f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Analysis" className="w-48 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Modern Trade Challenges</h3>
            <p className="text-gray-700 leading-relaxed">
              Many production companies face difficulties in establishing a presence in major trade stores like ShopRite, Jendol, and Justrite. Additionally, limited access to open markets significantly hinders sales and visibility.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="bg-green-50 shadow-sm rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-700 mb-4">Why Choose Us?</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Seamless registration with trade stores.</li>
              <li>✔ Strategic product placement to minimize unpaid debts.</li>
              <li>✔ Assistance with cheque collection and payment processing.</li>
              <li>✔ In-store promotional staff for better visibility.</li>
              <li>✔ Effective strategies to boost sales and brand recognition.</li>
            </ul>
          </div>

          <div className="bg-red-50 shadow-sm rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-red-700 mb-4">Challenges Faced by Companies</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✖ Difficulty securing approvals from retail chains.</li>
              <li>✖ Delayed payments affecting cash flow.</li>
              <li>✖ Ineffective marketing strategies wasting resources.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
