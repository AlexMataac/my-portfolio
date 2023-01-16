import React from 'react';
import {FaFacebook, FaLinkedin, FaGithub} from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            childs: (
                <>
        Facebook 
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
        LinkedIn 
        <FaLinkedin size={30}/>
        </>
            ),
            href: 'https://www.linkedin.com/in/alex-john-vincent-mataac-55192a22a/',
        },
        {
            id: 3,
            childs: (
                <>
        GitHub 
        <FaGithub size={30}/>
        </>
            ),
            href: 'https://github.com/Mokotokuragi/React-Tailwind-Portfolio',
        },
        {
            id: 4,
            childs: (
                <>
        Gmail 
        <HiOutlineMail size={30}/>
        </>
            ),
            href: 'mailto:alexmataac057@gmail.com',
        },
        {
            id: 5,
            childs: (
                <>
        Resume 
        <BsFillPersonLinesFill size={30}/>
        </>
            ),
            href: '/CV - Alex John Vincent Mataac.pdf',
            style: 'rounded-br-md',
            download: true,
        }
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

            {links.map(({id, childs, href, style, download}) => (
                <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' + ' ' + style}>
                <a href={href} className='flex justify-between items-center w-full text-white'
                download={download}
                target='_blank'
                rel='noreferrer'> 
                {childs}
            </a>
            </li> 
            ))}
        
        </ul> 
    </div>
  )
}

export default SocialLinks