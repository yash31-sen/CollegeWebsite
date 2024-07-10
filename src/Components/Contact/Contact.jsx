import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
function Contact() {
  return (
   <div className="contact">
    <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit adipisci quasi necessitatibus sint quia, pariatur ipsa quaerat voluptates quam, tempora aliquam reprehenderit excepturi distinctio repellat.</p>

        <ul>
            <li> <img src={mail_icon} alt="" />Contatct@ggits.edu</li>
            <li> <img src={phone_icon} alt="" />+91-6581457889</li>
            <li> <img src={location_icon} alt="" />P.O. Tilwara Ghat Bargi Hills Jabalpur</li>
        </ul>
    </div>
    <div className="contact-col">
<form >
<label>Your Name</label>
<input type="text" name="name" placeholder='Enter Your Name' required />
<label >Phone Number</label>
<input type="tel" name="phone" placeholder='Enter Your Phone Number' />
<label >Write Your Message Here</label>
<textarea name="message" rows={6} placeholder='Enter Your Message' required></textarea>
<button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>

</form>

<span></span>
    </div>
   </div>
  )
}

export default Contact;