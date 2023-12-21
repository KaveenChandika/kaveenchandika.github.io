import React from 'react'
import SliderSection from '../slider/slider';

function  Skills() {
  return (
    <div className='mt-12 bg-orange-400 p-3' id="skills">
        <div className='text-center m-4 text-3xl font-semibold'>
            <h3>Skills & Technologies</h3>
        </div>
        <div className='p-3 justify-center items-center'>
                <SliderSection />
        </div>
    </div>
  )
}

export default Skills