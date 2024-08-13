import React, { useState, useEffect } from "react";
import "../../styles/home/Slider.css";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const Hslide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("");
  const [animate, setAnimate] = useState(false);

  const items = [
    {
      title: "Lossless Youths",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      imageUrl:
        "https://i.pinimg.com/736x/68/c5/0a/68c50ac30605fdb8ce0836aaeaacd48c.jpg",
    },
    {
      title: "Estrange Bond",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      imageUrl:
        "https://ashisheditz.com/wp-content/uploads/2023/11/instagram-dp-pic-new.jpg",
    },
    {
      title: "The Gate Keeper",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      imageUrl:
        "https://ashisheditz.com/wp-content/uploads/2023/11/attitude-dp-pic-new.jpg",
    },
    {
      title: "Last Trace Of Us",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      imageUrl:
        "https://ashisheditz.com/wp-content/uploads/2023/11/whatsapp-dp-pic-new.jpg",
    },
    {
      title: "Urban Decay",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      imageUrl:
        "https://ashisheditz.com/wp-content/uploads/2023/11/dp-pic-new-style.jpg",
    },
    {
      title: "The Migration",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      imageUrl:
        "https://ashisheditz.com/wp-content/uploads/2023/11/nice-dp-pic-new.jpg",
    },
  ];

  const handleNext = () => {
    setDirection("right");
    setAnimate(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection("left");
    setAnimate(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 1000); // Match with animation duration
      return () => clearTimeout(timer);
    }
  }, [animate]);

  return (
    <div className="slide-home-two">
      <ul className="slider">
        {items.map((item, index) => (
          <li
            key={index}
            className={`item ${
              index === currentIndex ? "active" : "inactive"
            } ${direction}`}
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            {index === currentIndex && (
              <div className={`content ${animate ? "animate" : ""}`}>
                <h2 className="title">{item.title}</h2>
                <p className="description">{item.description}</p>
                <button>Read More</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="main-sec-slid">
        <IoArrowBackOutline className="btn prev" onClick={handlePrev} />
        <IoArrowForwardOutline className="btn next" onClick={handleNext} />
      </div>
    </div>
  );
};

export default Hslide;
