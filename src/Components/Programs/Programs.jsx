import React, {useEffect} from 'react'
import './Programs.css'
import program1 from '../../assets/btech.jpeg'
import program2 from '../../assets/bpharma2.jpeg'
import program3 from '../../assets/mba.jpeg'
import porgram_icon1 from '../../assets/program-icon-1.png'
import porgram_icon2 from '../../assets/program-icon-2.png'
import porgram_icon3 from '../../assets/program-icon-3.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Programs() {

    useEffect(()=>{
        AOS.init({duration:2000})
    })
  return (
    <div className="programs" data-aos="fade-up">
        

        <div className="program"data-aos="fade-down" data-aos-duration='10000'>
            <img src={program1} alt="" />
            <div className="caption">
                <img src={porgram_icon1} alt="" />
                <p>Btech Degree</p>
            </div>
        </div>
        <div className="program" data-aos="fade-up">
            <img src={program2} alt="" />
            <div className="caption">
                <img src={porgram_icon2} alt="" />
                <p>Pharmacy Degree</p>
            </div>
        </div>
        <div className="program" data-aos="fade-down" data-aos-duration='10000'>
            <img src={program3} alt="" />
            <div className="caption">
                <img src={porgram_icon3} alt="" />
                <p>Masters Degree</p>
            </div>
        </div>
    </div>
  )
}

export default Programs