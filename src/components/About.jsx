import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full' >
                <div className=' max-w-[1000px] w-full  grid grid-cols-2 gap-8'  >
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600' >About</p>
                    </div>
                    <div></div>
                    </div>
                    <div className=' max-w-[1000px] w-full  sm:grid grid-cols-2 gap-8 px-4'>
<div className='sm:text-right text-4xl font-bold'>
    <p>Hi, This Is S.M.Nadeem Take A Look Arround</p>
</div>
<div>
    <p> The main objective when working as a developer is to be productive and deliver value to the company. As a developer or a CTO, the aim is to build practical applications that will be 100% successful. To achieve this, specific goals need to be set, which include: Enhancing your networking skills</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;