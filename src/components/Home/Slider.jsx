import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "./Arrow";
import styles from "../../styles/home/slider.module.css";

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

const SliderComponent = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Check if images are loaded
    const img = new Image();
    img.onload = () => setImagesLoaded(true);
    img.onerror = () => setImagesLoaded(false);

    img.src = images[0]?.url; // Test the first image

    // Alternatively, preload all images
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
