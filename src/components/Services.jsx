import React from 'react';
import icon from '../assets/react.svg';
import analysis from '../assets/contract.jpg';

import '../css/index.css';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="px-0 md:my-0 my-0 w-full">
      <div className="about-img"></div>
      <div className="max-w-5xl mx-0 md:mx-16 lg:mx-20 px-1 pt-10 text-left">
        <div>
          <h2 className="under2 text-3xl font-semibold md:text-3xl text-gray-500">
            The Problem We Solve
          </h2>
          
        </div>
        <div className="mt-8 relative p-2 bg-white rounded-lg">
            <div className="absolute top-0 left-0 text-7xl font-bold text-gray-900 opacity-20 select-none pointer-events-none">1</div>
            <p className="md:text-base text-sm leading-7 font-normal tracking-wide relative mb-2"><span className="font-medium text-xl underline">Modern Trade</span></p>
            <p className="md:text-base text-sm leading-7 font-normal tracking-wide relative">Overtime, it has been reviewed and estimated that some production companies find it difficult to navigate their ways and push their products into the four walls of modern trade stores ( ShopRite, Jendol, Justrite, etc). Not only that, these production companies are granted limited access in penetrating the Open market, which is an impediment to sales and visibility. </p>
        </div>
      </div>
      <div className="card md:flex flex-row gap-3 items-start md:mx-16 lg:mx-24 mx-1">
        <div className="flex flex-col bg-green-200 rounded-lg shadow-lg py-6 px-4 w-full md:w-4/4 mt-2">
          <div className="text-base md:text-xl font-bold text-green-900 my-4">Among the invaluable reasons this organization is the best for you are: 
          </div>
          <ul className="space-y-4">
            <li className="flex items-start space-x-2"><span className="text-green-500">✔</span><p className="md:text-normal text-sm md:font-normal font-light">We recruit accounts for companies. This means that we bring the connection between a production companye and stores. They will make sure companies are registered with stores all over Nigeria.</p></li>
            <li className="flex items-start space-x-2"><span className="text-green-500">✔</span><p className="md:text-normal text-sm md:font-normal font-light">We recommend appropriate stores to put products in. This means HelpOrg International will constantly study the market to pick out modern trade stores that are capable of accepting and maintaining products, without a backtrack of debts.</p></li>
            <li className="flex items-start space-x-2"><span className="text-green-500">✔</span><p className="md:text-normal text-sm md:font-normal font-light">We help to request and receive cheque from these stores after the sales of every supply. This will be in the range of 60 days max.</p></li>
            <li className="flex items-start space-x-2"><span className="text-green-500">✔</span><p className="md:text-normal text-sm md:font-normal font-light">We help to employ promoters to the stores where the company's products are. If it suits the company, we can hire a supervisor for them also- all on their account.</p></li>
            <li className="flex items-start space-x-2"><span className="text-green-500">✔</span><p className="md:text-normal text-sm md:font-normal font-light">We suggest creative and productive strategies that will boost sales growth, and promote brand's visibility.</p></li>
          </ul>
        </div>

        <div className="flex flex-col bg-red-200 rounded-lg shadow-lg py-6 px-4 w-full md:w-1/2 mt-4 md:mt-8">
          <div className="text-base md:text-xl font-bold text-red-900 my-4">Some pain points of these companies are: 
          </div>
          <ul className="space-y-4">
            <li className="flex items-start space-x-2"><span className="text-red-500 ">x</span><p className="md:text-normal text-sm md:font-normal font-light ">Inability to recruit accounts. A lot of companies struggle and strive to get their products approved in many well-known stores/supermakets. </p></li>
            <li className="flex items-start space-x-2"><span className="text-red-500">x</span><p className="md:text-normal text-sm md:font-normal font-light">Overdue payments/Debts. Some companies find it difficult to process their cheques from modern trade stores, thereby, restricting their flow of income.</p></li><li className="flex items-start space-x-2"><span className="text-red-500">x</span><p className="md:text-normal text-sm md:font-normal font-light">Wrong activations. A lot of companies take the wrong steps in running certain activations. And so, it ends up yielding futile results. </p></li>
          </ul>
        </div>
      </div>


      <div className="max-w-5xl mx-0 md:mx-16 lg:mx-20 px-1 pt-4 text-left">
        <div className="mt-8 relative p-2 bg-white rounded-lg">
            <div className="absolute top-0 left-0 text-7xl font-bold text-gray-900 opacity-20 select-none pointer-events-none">
              2
            </div>
            <p className="md:text-base text-sm leading-7 font-normal tracking-wide relative mb-2">
              <span className="font-medium text-xl underline">Open Market</span>
            </p>
            <p className="md:text-base text-sm leading-7 font-normal tracking-wide relative">Open market means general trade. In this kind of trade, people can access company's products in the market.</p>
        </div>
      </div>
      <div className="card md:flex flex-row gap-3 items-start md:mx-16 lg:mx-24 mx-1">
      
      <div className="flex flex-col bg-red-200 rounded-lg shadow-lg py-6 px-4 w-full md:w-1/2 mt-4 md:mt-8">
        <div className="text-base md:text-xl font-bold text-red-900 my-4">Target Audience's Pain points</div>
          <ul className="space-y-4">
            <li className="flex items-start space-x-2"><span className="text-red-500 ">x</span><p className="md:text-normal text-sm md:font-normal font-light ">Inability to recruit accounts. A lot of companies struggle and strive to get their products approved in many well-known stores/supermakets.</p></li>
            <li className="flex items-start space-x-2"><span className="text-red-500">x</span><p className="md:text-normal text-sm md:font-normal font-light">Thin access to distributors and wholesalers</p></li>
            <li className="flex items-start space-x-2"><span className="text-red-500">x</span><p className="md:text-normal text-sm md:font-normal font-light">Inability to sign the right documents with distributors</p></li>
          </ul>
      </div>
      <div className="flex flex-col bg-green-200 rounded-lg shadow-lg py-6 px-4 w-full md:w-2/4 mt-2">
        <div className="text-base md:text-xl font-bold text-green-900 my-2">HelpOrg International's Unique Solutions</div>
        <p className="mb-2 text-sm font-sans">Physical and personal interaction with customers yield more sales report than the estimated means. Here are some of the ways we can help you alleviate your workloads:</p>
        <ul className="space-y-4">
          <li className="flex items-start space-x-2"><span className="text-green-500">✔</span><p className="md:text-normal text-sm md:font-normal font-light">We can liase with distributors to get brand's product to these stores</p></li>
          <li className="flex items-start space-x-2"><span className="text-green-500">✔</span><p className="md:text-normal text-sm md:font-normal font-light">Communicate directly with market women, hawkers, etc.</p></li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Services;
