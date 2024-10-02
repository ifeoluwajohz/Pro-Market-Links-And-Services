import React,{useState} from 'react'
import analysis from '../assets/contract.jpg'
import StatisticsGrid from './Number'

import '../css/index.css'

const Home = () => {
  const [email, setEmail] = useState('')

  const ProcessStep = ({ number, title, description, bgColor, textColor, shadowColor }) => (
    <div className={`flex flex-col items-center my-4 ${number === 2 ? 'md:mt-16' : ''}`}>
      <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center ${textColor} text-xl font-bold mb-4 shadow-lg ${shadowColor}`}>
        {number}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
      <p className="text-sm text-gray-500 text-center max-w-xs">
        {description}
      </p>
    </div>
  );
  return (
    <>
      <div className="main-img text-center md:text-left lg:flex px-5 md:px-16 lg:px-24 md:mt-10 mt-10">
        <div className="flex flex-col justify-evenly pr-2 w-full md:w-4/6 mb-3">
        <div>
          <p className="text-gray-400 mb-4">ENDLESS BUSINESS POSSIBILITIES</p>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold pb-4">WE'LL HELP YOU <span className="">ACHIEVE YOUR</span> TRADE DREAMS</h1>
        <p className="text-sm mb-6">Lorem ip facere quos voluptatem, error ut nihil omnis, rem obcaecati esse qui veniam quisquam blanditiis!</p>
        </div>
      <form className="flex items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Stay tuned for more"
          className="flex-grow w-16 text-sm px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-gray-200"
        />
        <button 
          type="submit"
          className="px-4 py-1 border-2 border-gray-100 rounded-r-full "
        >
          <img width="28" height="28" src="https://img.icons8.com/hieroglyphs/32/up-right.png" alt="up-right"/>
        </button>
      </form>


        </div>
        <div className="md:w-10/12 w-full  lg:pl-2 pl-0 bg-center">
          <img className=" w-full"  src={analysis} />
        </div>
      </div>
    <div className="previos text-center px-5 md:px-16 lg:px-24 md:mt-16 mt-10">
        <StatisticsGrid />
    </div>
      <div className="max-w-5xl text-center mx-auto px-0 py-16 ">
      <h2 className="text-sm text-gray-500 mb-2">Our Process</h2>
      <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16">Super Powerful Feature</h1>
      
      <div className="relative">
        <div className="absolute top-8 left-4 right-4 border-t-2 border-dashed border-gray-300 z-0 hidden md:block"></div>
        
        <div className="flex flex-col md:flex-row justify-between relative">
          <ProcessStep 
            number={1} 
            title="General Concept" 
            description="Capture and process content preview, create visualization of any store."
            bgColor="bg-gray-800"
            textColor="text-white"
            shadowColor="shadow-gray-300"
          />
          
          <ProcessStep 
            number={2} 
            title="Post Product" 
            description="Capture and process content preview, create visualization of any store."
            bgColor="bg-yellow-600"
            textColor="text-white"
            shadowColor="shadow-yellow-400"
          />
          
          <ProcessStep 
            number={3} 
            title="Design Process" 
            description="Capture and process content preview, create visualization of any store."
            bgColor="bg-gray-800"
            textColor="text-white"
            shadowColor="shadow-gray-300"
          />
        </div>
      </div>
    </div>
    </>

  )
}

export default Home