import React from 'react';

const Contact = () => {
  return (
    <div name='contact me' 
    className='w-full h-screen bg-[#243763] text-[#FFEBB7] pt-20 pb-20 '>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className=' block mt-12'>
                <p className='md:hidden text-4xl font-bold inline border-b-4 border-[#BAD7E9]'>Contact Me</p>
                <p className='py-6 pb-5'>Get in Touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/032f330c-5769-4f9a-a7ae-ab87e377aea5' method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input 
                    type='text' 
                    name='name' 
                    placeholder='Enter your name' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <input 
                    type='text' 
                    name='email' 
                    placeholder='Enter your email' 
                    className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <textarea 
                    name='message' 
                    placeholder='Enter your message'
                    rows='10' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    ></textarea>

                    <button className='text-[#243763] bg-[#FFEBB7] px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                        Submit
                        </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact