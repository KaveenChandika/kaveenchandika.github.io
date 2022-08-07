import React from 'react'
import Header from '../header/header';
import "./intro.css";

function Intro() {
  return (
    <div className='i'>
      <Header />
      <div className='i-left'>
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
        <div className="i-left-wrapper">
            <h1 className='i-name'>I'm Kaveen Gunawardhane</h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">Software Engineer</div>
                    <div className="i-title-item">Full Stack Engineer</div>
                    <div className="i-title-item">Blogger</div>
                </div>
            </div>
            <div className="i-desc">
            {/* I'm a (Your City) based (Your Occupation Here). Here will be your description. Use this to describe what you do or whatever you feel best describes yourself to a potential employer. */}
              I'm a Software Engineer currently working at <a href='https://digitalxlabs.com/'>Digitalxlab (pvt) Ltd.</a> 
            </div>
            <hr></hr>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/kaveen-gunawardhane-8a0747166/'><i  className='fa fa-linkedin cursor' ></i></a>
                <i href='https://github.com/KaveenChandika' className='fa fa-github'></i>
                <i className='fa fa-facebook'></i>
                <i className='fa fa-instagram'></i>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Intro