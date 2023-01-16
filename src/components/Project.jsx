import React from 'react';
import Card from './Card';


const Project = () => {
  return (
    <div name="project" className='  bg-[#243763] w-full h-screen pb-5'>
        <div className='max-screen-lg mx-auto p-4 flex flex-col justify-start w-full h-full text-[#FFEBB7]'>
            <div className='md:hidden'>
                <p className='text-4xl font-bold border-b-4 border-[#BAD7E9] p-2 inline'>Projects</p>
            </div>
            <div className='flex justify-center mt-10 gap-4 '>
            <Card />
        </div>
        </div>
    </div>
  )
}

export default Project