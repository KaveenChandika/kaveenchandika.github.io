import React from 'react'
import "./intro.css";

function Intro() {
  return (
    <div className='i'>
       <div className='i-left'>
        <div className="i-left-wrapper">
            <h2 className='i-intro'>Hello, My Name is</h2>
            <h2 className='i-name'>Kaveen Gunawardhane</h2>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">Software Engineer</div>
                    <div className="i-title-item">Full Stack Engineer</div>
                    <div className="i-title-item">Dancer</div>
                    <div className="i-title-item">Blogger</div>
                </div>
            </div>
            <div className="i-desc">
              I have confidence to work with my knowledge,skills confident,good
              ideas, attitudes and from the experience I got during the pass 4
              years in Sri Lanka Institue Of Information Technology.
            </div>
        </div>
       </div>
       <div className='i-right'>
        <div className="i-bg"></div>
       </div>
    </div>
  )
}

export default Intro