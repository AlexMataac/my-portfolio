import React from 'react';
import MjolnirProject from '../assets/mjolnir.PNG';

const Card = () => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-[#FFEBB7] mt-12">
  <img class="w-6/12 m-auto mt-3" src={MjolnirProject} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-3xl text-[#243763] mb-3">Mjolnir Project</div>
    <p class="text-[#AD8E70] text-base">
      The user's story need to create get by id, can post a member, can update a member, can retrieve all people and also can delete. It cannot retrieve the inactive member.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:scale-110 duration-300">Spring Boot</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:scale-110 duration-300">PostMan</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:scale-110 duration-300">Postgre Sql</span>
  </div>
  <div className='flex justify-center'>
    <a href='https://github.com/Mokotokuragi/Mjolnir-Project' target="_blank">
    <button className='text-white bg-[#2B3467] px-3 py-1 mb-2 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
        Code
    </button>
    </a>
  </div>
</div>
  )
}

export default Card