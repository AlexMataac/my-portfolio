import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImage from '../assets/react.png';
import Java from '../assets/Java.png';
import Springboot from '../assets/springboot.png';
import PostgreSql from '../assets/Postgre sql.png';
import Github from '../assets/github.png';


const Experience = () => {

    const techs =[
        {
            id: 1,
            src: HTML,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: CSS,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: JavaScript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: ReactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: Java,
            title: 'Java',
            style: 'shadow-sky-500'
        },
        {
            id: 6,
            src: Springboot,
            title: 'Spring Boot',
            style: 'shadow-red-500'
        },
        {
            id: 7,
            src: PostgreSql,
            title: 'Postgre SQL',
            style: 'shadow-pink-500'
        },
        {
            id: 8,
            src: Github,
            title: 'Git Hub',
            style: 'shadow-green-500'
        },
    ]
  return (
    <div 
    name='experience' 
    className='bg-[#243763] w-full h-full pb-96 pt-5'>
        <div className='max-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-fit text-[#FFEBB7]'>
            <div className='md:hidden'>
                <p className='text-4xl font-bold border-b-4 border-[#BAD7E9] p-2 inline'>Experience</p>
                <p className='py-6 pb-5 text-[#FFEBB7]'>These are the technologies I've used with</p>
            </div>

            <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    techs.map(({ id, src, title, style }) => (
                        <div key={id} 
                        className={`shadow-md text-white hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt='' className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience