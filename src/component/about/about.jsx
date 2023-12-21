import React from "react";
import "./about.css";
import DegreeMe from "../../img/kc.jpeg";
import Avatar from 'react-avatar';
import { Button } from "reactstrap";
import DeveloperGif from "../../../src/img/Developer.gif"
import DeveloperGif2 from "../../../src/img/Developer2.gif"
import DeveloperGif3 from "../../../src/img/Developer3.gif"

function About() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center pt-28 gap-8 p-3" id="about">
      <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[40%] xl:w-[40%] text-center sm:text-left">
        <h1 className="text-4xl font-semibold px-2 py-2 sm:text-3xl lg:text-4xl">About Me</h1>
        <p className=" text-black pt-4 pb-10 px-2 py-2 w-full">
          I'm Software Engineer and graduated student, specialized in information technology. I have been creating websites and web application since 2015.I have 3 year industry experience in Software Engineer role. In industry, I have been running some large scale projects. Personally, I have done websites. So, what I learned from this experience, I can support to gain your projects success.
          <br />I'm soo pleasure to turn back and see the past in my uni and career.Have to go long journey
        </p>
      </div>
      <div className="flex  " >
        {/* <Avatar
          src={DegreeMe}
          round={true}
          size="200"
          className="sb-avatar"
        /> */}
        <img className="w-full h-full" src={DeveloperGif} alt="Loading"/>
      </div>

    </div>

  );
}

export default About;
