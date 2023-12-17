import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'
import Section from '../section/Section'
import Skills from '../skills/Skills'
const About = () => {
  
  return (
    <Section  title="About Me">
       
      <div className="about-content  text-left text-slate-50 h-full relative m-32">
        <div className="absu w-[300px] ml-[150px] inset-0 gradient-01  "/>
        
          <div className="about-text z-[9]">
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
      
              </div>
        <Skills />
      </div>
    </Section>
  )
}

export default About
