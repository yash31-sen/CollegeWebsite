import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
    <div className="hero-text">
    <h1>Welcome to Our Campus: A Community of Innovation, Excellence, and Lifelong Learning</h1>
    <p>Discover the magic of our campus and the incredible opportunities it presents for our students.</p>
      <button className="btn">Explore more <img src ={arrow} alt=""/></button>
    </div>
    
    </div>
  )
}

export default Hero
