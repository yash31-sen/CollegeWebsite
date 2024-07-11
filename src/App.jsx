import { useState } from 'react'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonilas from './Components/Testimonials/Testimonilas'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import Fjmain from './Components/farjicomponent/fjmain'
function App() {
const [playState,setPlayState]=useState(false);

  return (
    <>
    <div className="container">
    <Title subtitle={"What We Offer"} title={"Our Progrmas"}/>
    <Programs/>
    <About setPlayState={setPlayState} />
    <Title subtitle={"Gallery"} title={"Campus Photos"}/>
    <Campus/>
    <Title subtitle={"TESTONOMIALS"} title={"What Student Says'"}/>
    <Fjmain/>
    <Title subtitle={"TESTONOMIALS"} title={"What Student Says'"}/>
    <Testimonilas/>
    <Title subtitle={"Contact Us"} title={"Get In Touch'"}/>
    <Contact/>
    <Footer/>

    </div>
     <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </>
  )
}

export default App
