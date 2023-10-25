import React from 'react';
import Image from "../assets/Images.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Resume from "../assets/RESUME.pdf";

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left ml-8'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px] mb-5  '>
              SUKAL<span className='text-gradient mb-5 '>YAN</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] 
              font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a </span>
              <TypeAnimation
                sequence={[
                  'Developer', 2000,
                  "Designer", 2000,
                  "Artist", 2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            < motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Hii! I'm Sukalyan Dey.I'm a MERN stack developer,my favourite language is JAVA.
               I has been working art filed science 5 year.
            </motion.p>
            < motion.div
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6  items-center mb-12
              mx-auto lg:mx-0'>
              <a href={Resume} download>
                <button className='btn btn-lg raj'>My CV</button>
              </a >
              <a href='#' className='text-gradient btn-link '>My portfolio</a>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 mb-24'>
              <a href='https://github.com/Sukalyan001' target='_bank'>
                <FaGithub className='mos' />
              </a>
              <a href='https://www.linkedin.com/in/sukalyan-dey-60468b224' target='_bank'>
                <FaLinkedin className='los' />
              </a>
              <a href='https://www.instagram.com/raj_kalyan0079' target='_bank'>
                <FaInstagram className='bos' />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className='hidden lg:flex max-w-[320px] lg:max-w-[482px]  '>
            <img className='mr-24 kal' src={Image} alt="" />
          </motion.div>
        </div>
      </div>

    </section >
  );
};

export default Banner;
