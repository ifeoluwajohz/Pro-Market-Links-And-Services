import React from 'react'
import icon from '../assets/react.svg'

import '../css/index.css'

const ProcessStep = ({ number, title, description, bgColor, textColor, shadowColor }) => (
    <div className={`flex flex-col items-center m-4 ${number === 2 ? 'md:mt-16' : ''}`}>
      <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center ${textColor} text-xl font-bold mb-4 shadow-lg ${shadowColor}`}>
        {number}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
      <p className="text-sm text-gray-500 text-center max-w-xs">
        {description}
      </p>
    </div>
  );

const Services = () => {
  return (
    <div className="text-center px-0 md:my-0 my-0">
      <div className="max-w-5xl mx-auto px-4 py-16 ">
      <h2 className="text-sm text-center text-gray-500 mb-2">Our Process</h2>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-16">Super Powerful Feature</h1>
      
      <div className="relative">
        {/* Dotted line */}
        <div className="absolute top-8 left-4 right-4 border-t-2 border-dashed border-gray-300 z-0 hidden md:block"></div>
        
        {/* Process steps */}
        <div className="flex flex-col md:flex-row justify-between relative z-10">
          <ProcessStep 
            number={1} 
            title="General Concept" 
            description="Capture and process content preview, create visualization of any store."
            bgColor="bg-blue-600"
            textColor="text-white"
            shadowColor="shadow-blue-300"
          />
          
          <ProcessStep 
            number={2} 
            title="Post Product" 
            description="Capture and process content preview, create visualization of any store."
            bgColor="bg-yellow-400"
            textColor="text-white"
            shadowColor="shadow-yellow-200"
          />
          
          <ProcessStep 
            number={3} 
            title="Design Process" 
            description="Capture and process content preview, create visualization of any store."
            bgColor="bg-blue-600"
            textColor="text-white"
            shadowColor="shadow-blue-300"
          />
        </div>
      </div>
    </div>
        {/* <div className="how md:m-12 lg:m-20 m-2 my-8">
            <h1 className="text-4xl text-left mx-4 font-semibold">Our unique solutions</h1>
            <div className="flex md:flex-nowrap flex-wrap">
                <div className="individual flex flex-col text-left p-4">
                    <img className="w-7" src={icon} alt="" />
                    <p className="font-bold py-2">Hello world</p>
                    <p className="text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dicta odit eaque hic id ea doloremque quisquam sunt ratione, placeat dolor alias est, eligendi doloribus ducimus recusandae atque corporis dolorum!</p>
                </div>
                <div className="individual flex flex-col text-left p-4">
                    <img className="w-7" src={icon} alt="" />
                    <p className="font-bold py-2">Hello world</p>
                    <p className="text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dicta odit eaque hic id ea doloremque quisquam sunt ratione, placeat dolor alias est, eligendi doloribus ducimus recusandae atque corporis dolorum!</p>
                </div>
                <div className="individual flex flex-col text-left p-4">
                    <img className="w-7" src={icon} alt="" />
                    <p className="font-bold py-2">Hello world</p>
                    <p className="text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dicta odit eaque hic id ea doloremque quisquam sunt ratione, placeat dolor alias est, eligendi doloribus ducimus recusandae atque corporis dolorum!</p>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Services