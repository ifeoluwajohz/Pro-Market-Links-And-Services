import React, { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are TDA major services?",
      answer: "Our major services include digital marketing, SEO, content creation, and social media management."
    },
    {
      question: "How can I contact the agency?",
      answer: "You can contact us via email at contact@agency.com or call us at (123) 456-7890."
    },
    {
      question: "What is the agency's pricing model?",
      answer: "We offer flexible pricing models including hourly rates, project-based pricing, and retainer agreements."
    }
  ];

  const toggleMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="text-center p-4 md:p-8">
      <h1 className="text-lg md:text-2xl font-semibold mb-6 md:mb-10">Frequently Asked Questions (FAQs)</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="text-xl faq my-4">
          <div onClick={() => toggleMenu(index)} className="flex items-center justify-between mx-2 lg:mx-60">
            <p className="text-left text-sm md:text-lg font-medium">{faq.question}</p>
            <button className="text-gray-400 focus:border-none focus:outline-none">
              <svg className={`h-6 w-6 transition-transform duration-300 ${openIndex === index ? 'transform rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={openIndex === index ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}></path>
              </svg>
            </button>
          </div>
          {openIndex === index && (
            <div className="mt-1 text-gray-500 text-lg text-left flex-wrap px-2 lg:px-60">
              <p className="text-xs md:text-base">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
