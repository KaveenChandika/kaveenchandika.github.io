import React, { useEffect, useState } from 'react';
import "./header.css";

function Header() {
    const [colorChange, setColorchange] = useState(false);
    const [activeTab,setActiveTab] = useState('1');

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const changeNavbarColor = () =>{
        if(window.scrollY >=80){
            setColorchange(true);
        }
        else{
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    const toggle = (tabs) => {
        if(activeTab !== tabs) setActiveTab(tabs)
    }
    return (
        <div className='header'>
            <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${colorChange ? 'scrolled':''}`}>
                <div className="container-fluid topnav-centered">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                            <li className="nav-item ">
                                <a className={`nav-link active text-uppercase ${activeTab ===1 ? 'text-success' : 'text-white'} `} aria-current="page" href="#" onClick={() => {toggle('1')}}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link text-uppercase ${activeTab === 2 ? 'text-success' : 'text-white'} `} href="#about" onClick={() => {toggle('2')}} >About</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link text-uppercase ${activeTab === 3 ? 'text-success' : 'text-white'} `} href="#" onClick={() => {toggle('3')}} >Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link text-uppercase ${activeTab === 4 ? 'text-success' : 'text-white'} `} href="#skills" onClick={() => {toggle('4')}} >Skills & Technologies</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link text-uppercase ${activeTab === 5 ? 'text-success' : 'text-white'} `} href="#" onClick={() => {toggle('5')}} >Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header