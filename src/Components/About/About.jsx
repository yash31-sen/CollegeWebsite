import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

function About({ setPlayState }) { // Destructure the prop correctly
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="About" className='about-img' />
        <img src={play_icon} alt="Play" className='play-icon' onClick={() => setPlayState(true)} />
      </div>
      <div className="about-right">
        <h3>About Gyan Ganga</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste maxime ab veniam quas tempora laborum deleniti magnam error maiores, recusandae quis totam temporibus eaque blanditiis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum laboriosam consectetur perspiciatis, error sed, officiis fugiat reiciendis ipsam, nulla aperiam fuga amet molestiae placeat!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente neque assumenda tempora beatae odit excepturi recusandae placeat debitis? Provident sequi fuga optio facilis architecto nostrum.</p>
      </div>
    </div>
  );
}

export default About;
