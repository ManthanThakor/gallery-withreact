import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/home/Coolsl.css";

function ImageSlider() {
  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    "https://images.pond5.com/anime-girl-garden-among-colorful-footage-229627183_iconl.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4C3Qq_8gVU7soDvwQ7R0wtb9yZjFjtofly_bIeavpPh15Le0fqVEPSplYewYogiJd6kk&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlC9b0SBKtu1jL1nctoWyr77vi-YXPhDEaF5cjy3cqJbejcfsOOiGrw8fCOkovM0xWX3k&usqp=CAU",
    "https://images.pond5.com/anime-girl-garden-among-colorful-footage-229627183_iconl.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4C3Qq_8gVU7soDvwQ7R0wtb9yZjFjtofly_bIeavpPh15Le0fqVEPSplYewYogiJd6kk&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlC9b0SBKtu1jL1nctoWyr77vi-YXPhDEaF5cjy3cqJbejcfsOOiGrw8fCOkovM0xWX3k&usqp=CAU",
  ];

  return (
    <div className="slider-container1">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
