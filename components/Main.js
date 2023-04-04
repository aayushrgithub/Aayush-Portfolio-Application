import React from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Link from 'next/link'

function Main() {
    return (
        <div id='home' className='w-full h-screen text-center pt-24 md:pt-72 max-w-[1240px] mx-auto'>
            <p className='uppercase tracking-widest text-gray-600'>Let's build something together</p>
            <h1 className='font-bold text-6xl my-6 text-gray-800'>Hi! I am <span className='text-red-400'>Aayush</span> a Frontend Developer</h1>
            <div className='my-10 text-gray-600'>I am a 2022 passed graduate from the LNM Institute of Information technology, my natural curiosity for computers drove me towards my computer science degree. I love taking a deep dive and figuring out how thing work and build them from scratch. I am passionate about learning new technologies and working on them.</div>
            <div className='flex justify-between my-10 md:my-20 w-full'>
                <Link href='https://www.linkedin.com/in/aayush-rathi-1a7867192/'><div className='rounded-full shadow-lg shadow-gray-400 p-3 md:p-6 cursor-pointer hover:scale-125 ease-in duration-300'><FaLinkedinIn /></div></Link>
                <Link href='https://github.com/aayushrgithub'><div className='rounded-full shadow-lg shadow-gray-400 p-3 md:p-6 cursor-pointer hover:scale-125 ease-in duration-300'><FaGithub /></div></Link>
                <Link href='https://support.google.com/mail/answer/8494?hl=en&co=GENIE.Platform%3DDesktop'>  <div className='rounded-full shadow-lg shadow-gray-400 p-3 md:p-6 cursor-pointer hover:scale-125 ease-in duration-300'><AiOutlineMail /></div></Link>
                <Link href='https://www.instagram.com/'><div className='rounded-full shadow-lg shadow-gray-400 p-3 md:p-6 cursor-pointer hover:scale-125 ease-in duration-300'><BsFillPersonLinesFill /></div></Link>
            </div>
        </div>
    )
}

export default Main