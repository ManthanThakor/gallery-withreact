import React, { useState, useEffect, useRef } from "react";
import "../../styles/home/Coolsl.css";

function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const images = [
    "https://images.pond5.com/anime-girl-garden-among-colorful-footage-229627183_iconl.jpeg", // Replace with actual image paths
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4C3Qq_8gVU7soDvwQ7R0wtb9yZjFjtofly_bIeavpPh15Le0fqVEPSplYewYogiJd6kk&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlC9b0SBKtu1jL1nctoWyr77vi-YXPhDEaF5cjy3cqJbejcfsOOiGrw8fCOkovM0xWX3k&usqp=CAU",
  ];

  // Function to handle slide transitions
  const handleSlideTransition = () => {
    // Add class to trigger animation
    sliderRef.current.classList.add("slide-transition");

    setTimeout(() => {
      // Remove class after animation
      sliderRef.current.classList.remove("slide-transition");
    }, 500); // Adjust animation duration (500ms here)
  };

  // Handle next slide
  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % images.length;
    setCurrentSlide(nextIndex);
    handleSlideTransition();
  };

  // Handle previous slide
  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + images.length) % images.length;
    setCurrentSlide(prevIndex);
    handleSlideTransition();
  };

  // Update slide on initial render
  useEffect(() => {
    handleSlideTransition();
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div className="slider-container1">
      <div className="slider1" ref={sliderRef}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="prev1" onClick={prevSlide}>
        Previous
      </button>
      <button className="next1" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
}

export default ImageSlider;
