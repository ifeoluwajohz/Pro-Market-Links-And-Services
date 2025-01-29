import React, { useState } from 'react';
import {Link} from "react-router-dom"
import analysis from '../assets/contract.jpg';
import StatisticsGrid from './Number';
import '../css/index.css';

const Home = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter a valid email.');
      return;
    }
    setSuccessMessage('Subscription successful!');
    setError(null);
    setEmail('');
  };

  return (
    <>
      {/* Hero Section */}
      <div className="main-img text-center md:text-left lg:flex px-6 md:px-16 lg:px-24 py-12 bg-gray-100">
        <div className="flex flex-col justify-center w-full md:w-3/5 mb-6 md:mb-0">
          <p className="text-gray-500 mb-4 text-lg uppercase tracking-wider">Empowering Businesses</p>
          <h1 className="text-gray-800 text-3xl md:text-5xl font-bold leading-tight mb-6">
            Transform <span className="text-blue-600">Your Business</span> with TradeDreams International
          </h1>
          <p className="text-gray-600 text-md md:text-lg mb-6">
            We help SMEs and production companies gain seamless access to modern trade stores and open markets.
          </p>
        </div>
        <div className="md:w-2/5 w-full flex justify-center">
          <img className="w-full rounded-lg shadow-lg" src={analysis} alt="Market Analysis" />
        </div>
      </div>

      {/* About Our Services */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">What We Do</h2>
        <p className="text-lg text-gray-600 mb-6">
          TradeDreams International connects businesses with modern trade markets, ensuring product placement in top retail chains. 
          We help companies secure approvals, manage financial transactions, and develop marketing strategies to boost brand visibility.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Our services include account recruitment, promotional staffing, and seamless cheque processing to ensure smooth trade operations. 
          We work closely with SMEs to enhance their market presence and scale their business efficiently.
        </p>
        <Link to="/about" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition">
          View More
        </Link>
      </div>

      {/* Quick Contact Section */}
      <div className="bg-blue-600 py-8 px-6 md:px-16 lg:px-24 text-center text-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-6">Have questions? Reach out to us and let’s discuss how we can support your business growth.</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <a href="mailto:contact@tradedreams.com" className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">
            ✉ Email Us
          </a>
          <p className="text-lg">
            ☎ +234 812 345 6789
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="text-center px-6 md:px-16 lg:px-24 py-12 bg-gray-900 text-white rounded-lg mt-8">
        <h2 className="text-lg uppercase tracking-wide mb-2">Why Choose Us</h2>
        <h1 className="text-2xl md:text-4xl font-bold mb-6">Your Success, Our Commitment</h1>
        <StatisticsGrid />
      </div>

      {/* Key Features Section */}
      <div className="max-w-6xl mx-auto px-5 py-16 text-center">
        <h2 className="text-gray-500 text-xl mb-2">Our Unique Solutions</h2>
        <h1 className="text-3xl md:text-4xl font-bold mb-12">How We Help Businesses Thrive</h1>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 shadow-md rounded-lg bg-white">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Seamless Market Entry</h3>
            <p className="text-gray-600">We facilitate account recruitment and approvals for businesses in major retail chains.</p>
          </div>
          <div className="p-6 shadow-md rounded-lg bg-white">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Efficient Financial Flow</h3>
            <p className="text-gray-600">We handle cheque collection and payment processing to ensure uninterrupted cash flow.</p>
          </div>
          <div className="p-6 shadow-md rounded-lg bg-white">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Strategic Brand Positioning</h3>
            <p className="text-gray-600">Our marketing strategies enhance product visibility and sales in high-traffic markets.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
