import React from 'react';
import {FaFacebook, FaLinkedin, FaGithub} from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi';

const Footer = () => {

    const links = [
        {
            id: 1,
            childs: (
                <>
                <FaFacebook size={30}/>
                </>
            ),
            href: 'https://facebook.com',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            childs: (
                <>
                <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/alex-john-vincent-mataac-55192a22a/',
        },
        {
            id: 3,
            childs: (
                <>
                <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/Mokotokuragi',
        },
        {
            id: 4,
            childs: (
                <>
        <HiOutlineMail size={30}/>
        </>
            ),
            href: 'mailto:alexmataac057@gmail.com',
        },
    ]
  return (
    <div className='text-center bg-gray-800 text-white py-6'>
        <div className='flex flex-col gap-0 space-y-0 px-6'>
            <div className='flex justify-center'>

                {links.map(({id, childs, href}) => (
                    <li key={id} className='leading-normal list-none uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 hover:scale-125 duration-300 transition ease-in-out w-9 m-1'>
                        <a href={href} className=''>
                            {childs}
                        </a>
                    </li>
                )
                )}
            </div>

            <div className='text-center p-4'>
                Copyright @ Vincent - 2023. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer