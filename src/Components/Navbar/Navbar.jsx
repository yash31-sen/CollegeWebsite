import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu.gif'
import { useState } from 'react'

const Navbar = () => {

    const [mobileMenu, setMobileMenu]=useState(false);
    const toggleMenu=()=>{
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
}


  return (
    <nav className='container dark-nav'>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu?'': 'hide-mobile-menu'}>
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li>Contact us</li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
