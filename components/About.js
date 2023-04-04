import React from 'react'
import Link from 'next/link'

function About() {
    return (
        <div id='about' className='w-full h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest '>About</p>
                    <p className='py-4'>Who I am</p>
                    <p className='py-2 text-gray-600'>I am not your Normal Developer</p>
                    <p className='py-2 text-gray-600'>I specialize in building mobile responsive front-end UI applications
                        that connect with API’s and other backend technologies. I’m
                        passionate about learning new technologies and understand there is
                        more than one way to accomplish a task. Though I am most proficient
                        in building front-end applications using HTML, CSS, Javascript, and
                        React, I am a quick learner and can pick up new tech stacks as
                        needed. I believe that being a great developer is not using one
                        specific language, but choosing the best tool for the job.</p>
                    <p className='py-2 text-gray-600'>I started web developement in 2022 end, I am a 2022 passed graduate from the LNM Institute of Information technology, my natural curiosity for computers drove me towards my computer science degree. I love taking a deep dive and figuring out how thing work and build them from scratch. I am passionate about learning new technologies and working on them.</p>
                    <Link href='/#projects'> <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p></Link>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <img className='rounded-xl' src='https://media.licdn.com/dms/image/D4D03AQGNscg3rWZ5Pg/profile-displayphoto-shrink_800_800/0/1678361046494?e=2147483647&v=beta&t=GbcH29OwfB4AHJU3VARj64_CaMgY5zzQGRtis02-Qb0' />
                </div>
            </div>
        </div>
    )
}

export default About