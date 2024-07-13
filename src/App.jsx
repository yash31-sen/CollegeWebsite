import { useState } from 'react';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonilas';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import Fjmain from './Components/farjicomponent/fjmain';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'

import './App.css'
function App() {
  const [playState, setPlayState] = useState(false);
  
  return (
    <>
    <Navbar/>
    <Hero/>
      <div className="container">
        <div className="section programs-section">
          <Title subtitle={"What We Offer"} title={"Our Programs"} />
          <Programs />
        </div>
        
        <div className="section about-section">
          <About setPlayState={setPlayState} />
        </div>
        
        <div className="section campus-section">
          <Title subtitle={"Gallery"} title={"Campus Photos"} />
          <Campus />
        </div>
        
        <div className="section fjmain-section">
          <Title subtitle={"Know Us"} title={"What Gyan Ganga Is"} />
          <Fjmain />
        </div>
        
        <div className="section testimonials-section">
          <Title subtitle={"Testimonials"} title={"What Students Say"} />
          <Testimonials />
        </div>
        
        <div className="section contact-section">
          <Title subtitle={"Contact Us"} title={"Get In Touch"} />
          <Contact />
        </div>
        
        <Footer />
      </div>
      
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </>
  );
}

export default App;
