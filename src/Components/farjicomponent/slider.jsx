import React, { useState } from "react";
import "./slider.css";

const slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      row1: ["130 Studentes Placed", "9 Faculties", "14 Chancelor Awards"],
      row2: ["13 BTech Courses", "15+ CSE Specialization", "300+ Programs"],
    },
    {
      row1: ["200 area campus", "15 colleges", "20 international courses"],
      row2: ["20 btech courses", "30 bca courses", "500+ programs"],
    },
    {
      row1: ["300 area campus", "25 colleges", "30 international courses"],
      row2: ["30 btech courses", "40 bca courses", "700+ programs"],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="fjmain-slider">
      <div className="fjmain-slide">
        {slides[currentSlide].row1.map((item, index) => {
          const [number, ...text] = item.split(" ");
          return (
            <div key={index} className="fjmain-cell">
              <span className="fjmain-number">{number}</span>
              <span className="fjmain-text">{text.join(" ")}</span>
            </div>
          );
        })}
        {slides[currentSlide].row2.map((item, index) => {
          const [number, ...text] = item.split(" ");
          return (
            <div key={index} className="fjmain-cell">
              <span className="fjmain-number">{number}</span>
              <span className="fjmain-text">{text.join(" ")}</span>
            </div>
          );
        })}
      </div>
      <div className="fjmain-slider-buttons">
        <button className="fjmain-slider-button" onClick={prevSlide}>
        Prev
        </button>
        <button className="fjmain-slider-button" onClick={nextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default slider;
