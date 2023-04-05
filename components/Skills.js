import React from 'react'


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
                                <img src='https://velog.velcdn.com/images/cj98123/post/0536577d-9dbf-4f59-b87f-6e12a80dca21/image.jpeg' width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-2xl font-bold'>HTML</p>
                            </div>
                        </div>
                    </div>

                    <div className='rounded-xl p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img src='https://blog.leonhassan.co.uk/content/images/2019/09/css3.svg' width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-2xl font-bold'>CSS</p>
                            </div>
                        </div>
                    </div>

                    <div className='rounded-xl p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img src='https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png' width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-2xl font-bold'>JAVASCRIPT</p>
                            </div>
                        </div>
                    </div>

                    <div className='rounded-xl p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-2xl font-bold'>REACT</p>
                            </div>
                        </div>
                    </div>

                    <div className='rounded-xl p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png' width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-2xl font-bold'>TAILWIND</p>
                            </div>
                        </div>
                    </div>

                    <div className='rounded-xl p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img src='https://avatars.githubusercontent.com/u/1335026?s=280&v=4' width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-2xl font-bold'>FIREBASE</p>
                            </div>
                        </div>
                    </div>

                    <div className='rounded-xl p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img src='https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png' width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-2xl font-bold'>MONGO</p>
                            </div>
                        </div>
                    </div>

                    <div className='rounded-xl p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png' width='64' height='64' />
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