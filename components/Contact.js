import React, { useState } from 'react'
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

function Contact() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    //Connect with firebase

    const submitData = async (e) => {
        e.preventDefault();
        const res = await fetch('https://aayush-portfolio-application-default-rtdb.firebaseio.com/userDataRecords.json',
            {
                method: 'POST',
                header: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    phone,
                    email,
                    subject,
                    message,
                })
            }
        )

        if (res) {
            setName('')
            setEmail('')
            setPhone()
            setSubject('')
            setMessage('')
            alert('Data Stored Successfully')
        }
        else {
            alert('Data not stored')
        }
    }

    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase'>Contact</p>
                <p className='py-4 text-2xl font-bold'>Get In Touch</p>
                <div className='grid lg:grid-cols-2 gap-8'>


                    <div className='cols-span-3 lg:cols-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <img className='rounded-xl hover:scale-105 ease-in duration-300' src='https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZHMlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80' />
                            </div>

                            <div>
                                <p className='py-2 text-2xl'>Aayush Rathi</p>
                                <p>Front-End Developer</p>
                                <p className='py-4'>
                                    I am available for freelance or full-time positions. Contact
                                    me and lets talk.
                                </p>
                            </div>
                            <div>
                                <p className='uppercase py-8'>Connect with me</p>
                                <div className='flex items-center justify-between py-4'>
                                    <Link href='https://www.linkedin.com/in/aayush-rathi-1a7867192/'><div className='rounded-full shadow-lg shadow-gray-400 p-3 md:p-6 cursor-pointer hover:scale-125 ease-in duration-300'><FaLinkedinIn /></div></Link>
                                    <Link href='https://github.com/aayushrgithub'><div className='rounded-full shadow-lg shadow-gray-400 p-3 md:p-6 cursor-pointer hover:scale-125 ease-in duration-300'><FaGithub /></div></Link>
                                    <Link href='https://support.google.com/mail/answer/8494?hl=en&co=GENIE.Platform%3DDesktop'><div className='rounded-full shadow-lg shadow-gray-400 p-3 md:p-6 cursor-pointer hover:scale-125 ease-in duration-300'><AiOutlineMail /></div></Link>
                                    <Link href='https://www.instagram.com/'><div className='rounded-full shadow-lg shadow-gray-400 p-3 md:p-6 cursor-pointer hover:scale-125 ease-in duration-300'><BsFillPersonLinesFill /></div></Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='cols-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4 '>
                            <form>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'
                                            placeholder='Name' onChange={(e) => setName(e.target.value)} value={name}
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='number'
                                            placeholder='Phone Number' onChange={(e) => setPhone(e.target.value)} value={phone}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email'
                                        placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'
                                        placeholder='Subject' onChange={(e) => setSubject(e.target.value)} value={subject}
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10'
                                        placeholder='Message' onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                                </div>
                                <button className='rounded-lg bg-gradient-to-r from-red-400 to-blue-400 w-full p-4 text-gray-100 font-bold mt-4' type='submit' onClick={submitData}>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 md:p-4 cursor-pointer hover:scale-125 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact