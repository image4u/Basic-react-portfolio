import React, { useState } from 'react';
import logo3 from '../assets/logo3.jpg'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, } from 'react-icons/fa';
// import { HiOutlineMale } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {Link} from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handelClick = () => setNav(!nav)

  return (

    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo3} alt="logo" style={{ width: "100px" }} />
      </div>
      {/* // menu */}
      <ul className='hidden md:flex'>
        <li>
        <Link  to="home"  smooth={true}  duration={500} >
          Home
        </Link>
        </li>
        <li>
        <Link  to="about"  smooth={true}  duration={500} >
          About
        </Link>
        </li>
        <li>
        <Link  to="skills"  smooth={true}  duration={500} >
          Skills
        </Link>
        </li>
        <li>
        <Link  to="work"  smooth={true}  duration={500} >
          Work
        </Link>
        </li>
        <li>
        <Link  to="contact"  smooth={true}  duration={500} >
          Contact
        </Link>
        </li>
      </ul>



      {/* //hamburger */}

      <div onClick={handelClick}
        className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>


      {/* mobile menu */}

      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
        <Link onClick={handelClick}  to="home"  smooth={true}  duration={500} >
          Home
        </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link onClick={handelClick}  to="about"  smooth={true}  duration={500} >
          About
        </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link onClick={handelClick}  to="skills"  smooth={true}  duration={500} >
          Skills
        </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link onClick={handelClick}  to="work"  smooth={true}  duration={500} >
          Work
        </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link onClick={handelClick} to="contact"  smooth={true}  duration={500} >
          Contact
        </Link>
        </li>
      </ul>


      {/* social icon */}
      {/* hidden lg: flex */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul >
          <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 '>
            <a className=' flex justify-between item-center w-full text-grey-300 ' href="http://www.linkedin.com/in/syed-mushahed-nadeem-image4u">
              linkedin <FaLinkedin size={20} />
            </a>
          </li>
          <li className=' w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] '>
            <a className=' flex justify-between item-center w-full text-grey-300 ' href="https://github.com/image4u">
              GitHub <FaGithub size={20} />
            </a>
          </li>
          <li className=' w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] '>
            <a className=' flex justify-between item-center w-full text-grey-300 ' href="/">
              Facebook <FaFacebook size={20} />
            </a>
          </li>
          <li className=' w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565691] '>
            <a className=' flex justify-between item-center w-full text-grey-300 ' href="/">
              Resume <BsFillPersonLinesFill size={20} />
            </a>
          </li>
        </ul>

      </div>

    </div>


  )
}

export default Navbar;