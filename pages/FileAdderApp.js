import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

function FileAdderApp() {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <img className='w-full absolute z-1 h-72 object-cover' src='https://cdn.osxdaily.com/wp-content/uploads/2022/11/file-extensions-always-shown-files-ipados-ios.jpg' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10'>
                    <p className='py-2 text-4xl font-bold'>File Adder Web App</p>
                    <p className='text-2xl'>ReactJS | Tailwind | Javascript</p>
                </div>
            </div>


            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p className='text-xl font-bold'>Project</p>
                    <p className='text-2xl font-bold'>Overview</p>
                    <p>This Web Application lets you add the file of the few extensions, so that
                        you can easily use those files when needed in the future. Its a smooth
                        web application which gives you the whole experience of adding the files smoothly
                        without any gitch and delay.
                    </p>
                    <button className='rounded-lg bg-gradient-to-r from-red-400 to-blue-400 text-gray-100 font-bold px-8 py-2 mt-4 mr-8'>Demo</button>
                    <button className='rounded-lg bg-gradient-to-r from-red-400 to-blue-400 text-gray-100 font-bold px-8 py-2 mt-4'>Code</button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 '>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />React</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Tailwind</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Javascript</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />CSS</p>

                        </div>
                    </div>
                </div>
                <Link href='/#projects'><p className='underline cursor-pointer'>Back</p></Link>
            </div>
        </div>
    )
}

export default FileAdderApp