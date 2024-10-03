import React from 'react'
import icon from '../assets/react.svg'
import analysis from '../assets/contract.jpg'


import '../css/index.css'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className=" px-0 md:my-0 my-0 w-full">
      <div className="about-img"></div>
      <div className="max-w-5xl mx-3 md:mx-16 lg:mx-20 px-3 pt-10 pb-4 text-left">
      
      <div>
        <h2 className="under2 text-3xl font-semibold md:text-3xl text-gray-500 mb-8">The Problem We solve</h2>
        <p className="md:text-base text-sm leading-7 font-normal tracking-wide">Trade Dreamsa Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adte sit sed odio minima inventore ea. Consequatur nisi veritatis facere.</p>
      </div>

      
    </div>
    <div className="text-center px-0 md:my-0 my-0">
        <div className="how md:mx-12 lg:mx-16">
            <div className="flex justify-start items-center md:flex-nowrap flex-wrap gap-4 mx-2">
                <div className="flex flex-col text-left p-4">
                  <img className="w-8 bg-gray-100 p-2" src={icon} alt="" />
                  <p className="font-semibold py-4">Modern Trade </p>
                  <p className="md:text-sm text-xs leading-7 py-2">- Target Audience's Pain points</p>
                  <p className="md:text-sm text-xs leading-7 mb-4">- HelpOrg International’s Unique Solutions (Modern Trade)</p>
                  <Link>
                  <span className="more text-sm text-gray-50 bg-gray-400 hover:text-gray-50 px-4 py-2">See More</span>

                  </Link>
                </div>
                <div className="flex flex-col text-left p-4">
                  <img className="w-8 bg-gray-100 p-2" src={icon} alt="" />
                  <p className="font-semibold py-4 ">Open Market</p>
                  <p className="md:text-sm text-xs leading-7 py-2">- HelpOrg International’s Unique Solutions (Modern Trade)</p>
                  <p className="md:text-sm text-xs leading-7 mb-4">- HelpOrg International’s Unique Solutions (Modern Trade)</p>
                  <Link>
                  <span className="more text-sm text-gray-50 bg-gray-400 hover:text-gray-50 px-4 py-2">See More</span>

                  </Link>

                </div>
                {/* <div className="flex flex-col text-left p-4">
                  <img className="w-8 bg-gray-100 p-2" src={icon} alt="" />
                  <p className="font-semibold py-2 ">Open Market</p>
                  <p className="md:text-sm text-xs leading-7">HelpOrg International’s Unique Solutions (Modern Trade)
                  </p>
                </div> */}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Services