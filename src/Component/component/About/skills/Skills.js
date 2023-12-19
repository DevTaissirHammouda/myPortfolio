import React, { useRef } from 'react'
import IsVisible from 'react-is-visible'

import { useContainerDimensions } from '../hooks'
import {motion} from "framer-motion"
import {slideIn} from "../../../../utils/motion";
const Skills = () => {
  const skillsWrapper = useRef()
  const { width } = useContainerDimensions(skillsWrapper)
 const skills=([
    {
      "id": 0,
      "skillName": "HTML5",
      "amount": "90"
    },
    { "id": 1, "skillName": "CSS", "amount": "85" }, 
    {
      "id": 2,
      "skillName": "TailwindCSS",
      "amount": "80"
    },  {
      "id": 3,
      "skillName": "JavaScript",
      "amount": "75"
    },
    {  "id": 4,
      "skillName": "React JS",
      "amount": "70"
    },
    
   
    {
      "id": 5,
      "skillName": "PHP",
      "amount": "70"
    },
  
    { "id": 6, "skillName": "Java", "amount": "60" },
    { "id": 7, "skillName": "C", "amount": "60" },
    {
      "id": 8,
      "skillName": "Python",
      "amount": "55"
    }
  ]) ;
  return (
    

      <motion.div variants={slideIn("right","tween",0.5,1)} initial="hidden" whileInView="show" className='md:m-32' style={{ position: 'relative', width: '100%', maxWidth: 600 }} >
        <IsVisible once="false">
          {(isVisibleSkillsWrapper) => (
            <div
              className="skills-wrapper "
              style={
                isVisibleSkillsWrapper
                  ? {
                      transition: '1s opacity ease-in-out',
                      transform: `translateX(0)`,
                      opacity: 1,
                    }
                  : {}
              }
            >
              <h2 className='font-bold text-[25px] '>Skills</h2>
              <ul className="skills mx-5 md:mx-3" ref={skillsWrapper}>
                {skills.map((skills) => {
                  return (
                    <li className="skill-bar-wrapper " key={skills.skillName}>
                     
                      <div
                        className="skill-bar "
                        style={
                          isVisibleSkillsWrapper
                            ? {
                                transition: `${
                                  1 + skills.id / 10
                                }s width ease-in-out`,
                                width: width * (skills.amount / 100),
                              }
                            : {
                                width: 1,
                              }
                        }
                      ></div>
                      <div className="skill-name">{skills.skillName}</div>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </IsVisible>
      </motion.div>
   
  )
}

export default Skills
