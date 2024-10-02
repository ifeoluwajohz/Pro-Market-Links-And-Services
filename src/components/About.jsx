import React from 'react'
import icon from '../assets/react.svg'

import '../css/index.css'

const About = () => {
  return (
    <div className="text-center px-0 md:my-0 my-0">
        <div className="about-img font-semibold text-center text-white">
            <div className=" w-full block  md:px-16 lg:px-24 mt-0 md:p-8 p-2">
            <h1 className="mb-3 md:text-8xl text-4xl">About us</h1>
            <p className="text-sm font-normal">Lorem, ipsum dficia, quia magnam in modi, ad id repellat, inventore qui aliquam saepe consequatur? Libero ipsa rem facilis architecto saepe fugit minima consectetur omnis ullam aliquid aliquam consequuntur laborum illo enim, molestiae, repellat culpa! Adipisci, rem tempora!</p>
            </div>            
        </div>
        <div className="how md:m-12 lg:m-20 m-2 my-8">
            <h1 className="text-4xl text-left mx-4 font-semibold">Our unique solutions</h1>
            <div className="flex md:flex-nowrap flex-wrap">
                <div className="individual flex flex-col text-left p-4">
                    <img className="w-7" src={icon} alt="" />
                    <p className="font-bold py-2">Hello world</p>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dicta odit eaque hic id ea doloremque quisquam sunt ratione, placeat dolor alias est, eligendi doloribus ducimus recusandae atque corporis dolorum!</p>
                </div>
                <div className="individual flex flex-col text-left p-4">
                    <img className="w-7" src={icon} alt="" />
                    <p className="font-bold py-2">Hello world</p>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dicta odit eaque hic id ea doloremque quisquam sunt ratione, placeat dolor alias est, eligendi doloribus ducimus recusandae atque corporis dolorum!</p>
                </div>
                <div className="individual flex flex-col text-left p-4">
                    <img className="w-7" src={icon} alt="" />
                    <p className="font-bold py-2">Hello world</p>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dicta odit eaque hic id ea doloremque quisquam sunt ratione, placeat dolor alias est, eligendi doloribus ducimus recusandae atque corporis dolorum!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About