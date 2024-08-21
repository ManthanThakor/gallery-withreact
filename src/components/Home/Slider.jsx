import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "./Arrow";
import styles from "../../styles/home/slider.module.css";
import "magic.css/dist/magic.css";

const images = [
  {
    id: 1,
    url: "https://cdn.pixabay.com/photo/2023/03/29/02/59/woman-7884470_1280.jpg",
    title: "Slide 1",
  },
  {
    id: 2,
    url: "https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-the-anime-anime-girl-in-autumn-leaves-wearing-a-long-red-image_2957988.jpg",
    title: "Slide 2",
  },
  {
    id: 3,
    url: "https://cdn.pixabay.com/photo/2023/11/15/13/55/woman-8390124_1280.jpg",
    title: "Slide 3",
  },
];

const CustomDots = ({ dots }) => (
  <div
    style={{
      position: "absolute",
      bottom: "20px",
      width: "100%",
      textAlign: "center",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      {dots.map((dot, index) => (
        <div
          key={index}
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            backgroundColor: dot.props.className.includes("slick-active")
              ? "#000000 "
              : "transparent",
            border: dot.props.className.includes("slick-active")
              ? "2px solid #FF0000"
              : "3px solid #fff",
            transition: "all 0.3s ease",
            cursor: "pointer",
            display: "inline-block",
            transform: dot.props.className.includes("slick-active")
              ? "scale(1.2)"
              : "scale(1)",
            boxShadow: dot.props.className.includes("slick-active")
              ? "0 0 5px rgba(255, 20, 0, 0.8)"
              : "none",
            opacity: dot.props.className.includes("slick-active") ? 1 : 0.7,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#000000 ";
            e.currentTarget.style.transform = "scale(1.5)";
            e.currentTarget.style.boxShadow = "0 0 10px rgba(255, 20, 0, 0.8)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor =
              dot.props.className.includes("slick-active")
                ? "#000000 "
                : "transparent";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = dot.props.className.includes(
              "slick-active"
            )
              ? "#000000 "
              : "none";
          }}
        />
      ))}
    </div>
  </div>
);

const SliderComponent = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    Promise.all(
      images.map(
        (image) =>
          new Promise((resolve, reject) => {
            const img = new Image();
            img.src = image.url;
            img.onload = resolve;
            img.onerror = reject;
          })
      )
    )
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(false));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots) => <CustomDots dots={dots} />,
    customPaging: (i) => (
      <button
        style={{
          display: "none", // Hide the default dots
        }}
      />
    ),
    dotsClass: "slick-dots slick-thumb",
  };

  return (
    <div>
      {imagesLoaded ? (
        <Slider {...settings} className={styles.slider}>
          {images.map((image) => (
            <div key={image.id} className={styles.slide}>
              <img
                src={image.url}
                alt={image.title}
                loading="lazy"
                onError={() => console.error("Image failed to load")}
              />
              <div className={styles.caption}>{image.title}</div>
            </div>
          ))}
        </Slider>
      ) : (
        <p>Loading images...</p>
      )}
    </div>
  );
};

export default SliderComponent;
