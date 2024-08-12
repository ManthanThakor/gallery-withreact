// src/components/ImageCard.js
import React from "react";
import styles from "../styles/imageCard.module.css"; // Importing CSS Module
import { VscEyeClosed } from "react-icons/vsc";

const ImageCard = ({ image, blurEnabled }) => {
  return (
    <div className={styles.card}>
      <img
        src={image.url}
        alt={image.title}
        className={`${styles.image} ${
          blurEnabled && image.category === "18+" ? styles.blurred : ""
        }`}
      />
      {blurEnabled && image.category === "18+" && (
        <div className={styles.iconOverlay}>
          <VscEyeClosed className={styles.eyeIcon} />
        </div>
      )}
      <div className={styles.title}>{image.title}</div>
    </div>
  );
};

export default ImageCard;
