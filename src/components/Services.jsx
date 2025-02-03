import React from 'react';
import '../css/index.css';

const SectionCard = ({ title, bgColor, textColor, image, children }) => {
  return (
    <div className={`shadow-lg rounded-xl p-8 ${bgColor} ${textColor} flex flex-col md:flex-row items-center gap-6`}>
      {image && (
        <div className="w-full md:w-1/3 flex justify-center">
          <img 
            src={image} 
            alt={title} 
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg" 
          />
        </div>
      )}
      <div className="w-full md:w-2/3">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        {children}
      </div>
    </div>
  );
};

const ChallengesSection = () => (
  <SectionCard 
    title="Challenges in Modern Trade" 
    bgColor="bg-purple-100" 
    textColor="text-gray-900" 
    image="https://media.istockphoto.com/id/2186872091/photo/cashier-scanning-groceries-at-the-supermarket-checkout.webp?a=1&b=1&s=612x612&w=0&k=20&c=AkjIYsH5EZnGVT_9EQUagaal-dGt6UgD6C61GfizpmE="
  >
    <p className="text-gray-700 leading-relaxed">
      Many production companies struggle to gain access to modern trade stores (ShopRite, Jendol, Justrite, etc.) and open markets, affecting sales and visibility.
    </p>
    <ul className="mt-4 space-y-2 text-gray-700">
      <li>✖ Difficulty in securing approvals from retail chains.</li>
      <li>✖ Overdue payments restricting cash flow.</li>
      <li>✖ Ineffective promotional activations yielding poor results.</li>
    </ul>
  </SectionCard>
);

const SolutionsSection = () => (
  <SectionCard 
    title="Our Unique Solutions" 
    bgColor="bg-green-50" 
    textColor="text-green-700" 
    image="https://images.unsplash.com/photo-1611279522012-6c3e2d2c604f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHN1cGVybWFya2V0fGVufDB8fDB8fHww"
  >
    <ul className="space-y-3 text-gray-700">
      <li>✔ Assistance in getting approvals from top retail chains.</li>
      <li>✔ Market research for optimal product placement.</li>
      <li>✔ Faster cheque processing within 60 days.</li>
      <li>✔ Recruitment of promoters and supervisors.</li>
      <li>✔ Sales-boosting strategies for enhanced visibility.</li>
    </ul>
  </SectionCard>
);

const PromotionalActivations = () => (
  <SectionCard 
    title="Promotional Activation Types" 
    bgColor="bg-blue-50" 
    textColor="text-blue-700" 
    image="https://images.unsplash.com/photo-1599663096715-ef083b396543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb21vdGlvbnN8ZW58MHx8MHx8fDA%3D"
  >
    <ul className="space-y-3 text-gray-700">
      <li><strong>Permanent Activation:</strong> Daily promotion of products in stores.</li>
      <li><strong>Part-Time Activation:</strong> Weekend promotions (Friday-Sunday).</li>
      <li><strong>Permanent + Part-Time:</strong> A mix of both strategies for maximum exposure.</li>
    </ul>
  </SectionCard>
);

const OpenMarketSection = () => (
  <SectionCard 
    title="Open Market Strategy" 
    bgColor="bg-red-50" 
    textColor="text-red-700" 
    image="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN0cmF0ZWd5fGVufDB8fDB8fHww"
  >
    <ul className="space-y-3 text-gray-700">
      <li>✔ Direct engagement with distributors and wholesalers.</li>
      <li>✔ Tailored promotional activations for market penetration.</li>
      <li>✔ Communication with market vendors for increased sales.</li>
    </ul>
  </SectionCard>
);

const Services = () => {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">Bridging the Gap in Trade & Market Access</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ChallengesSection />
          <SolutionsSection />
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <PromotionalActivations />
          <OpenMarketSection />
        </div>
      </div>
    </section>
  );
};

export default Services;
