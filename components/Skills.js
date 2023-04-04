import React from 'react'
import Image from 'next/image'

function Skills() {
    return (
        <div id='skills' className='w-full lg:h-screen pt-96 md:p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase'>Skills</p>
                <p className='py-4 text-4xl font-bold'>What I Can Do</p>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div className='rounded-xl p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/assets/html.png' width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-2xl font-bold'>HTML</p>
                            </div>
                        </div>
                    </div>

                    <div className='rounded-xl p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/assets/css.png' width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-2xl font-bold'>CSS</p>
                            </div>
                        </div>
                    </div>

                    <div className='rounded-xl p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/assets/javascript.png' width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-2xl font-bold'>JAVASCRIPT</p>
                            </div>
                        </div>
                    </div>

                    <div className='rounded-xl p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/assets/react.png' width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-2xl font-bold'>REACT</p>
                            </div>
                        </div>
                    </div>

                    <div className='rounded-xl p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/assets/tailwind.png' width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-2xl font-bold'>TAILWIND</p>
                            </div>
                        </div>
                    </div>

                    <div className='rounded-xl p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/assets/firebase.jpg' width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-2xl font-bold'>FIREBASE</p>
                            </div>
                        </div>
                    </div>

                    <div className='rounded-xl p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/assets/mongo.png' width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-2xl font-bold'>MONGO</p>
                            </div>
                        </div>
                    </div>

                    <div className='rounded-xl p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/assets/node.png' width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-2xl font-bold'>NODEJS</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Skills