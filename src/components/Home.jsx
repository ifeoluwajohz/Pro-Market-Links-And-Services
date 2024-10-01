import React from 'react'
import analysis from '../assets/3d.jpg'

const Home = () => {
  return (
    <>
      <div className="block text-center md:text-left lg:flex p-5 md:p-16 lg:px-24 md:mt-0 mt-5">
        <div className="flex flex-col justify-between pr-2 w-full md:w-4/6 mb-3">
        <div>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold pb-4 ">Bringing companies & customers together, anywhere</h1>
        <p className="text-sm mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aliquid assumenda facere quos voluptatem, error ut nihil omnis, rem obcaecati esse qui veniam quisquam blanditiis!</p>
        </div>
        <form className="mb-0 flex-col md:block">
          <input type="email" className="text-sm px-4  w-full md:text-base py-2 rounded-none focus:rounded-none border-2 border-gray-300 focus:outline-gray-700" placeholder='Email address..'/><br />
          <button className="bg-gray-800 text-white px-6 w-full rounded-none text-center">Subscribe</button>
        <p className="text-sm text-gray-400 text-left">Lorem accusantium hiuhi.</p>

        </form>
        </div>
        <div className="md:w-10/12 w-full  lg:pl-2 pl-0">
          <img  src={analysis} />
        </div>
      </div>

      
    </>

  )
}

export default Home