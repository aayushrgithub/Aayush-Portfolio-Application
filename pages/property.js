import React from 'react'
import AmazonImage from '../public/assets/amazon1.png'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

function property() {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={AmazonImage} />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10'>
          <p className='py-2 text-4xl font-bold'>Amazon Clone</p>
          <p className='text-2xl'>ReactJS | Tailwind | Javascript</p>
        </div>
      </div>


      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p className='text-xl font-bold'>Project</p>
          <p className='text-2xl font-bold'>Overview</p>
          <p> Businesses, in any field, have a lot of competition. They are always on the lookout for a proven way to increase their business revenue. Restaurants, retail shops, vape stores - whatever a business may want to sell, if the business doesn't have an e-commerce website, they are leaving money on the table!


            The world has moved online, a fact that businesses have to accept and put up a website to address. Amazon is a prime example of a website with all the key elements making up a good e-commerce site.


            The e-commerce website of Amazon was initially put together with simple HTML, CSS and JavaScript. But as time progressed and different frameworks came into the limelight, the website got a makeover.


            Through this project, we'll discover a way to build a functional clone of Amazon's e-commerce website, relying on React and Firebase.</p>
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

export default property