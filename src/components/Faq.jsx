import React, { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Promaket Links and Services offer?",
      answer: "We specialize in connecting SMEs and production companies with modern trade markets, ensuring smooth registration, strategic product placement, and payment facilitation."
    },
    {
      question: "How can my business get registered with major trade stores?",
      answer: "Promaket Links and Services assists in securing approvals and facilitating the registration process with retail chains such as ShopRite, Justrite, and Jendol."
    },
    {
      question: "How does Promaket Links and Services support financial transactions?",
      answer: "We help businesses manage cheque collections, ensure timely payments, and maintain seamless financial operations with trade partners."
    },
    {
      question: "What marketing strategies do you offer?",
      answer: "We provide in-store promotions, hire brand promoters, and implement targeted marketing strategies to enhance brand visibility and sales."
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
          <div onClick={() => toggleMenu(index)} className="flex items-center justify-between mx-2 lg:mx-60 cursor-pointer">
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
