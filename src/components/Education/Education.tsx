import React from 'react'
import "./Education.css"
import school from "../../assets/school (2).png";
import university from "../../assets/university.png";

const Education = () => {
  return (
    <>
      <div className="timeline">
        {/* Bachelor's */}
        <div className="container" id="left-container">
          <img src={university} alt="" />
          <div className="text-box">
            <h2>Bachelors of Computer Application</h2>
            <h3>Maharishi Dayanand University</h3>
            <small>2023-2026</small>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        {/* XII */}
        <div className="container" id="right-container">
          <img src={school} alt="" />
          <div className="text-box">
            <h2>XII</h2>
            <h3>I.P Convent School</h3>
            <small>2021-2022</small>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        {/* X */}
        <div className="container" id="left-container">
          <img src={school} alt="" />
          <div className="text-box">
            <h2>X</h2>
            <h3>Saint Giri Sr. Sec. School</h3>
            <small>2019-2020</small>
            <span className="left-container-arrow"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
