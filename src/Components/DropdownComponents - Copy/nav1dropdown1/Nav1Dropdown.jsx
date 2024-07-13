import React from 'react';
import './Nav1dropdown.css';
// import '../../Navbar.css';
import Logo from '../../../assets/logo.png';

const Nav1Dropdown = () => {
    return (
        <div className="Nav1dropdown-main visible">
            <div className="Nav1dropdown">
                <div className="navbar1dropdown-left">
                    <div className="navbar1dropdown-logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="navbar1dropdown-ul">
                        <ul>
                            <li>Temperary</li>
                            <li>Temperary</li>
                            <li>Temperary</li>
                            <li>Temperary</li>
                            <li>Temperary</li>
                            <li>Temperary</li>
                            <li>Temperary</li>
                        </ul>
                    </div>
                    
                </div>
                <div className="navbar1dropdown-middle">
                    <h2>Temperary details</h2>
                    <ul>
                        <li className='heading-li'>Temperary Heading</li>
                        <li className='content-ui'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel nihil dolores iste tempora officiis temporibus!</li>
                        <li className='heading-li'>Temperary Heading</li>
                        <li className='content-ui'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel nihil dolores iste tempora officiis temporibus!</li>
                        <li className='heading-li'>Temperary Heading</li>
                        <li className='content-ui'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel nihil dolores iste tempora officiis temporibus!</li>
                    </ul>
                </div>
                <div className="navbar1dropdown-right">
                    <h2>Temperary details</h2>
                    <ul>
                        <li className='heading-li'>Temperary Heading</li>
                        <li className='content-ui'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel nihil dolores iste tempora officiis temporibus!</li>
                        <li className='heading-li'>Temperary Heading</li>
                        <li className='content-ui'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel nihil dolores iste tempora officiis temporibus!</li>
                        <li className='heading-li'>Temperary Heading</li>
                        <li className='content-ui'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel nihil dolores iste tempora officiis temporibus!</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Nav1Dropdown;
