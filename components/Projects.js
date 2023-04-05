import React from 'react'
import Link from 'next/link'

function Projects() {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-2xl tracking-widest uppercase'>Projects</p>
                <p className='py-4 text-xl'>What I've Built</p>
                <div className='grid md:grid-cols-2 gap-8'>

                    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] z-0'>
                        <img className='w-full rounded-xl group-hover:opacity-10 h-full' objectFit='cover' src='https://i.stack.imgur.com/gNTbn.jpg' />
                        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <p className='text-2xl text-white tracking-wider text-center'>Amazon Clone</p>
                            <p className='pb-4 pt-2 text-center text-white'>React JS</p>
                            <Link href='/property'>
                                <p className='text-center py-2 px-8 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                            </Link>
                        </div>
                    </div>

                    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] z-0'>
                        <img className='rounded-xl group-hover:opacity-10 h-full' objectFit='cover' src='https://www.androidauthority.com/wp-content/uploads/2021/05/Rocket-Player-screenshot-2022.jpg' />
                        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <p className='text-2xl text-white tracking-wider text-center'>Music App Clone</p>
                            <p className='pb-4 pt-2 text-center text-white'>React JS</p>
                            <Link href='/music'>
                                <p className='text-center py-2 px-8 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                            </Link>
                        </div>
                    </div>



                    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                        <img className='rounded-xl group-hover:opacity-10 h-full' src='https://2672686a4cf38e8c2458-2712e00ea34e3076747650c92426bbb5.ssl.cf1.rackcdn.com/2019-04-29-12-53-47.jpeg' />
                        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <p className='text-2xl text-white tracking-wider text-center'>Routine Web App</p>
                            <p className='pb-4 pt-2 text-center text-white'>React JS</p>
                            <Link href='/RoutineAdderApp'>
                                <p className='text-center py-2 px-8 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                            </Link>
                        </div>
                    </div>

                    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                        <img className='rounded-xl group-hover:opacity-10 h-full' src='https://cdn.osxdaily.com/wp-content/uploads/2022/11/file-extensions-always-shown-files-ipados-ios.jpg' />
                        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <p className='text-2xl text-white tracking-wider text-center'>File Adder Web App</p>
                            <p className='pb-4 pt-2 text-center text-white'>React JS</p>
                            <Link href='/FileAdderApp'>
                                <p className='text-center py-2 px-8 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects