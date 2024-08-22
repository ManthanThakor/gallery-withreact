import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/home/Coolsl.css";

function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    easing: "ease-in-out",
    arrows: false, // Removed arrow controls
    dots: true, // Enable dots
    afterChange: (current) => setCurrentSlide(current), // Update current slide index after each change
    appendDots: (dots) => (
      <div>
        <ul className="custom-dots">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="dot-bar-wrapper">
        <div
          className="dot-bar"
          style={{
            width: `${100 / 6}%`,
            transform: `translateX(${(currentSlide * 100) / 6}%)`, // Update transform based on current slide
          }}
        ></div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    {
      src: "https://images.pond5.com/anime-girl-garden-among-colorful-footage-229627183_iconl.jpeg",
      title: "Anime Girl in Garden",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4C3Qq_8gVU7soDvwQ7R0wtb9yZjFjtofly_bIeavpPh15Le0fqVEPSplYewYogiJd6kk&usqp=CAU",
      title: "Beautiful Landscape",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlC9b0SBKtu1jL1nctoWyr77vi-YXPhDEaF5cjy3cqJbejcfsOOiGrw8fCOkovM0xWX3k&usqp=CAU",
      title: "Scenic View",
    },
    {
      src: "https://images.pond5.com/anime-girl-garden-among-colorful-footage-229627183_iconl.jpeg",
      title: "Anime Girl in Garden",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4C3Qq_8gVU7soDvwQ7R0wtb9yZjFjtofly_bIeavpPh15Le0fqVEPSplYewYogiJd6kk&usqp=CAU",
      title: "Beautiful Landscape",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlC9b0SBKtu1jL1nctoWyr77vi-YXPhDEaF5cjy3cqJbejcfsOOiGrw8fCOkovM0xWX3k&usqp=CAU",
      title: "Scenic View",
    },
  ];

  return (
    <div className="slider-container1">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image.src} alt={`Slide ${index + 1}`} />
            <div className="slide-title">{image.title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
