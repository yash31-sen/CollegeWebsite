import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Products from './pages/Products.jsx';
import ContactUs from './pages/ContactUs.jsx';
import SignUp from './pages/SignUp.jsx';
import Marketing from './pages/Marketing.jsx';
import Consulting from './pages/Consulting.jsx';

function Temp() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path='/' exact element={<Home />} /> */}
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/marketing' element={<Marketing />} />
        <Route path='/consulting' element={<Consulting />} />
      </Routes>
    </Router>
  );
}

export default Temp;
