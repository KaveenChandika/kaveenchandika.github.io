import React from 'react'
import "./skills.css";
import SliderSection from '../slider/slider';

function  Skills() {
  return (
    <div className='skills' id="skills">
        <div className='text-center m-4'>
            <h3>Skills & Technologies</h3>
        </div>
        <div className='p-3'>
            <div className=''>
                <SliderSection />
            </div>
        </div>
    </div>
  )
}

export default Skills