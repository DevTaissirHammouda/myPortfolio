import React from 'react'
import './Section.css'

const Section = (props) => {
  return (
    <section className={props.title.toLowerCase()}>
        <h1 className="section-title ">{props.title}</h1>
        <div className="underline"></div>
      {props.children}
    </section>
  )
}

export default Section
