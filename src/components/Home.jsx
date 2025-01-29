import React, { useState } from 'react';
import analysis from '../assets/contract.jpg';
import StatisticsGrid from './Number';
import { createClient } from '@supabase/supabase-js';
import '../css/index.css';

// const supabaseUrl = import.meta.env.REACT_APP_SUPABASE_URL;
// const supabaseKey = import.meta.env.SUPABASE_KEY;
// export const supabase = createClient(supabaseUrl, supabaseKey);

const Home = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('subscribers').insert([{ email }]);

    if (error) {
      setError('Subscription failed. Please try again.');
    } else {
      setSuccessMessage('Subscription successful!');
      setError(null);
      setEmail('');
    }
  };

  const ProcessStep = ({ number, title, description, bgColor, textColor, shadowColor }) => (
    <div className={`flex flex-col items-center my-6 md:w-1/3 px-4`}> 
      <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center ${textColor} text-xl font-bold mb-4 shadow-lg ${shadowColor}`}>
        {number}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
      <p className="text-sm text-gray-500 text-center max-w-xs">{description}</p>
    </div>
  );

  return (
    <>
      {/* Hero Section */}
      <div className="main-img text-center md:text-left lg:flex px-6 md:px-16 lg:px-24 py-12 bg-gray-100">
        <div className="flex flex-col justify-center w-full md:w-3/5 mb-6 md:mb-0">
          <p className="text-gray-500 mb-4 text-lg uppercase tracking-wider">Empowering Businesses</p>
          <h1 className="text-gray-800 text-3xl md:text-5xl font-bold leading-tight mb-6">
            Unlock <span className="text-yellow-600">Limitless Opportunities</span> with <br/> Promarket Link & Services
          </h1>
          <p className="text-gray-600 text-md md:text-lg mb-6">
            Connecting SMEs and production companies with modern trade stores and open markets seamlessly.
          </p>
          
        </div>
        <div className="md:w-2/5 w-full">
          <img className="w-full rounded-lg shadow-lg" src={analysis} alt="Analysis" />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="previos text-center px-6 md:px-16 lg:px-24 py-12 bg-gray-800 text-white">
        <h2 className="text-lg uppercase tracking-wide mb-2">Why Choose Us</h2>
        <h1 className="text-2xl md:text-4xl font-bold mb-6">We Deliver Measurable Results</h1>
        <StatisticsGrid />
      </div>

      {/* Key Features Section */}
      <div className="max-w-6xl mx-auto px-5 py-16 text-center">
        <h2 className="text-gray-500 text-xl mb-2">Why Choose Us?</h2>
        <h1 className="text-3xl md:text-4xl font-bold mb-12">Our Core Strengths</h1>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 shadow-md rounded-lg bg-white">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Market Expansion</h3>
            <p className="text-gray-600">We help businesses scale by connecting them with modern trade markets.</p>
          </div>
          <div className="p-6 shadow-md rounded-lg bg-white">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Business Growth</h3>
            <p className="text-gray-600">Enhance your revenue streams through strategic partnerships.</p>
          </div>
          <div className="p-6 shadow-md rounded-lg bg-white">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Expert Guidance</h3>
            <p className="text-gray-600">Our experienced team provides insights and solutions tailored for your success.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 py-16 px-6 md:px-16 lg:px-24 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Stay Connected</h2>
        <p className="text-gray-600 mb-6">Subscribe to get updates on our services and business opportunities.</p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 w-full md:w-2/3 border rounded-md text-sm focus:outline-gray-300"
            placeholder="Enter your email..."
          />
          <button type="submit" className="bg-gray-700 text-white px-6 py-2 rounded-md shadow-md hover:bg-gray-900 transition">Subscribe</button>
        </form>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {successMessage && <p className="text-green-500 text-sm mt-2">{successMessage}</p>}
      </div>
    </>
  );
};

export default Home;

