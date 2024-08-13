import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles/gif/Gifcard.module.css";

const GifCard = ({ gif = { url: "", title: "" }, blurEnabled }) => {
  if (!gif.url) {
    console.error("GIF URL is missing", gif);
  }

  return (
    <div className={`${styles.card} ${blurEnabled ? styles.blurred : ""}`}>
      {gif.url ? (
        <>
          <img
            src={gif.url}
            alt={gif.title || "GIF image"}
            className={styles.cardImage}
          />
          <h3 className={styles.cardTitle}>{gif.title}</h3>
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
  }),
  blurEnabled: PropTypes.bool.isRequired,
};

export default GifCard;
