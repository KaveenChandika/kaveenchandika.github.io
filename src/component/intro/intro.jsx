import React from 'react'
import Header from '../header/header';
import "./intro.css";
import heroImg from "../../../src/img/vecteezy_office-employee-png-with-ai-generated_27309403.png"

import { TypeAnimation } from 'react-type-animation';
function Intro() {
  return (
    <div className='bg-[#0e0f31] '>
        <Header />
      <div className='flex flex-col lg:flex-row items-center justify-between pt-10 px-2 sm:px-20'>
        <div class="area" >
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div >
        <div className="flex-grow text-center sm:text-left">
          <div className='flex-grow-0'>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">
              <span className='text-transparent bg-clip-text bg-gradient-to-r  from-purple-800 via-blue-500 to-red-400'>Hello, I'm{" "}<br/></span>
              <TypeAnimation
                sequence={[
                  'Kaveen',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Software Engineer',
                  1000,
                  'Full Stack Engineer',
                  1000,
                  'Frontend Engineer',
                  1000,
                  'Backend Engineer',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
              
            </h1>

          </div>
          <p className='text-[#ADB7BE] text-lg lg:text-xl pt-3'>
            {'<>"First, solve the problem. Then, write the code." - John Johnson </>'}
          </p>
          <div className='overflow-hidden pb-10 sm:pb-0'>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-purple-800 via-blue-500 to-red-400 text-white  mt-3">Download Resume</button>
          </div>
        </div>
        <div className='flex-grow-0'>
          {/* <div className='rounded-full bg-[#181818]' > */}
          <img src={heroImg}
            className="w-[800px] h-full"
          />
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Intro

{/* <div className="i-left-wrapper">
            <h1 className='i-name'>I'm Kaveen Gunawardhane</h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">Software Engineer</div>
                    <div className="i-title-item">Full Stack Engineer</div>
                    <div className="i-title-item">Blogger</div>
                </div>
            </div>
            <div className="i-desc">
              I'm a Software Engineer currently working at <a href='https://digitalxlabs.com/'>Digitalxlab (pvt) Ltd.</a> 
            </div>
            <hr></hr>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/kaveen-gunawardhane-8a0747166/'><i  className='fa fa-linkedin cursor' ></i></a>
                <a href='https://github.com/KaveenChandika' ><i className='fa fa-github'></i></a>
                <i className='fa fa-facebook'></i>
                <i className='fa fa-instagram'></i>
            </div>
        </div> */}