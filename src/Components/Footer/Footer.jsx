import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    
    <div className="footer">
      <p>Designed and Developed by Students of Gyan Ganga</p>
      <p>@ 2024 Gyan Ganga. All rights reserved.</p>

      <ul className="footer-links">
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
      </ul>
      <ul className="social-icons">
        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
      </ul>
    </div>
  );
}
