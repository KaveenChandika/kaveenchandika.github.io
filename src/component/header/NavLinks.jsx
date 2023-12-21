import React, { useState } from 'react'

const NavLinks = () => {
    const [activeTab, setActiveTab] = useState('1');
    const toggle = (tabs) => {
        if (activeTab !== tabs) setActiveTab(tabs)
    }
    return (
        <ul className='flex flex-col sm:flex-row p-4 sm:p-0 md:p-0 sm:space-x-8 md:space-x-8'>
            <li>
                <a className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl" aria-current="page" href="#" onClick={() => { toggle('1') }}>Home</a>
            </li>
            <li>
                <a className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl" href="#about" onClick={() => { toggle('2') }} >About</a>
            </li>
            <li>
                <a className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl" href="#" onClick={() => { toggle('3') }} >Experience</a>
            </li>
            <li >
                <a className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl" href="#skills" onClick={() => { toggle('4') }} >Skills & Technologies</a>
            </li>
            <li>
                <a className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl" href="#" onClick={() => { toggle('5') }} >Contact Us</a>
            </li>
        </ul>
    )
}

export default NavLinks