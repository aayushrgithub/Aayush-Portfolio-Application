import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useRouter } from 'next/router'

function Navbar() {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3')
    const [linkColor, setLinkColor] = useState('black')
    const router = useRouter();

    useEffect(() => {
        if (router.asPath === '/property') {
            setNavBg('transparent')
            setLinkColor('#ecf0f3')
        }
        else {
            setNavBg('#ecf0f3')
            setLinkColor('black')
        }
    }, [router])
    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            }
            else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])
    return (
        <div style={{ backgroundColor: `${navBg}` }} className={shadow ? 'fixed w-full h-20 shadow-xl z-50' : 'fixed w-full h-20 z-50'}>
            <div className='flex justify-between items-center px-2'>
                <img src='https://github.com/aayushrgithub/DEMO/blob/main/logo.PNG?raw=true' width={85} height={50} />
                <div style={{ color: `${linkColor}` }} className='hidden md:flex'>
                    <Link href='/'><div className='ml-10'>Home</div></Link>
                    <Link href='/#about'><div className='ml-10'>About</div></Link>
                    <Link href='/#skills'><div className='ml-10'>Skills</div></Link>
                    <Link href='/#projects'><div className='ml-10'>Projects</div></Link>
                    <Link href='/#contact'><div className='ml-10'>Contacts</div></Link>
                </div>
                <div onClick={handleNav} className=' cursor-pointer md:hidden'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>

            <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] h-screen bg-[#ecf0f3] ease-in duration-500'
                    : 'fixed left-[-100%] top-0 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <img src='https://github.com/aayushrgithub/DEMO/blob/main/logo.PNG?raw=true' width={85} height={30} />
                            <div onClick={handleNav} className='mr-10 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='ml-10 my-4 border-b border-gray-300'>
                            <p className='w-[80%] py-4'>Lets build something Legendary Together</p>
                        </div>

                        <div className='flex flex-col space-y-8'>
                            <Link href='/'><div className='ml-10'>Home</div></Link>
                            <Link href='/#about'><div onClick={() => setNav(false)} className='ml-10'>About</div></Link>
                            <Link href='/#skills'><div onClick={() => setNav(false)} className='ml-10'>Skills</div></Link>
                            <Link href='/#projects'><div onClick={() => setNav(false)} className='ml-10'>Projects</div></Link>
                            <Link href='/#contact'><div onClick={() => setNav(false)} className='ml-10'>Contacts</div></Link>
                        </div>
                        <div className='pt-20 ml-10'><p className='uppercase tracking-widest'>Let's Connect</p>
                            <div className='flex justify-between items-center my-10 w-full sm:w-[80%]'>
                                <Link href='https://www.linkedin.com/in/aayush-rathi-1a7867192/'>  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'><FaLinkedinIn /></div></Link>
                                <Link href='https://github.com/aayushrgithub'>  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'><FaGithub /></div></Link>
                                <Link href='https://support.google.com/mail/answer/8494?hl=en&co=GENIE.Platform%3DDesktop'>  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'><AiOutlineMail /></div></Link>
                                <Link href='https://www.instagram.com/'> <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'><BsFillPersonLinesFill /></div></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar