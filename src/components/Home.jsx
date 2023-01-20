import React from 'react';
import Me from '../img/hero.JPG';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import { Button, Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import {MdDownload} from 'react-icons/md';
import PDF from '../assets/CV - Alex John Vincent Mataac.pdf'

const Home = () => {
  return (
    <div name="home" 
    className='flex p-64 px-1 w-full md:py-48 bg-[#243763]'>
        <div className='max-w-screen-lg mx-auto flex flex-col 
        items-center justify-center px-4 py-5 md:flex-row'>
            <div className='flex flex-col justify-center pb-3 md:justify-start'>
            <h2 className='text-4xl sm:text-4xl font-bold text-[#FFEBB7]' >
                I'm Alex John &#128516;
                <Typewriter
                options={{
                    strings: [
                        "Junior Software <br> Engineer"
                    ],
                    changeDelay: 3,
                    changeDeleteSpeed: 1,
                    autoStart: true,
                    loop:{Infinity}
                }} />
            </h2>
            <p className='text-[#AD8E70] py-5 max-w-md sm:max-w-sm'>
                Working in Cognizant Softvision in Makati City, Philippines
            </p>

            <div>
                <a href={PDF} target="_blank" className='group text-[#243763] w-fit px-5 py-3 my-2 flex items-center rounded-md 
                bg-[#FFEBB7] cursor-pointer mb-10'>
                    Resume
                    <span className='group-hover:rotate-1 duration-300'>
                    <MdDownload size={20} className="ml-1" />
                    </span>
                </a> 
            </div>
        </div>

            <div className='flex justify-center items-center px-7' >
                <img src={Me} alt="my profile" className='flex items-center justify-center shadow-md shadow-[#FF6E31] rounded-full w-full min-w-xs max-w-md'/>
            </div>
        </div>
    </div>
  )
}

export default Home