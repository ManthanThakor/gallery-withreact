import React, { useState } from "react";
import "../../styles/home/Slider.css";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const Hslide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(""); // State to track the direction

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
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slide-home">
      <ul className="slider">
        {items.map((item, index) => (
          <li
            key={index}
            className={`item ${
              index === currentIndex ? "active" : "inactive"
            } ${direction}`} // Apply direction-based classes
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            {index === currentIndex && (
              <div className="content">
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
