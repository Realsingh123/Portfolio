import React from 'react'
import "./Education.css"
import school from "../../assets/school (2).png";
import university from "../../assets/university.png";

import ScrollAnimation from "react-animate-on-scroll";




const Education = () => {
  return (
  <>
  <div className='timeline'>
    <ScrollAnimation animateIn="fadeInLeft">
    <div className='container' id='left-container'>
        <img src={university} alt="" />
    <div className='text-box'>
        <h2>Bachelors of computer Application</h2>
        <h3>Maharishi Dayanand University</h3>
        <small>2023-2026</small>
        <span className='left-container-arrow'></span>
        </div>    
    </div>
    </ScrollAnimation>

    <ScrollAnimation animateIn="fadeInRight">
    <div className='container' id='right-container'>
    <img src={school} alt="" />

    <div className='text-box'>
        <h2>XII</h2>
        <h3>I.P convent school</h3>
        <small>2021-2022</small>
        <span className='right-container-arrow'></span>

        </div>    
    </div>
    </ScrollAnimation>

    <ScrollAnimation animateIn="fadeInLeft">

    <div className='container'id='left-container'>
    <img src={school} alt="" />

    <div className='text-box'>
        <h2>X</h2>
        <h3>Saint giri sr.sec. school </h3>
        <small>2019-2020</small>
        <span className='left-container-arrow'></span>

        </div>    
    </div>
    </ScrollAnimation>

  </div>
  </>
  )
}

export default Education
