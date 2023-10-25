import React from 'react';
//import icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BiChart, BiBriefcase, BiMessageSquareDetail ,} from "react-icons/bi";
import { Link } from "react-scroll";



const Nav = () => {
  return(
     <nav className='fixed bottom-2 lg:bottom-8 w-full overFlow-hidden z-50'>
    <div className='container mx-auto '>
      <div className='w-full bg-black/20 h-[92px] backdrop-blur-2xl 
       rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
        <Link 
         to='home'
        activeClass='active'
        smooth={true}
        spy={true}
        offset={-200}
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center yan'>
          <BiHomeAlt />
        </Link>
        <Link 
        to='about'
        activeClass='active'
        smooth={true}
        spy={true}
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center yan'>
          <BiUser />
        </Link>
        <Link 
         to='services'
        activeClass='active'
        smooth={true}
        spy={true}
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center yan'>
          < BiChart />
        </Link>
        <Link 
        to='work'
        activeClass='active'
        smooth={true}
        spy={true}
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center yan'>
          <BiBriefcase />
        </Link>
        <Link 
        to='contact' 
        activeClass='active'
        smooth={true}
        spy={true}
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center yan'>
          <BiMessageSquareDetail />
        </Link>
      </div>
    </div>
  </nav>
  );
};

export default Nav;
