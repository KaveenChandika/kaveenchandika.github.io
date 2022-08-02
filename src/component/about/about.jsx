import React from "react";
import "./about.css";
import DegreeMe from "../../img/degree.jpg";


function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={DegreeMe}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-desc">
        I'm Software Engineer and graduated student, specialized in information technology. I have been creating websites and web application since 2015.I have 3 year industry experience in Software Engineer role. In industry, I have been running some large scale projects. Personally, I have done websites. So, what I learned from this experience, I can support to gain your projects success.
        </p>
        <p className="a-sub">
          I'm soo pleasure to turn back and see the past in my uni and career.Have to go long journey 
        </p>
      </div>
    </div>
  );
}

export default About;
