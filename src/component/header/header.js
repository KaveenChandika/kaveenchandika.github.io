import React, { useEffect, useState } from 'react';
import "./header.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import NavLinks from './NavLinks';

function Header() {
    const [colorChange, setColorchange] = useState(false);
    const [navbarOpen, setNavBarOpen] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <nav className='fixed left-0 right-0 z-10 bg-[#121212] bg-opacity-90' >
            <div className="flex flex-row items-center justify-between mx-auto p-8">
                {/* <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${colorChange ? 'scrolled':''}`}> */}
                <div>
                    <a className='text-white text-2xl md:text-4xl font-semibold' aria-current="page" href="/">LOGO</a>
                </div>
                <div className='mobile-menu block md:hidden'>
                    {!navbarOpen ?
                        <button onClick={() => setNavBarOpen(true)} className='flex items-center px-3 py-2 border-rouded text-slate-200 border-slate-200 hover:text-white hover:border-white' >
                            <Bars3Icon className='h-5 w-5' />
                        </button> :
                        <button onClick={() => setNavBarOpen(false)} className='flex items-center px-3 py-2 border-rouded text-slate-200 border-slate-200 hover:text-white hover:border-white' >
                            <XMarkIcon className='h-5 w-5' />
                        </button>}
                </div>
                <div className="menu hidden md:block md:w-auto">
                    <NavLinks />
                </div>
            </div>
            {navbarOpen ? <NavLinks /> : null}
        </nav>
    )
}

export default Header