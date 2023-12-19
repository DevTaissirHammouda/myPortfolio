import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
import Section from '../section/Section'
import Skills from '../skills/Skills'
import {motion} from "framer-motion"
import {zoomIn,navVariants} from "../../../../utils/motion";
const About = () => {
  
  return (
    <div id="about" className='relative overflow-hidden '>
    <Section   title="About Me" >
       
      <div  className="about-content text-left text-slate-50 h-full mx-5 md:mx-0 overflow-hidden ">
        <motion.div variants={navVariants} initial="hidden" whileInView="show" className="absu w-[300px] md:ml-[150px]  gradient-01 bg-slate-400 "/>
        
          <motion.div initial="hidden" whileInView="show" variants={zoomIn(0.5,1)} className="about-text z-[9]  md:m-32">
            <h2 className='text-[40px] font-bold'>Who am I?</h2>
            <p className='text-violet-600 text-[30px] font-bold'>
              I'm Taissir{' '}
             
            </p>
            <p className='text-[23px] my-2 '>
              
              I'm a software engineer focusing on FullStack Dev.
            </p>
           
            <div className="typewriter text-[20px] my-2">
              <p className="typewriter-start">
              
                I love
              </p>
              <div className="text-bold text-emerald-500"><Typewriter
                options={{
                  strings: [
                    'learning new technologies',                
                    'solving complex problems',

                    
                  ],
                  autoStart: true,
                  loop: true,
                }} 
              /></div>
              
              <p>.</p>
            </div>
            <p className='text-[20px]'>
            I am deeply
passionate about utilizing my expertise in
web development to deliver innovative
solutions that solve real-world problems{' '}
             
              </p>
      
              </motion.div>
        <Skills />
      </div>
    </Section></div>
  )
}

export default About
