import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles/gif/Gifcard.module.css";

const GifCard = ({ gif, blurEnabled }) => {
  // Check if gif.url exists; log an error if it's missing
  if (!gif.url) {
    console.error("GIF URL is missing", gif);
  }

  // Determine if the GIF should be blurred
  const shouldBlur = blurEnabled && gif.category === "18+";

  return (
    <div className={`${styles.card} ${shouldBlur ? styles.blurred : ""}`}>
      {gif.url ? (
        <>
          <img
            src={gif.url}
            alt={gif.title || "GIF image"}
            className={styles.cardImage}
          />
        </>
      ) : (
        <p>No GIF available</p>
      )}
    </div>
  );
};

GifCard.propTypes = {
  gif: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }),
  blurEnabled: PropTypes.bool.isRequired,
};

export default GifCard;
