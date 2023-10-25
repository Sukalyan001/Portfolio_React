import React from 'react';
import { Link } from "react-scroll";
const Header = () => {
  return (
    <header className='py-7'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a className='text-gradient btn-link '>
            Raj Kalyan
          </a>
          <Link
            to='contact'
            //activeClass='active'
             //smooth={true}
             //spy={true}
            >
            <button className='btn btn-sm grd'>

              Work with me</button>

          </Link>



        </div>
      </div>
    </header>);
};

export default Header;
