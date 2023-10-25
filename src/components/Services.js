import React from 'react';
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


const services = [
  {
    name: 'WEB-Development',
    description: 'I am a skilled full-stack developer with experience in front-end and back-end technologies.',
    link: 'Learn more'
  },
  {
    name: 'Coading-JAVA',
    description: 'My favourite programming languages are JAVA and C++,it helps me tosolve DSA problems! ',
    link: 'Learn more'
  },
  {
    name: 'ART-potrait',
    description: 'Hii! myself Sukalyan dey, I am working as a proffesional artist scince 4-5 years. ',
    link: 'Learn more'
  },
  {
    name: 'Digital-Marketing',
    description: 'Digital marketing, also called online marketing....',
    link: 'Learn more'
  },

]

const Services = () => {
  return <section className='section  ' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row '>
        {/* {text} */}
        <motion.div 
        variants={fadeIn('right',0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false , amount:0.3}}
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat 
        mix-blend-lighten mb-12 lg:mb-0 '>
          <h2 className='h2 text-accent mt-16'>What  I  Do </h2>
          <h3 className='h3 max-w-[455px] mb-16'>I've experience in developing 
          website applications.</h3>
          <a href='https://github.com/Sukalyan001' target='_bank'>
          <button className='btn btn-sm raj'>See my work</button>
          </a>
        </motion.div>
        {/* service */}
        <motion.div 
        variants={fadeIn('left',0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false , amount:0.3}}
        className='flex-1'>
          {/* services list */}
          <div>
          {services.map((service, index) => {
            const {name,description,link} = service;
            return( 
            <div className="border-b bordr-white/20 h-[146px] mb-[38px] flex"
            key={index}>
              <div className='max-w-[476px]'>
                <h4 className='text-[20px] tracking-wider font-primary text-gradient
                font-semibold mt-12 mb-3'> {name}</h4>
                <p className='font-secondary leading-tight'>{description}</p>
              </div>
              <div className='flex flex-col flex-1 items-end'>
                <a 
                href='#'
                className='btn w-9 h-9 mb-[70px] flex justify-center
                items-center yan'>
                  
                  <BsArrowUpRight/>
                </a>
                <a href='#' className='text-gradient text-sm'>{link}</a>
              </div>
            </div>);
          })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Services;
