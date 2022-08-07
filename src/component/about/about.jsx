import React from "react";
import "./about.css";
import DegreeMe from "../../img/kc.jpeg";
import Avatar from 'react-avatar';
import { Button } from "reactstrap";

function About() {
  return (
    <div className="about" id="about">
         <div className="about-left me-5 " >
          <Avatar 
            src={DegreeMe}
            round={true}
            size="200"
            className="sb-avatar"
          />
        </div>
        <div className="about-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-desc">
          I'm Software Engineer and graduated student, specialized in information technology. I have been creating websites and web application since 2015.I have 3 year industry experience in Software Engineer role. In industry, I have been running some large scale projects. Personally, I have done websites. So, what I learned from this experience, I can support to gain your projects success.
          </p>
          <p className="a-sub">
            I'm soo pleasure to turn back and see the past in my uni and career.Have to go long journey 
          </p>
          <div className="resume-btn">
            <Button className="btn btn-secondary">Download Resume</Button>
          </div>
        </div>
       
    </div>

  );
}

export default About;
