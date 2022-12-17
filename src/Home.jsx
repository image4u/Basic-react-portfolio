import { Container } from 'postcss';
import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* {Container} */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600' >Hi, My Name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6ff]' >Syed Mushahed Nadeem</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]' > I Am FrontEnd Developer</h2>
        <p className='text-[#8892b0] px-8 max-w-[700px]' >I Am A Front-End Developer, i build the front-end portion of websites and web applications that is, the part that users actually see and interact with. A front-end developer creates websites and applications using web languages such as HTML, CSS, JavaScript and React.js that allow users to access and interact with the site or app.</p>
        <div>
        <button className=' text-white group border-2 px-6 py-3 my-2 flex item-center hover:bg-pink-600
         hover:border-pink-600' >view work 
         <span className='group-hover:rotate-90 duration-300' >
          <HiArrowNarrowRight className='ml-3' /></span>
          </button>
        </div>

    </div>
    </div >
  )
}

export default Home;