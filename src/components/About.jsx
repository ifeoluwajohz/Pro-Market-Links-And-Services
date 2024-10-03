import React from 'react'
import icon from '../assets/react.svg'

import '../css/index.css'

const About = () => {
  return (
    
    <div className=" px-0 md:my-0 my-0 w-full">
      <div className="about-img"></div>
      <div className="max-w-5xl mx-4 md:mx-20 px-4 py-10 text-left">
      
      <div>
        <h2 className="under2 text-3xl font-semibold md:text-3xl text-gray-500 mb-8">Overview</h2>
        <p className="md:text-base text-sm leading-7 font-normal mb-10 tracking-wide">HelpOrg International is a promotional brand that helps small businesses and production companies to gain access to modern trade market such as ShopRite, Justrite, Jendol, etc, and open markets. Through their expertise, they serve as a linking point between production companies, modern trade stores and open markets. HelpOrg International has professional experts who are equipped with the right knowledge and skills to help companies see their trade dreams become realities.</p>
      </div>

      <div>
        <h2 className="under3 text-3xl font-semibold md:text-3xl text-gray-500 mb-8 text-right">Objective</h2>
        <p className="md:text-base text-sm leading-7 font-normal mb-12 tracking-wide text-right">HelpOrg International's main goal is to connect SMEs and production companies with modern trade stores and open markets. Also, this brand is actively concerned with ensuring that there is a seamless flow of money between the stores and the companies. 
        </p>
      </div>

      <div>
        <h2 className="under2 text-3xl font-semibold md:text-3xl text-gray-500 mb-8">Target Audience</h2>
        <p className="md:text-base text-sm leading-7 font-normal mb-12 tracking-wide">HelpOrg International is committed to helping small businesses and production companies gain access into the sales floor of modern trade stores and open markets. Thus, the target audience of this organization are business owners and production companies. 
</p>
      </div>
    </div>
    </div>
  )
}

export default About