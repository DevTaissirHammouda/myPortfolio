import React from 'react'
import './Section.css'

const Section = (props) => {
  return (
    <section className={props.title.toLowerCase()}>
        <h1 className="section-title ">{props.title}</h1>
        <div className="underline bg-[#3559E0]"></div>
      {props.children}
    </section>
  )
}

export default Section
