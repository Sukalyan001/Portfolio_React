import React from 'react';
import CountUp from 'react-countup';
//intersection observer hook
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section overflow-hidden' id="about" ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20
         lg:gap-y-0 h-screen'>
          <motion.div 
          variants={fadeIn('right',0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false , amount:0.3}}
          className='flex-1  bg-about bg-contain bg-no-repeat
          h-[540px] mix-blend-lighten bg-top  '>
          </motion.div>
          <motion.div
          variants={fadeIn('left',0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false , amount:0.3}}
          className='flex-1'>
            <h2 className='h2 text-accent'>About.me</h2>
            <h3 className='h3 mb-2'>I'm a MERN stack Developer.</h3>
            <p className='mb-4'>With a passion for full-stack development, I am a proficient developer capable of designing and developing modern applications in React and Node.js.
            </p>
            {/* {start} */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-8'>
              <div >
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={20} duration={10} /> :
                    null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Project <br /> Compleated
                </div>
              </div>
              <div >
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={15} duration={7} /> :
                    null}
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Users <br />Support
                </div>
              </div>
              <div >
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={12} duration={6} /> :
                    null}
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br />Clints
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg suk'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>My portfolio</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);
};

export default About;
