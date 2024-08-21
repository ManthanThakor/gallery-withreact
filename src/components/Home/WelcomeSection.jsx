import React from "react";
import Slider from "./Slider";
import styles from "../../styles/home/welcomeSection.module.css";

const WelcomeSection = () => {
  return (
    <div className={styles.welcomeSection}>
      <div className={styles.logoContainer}>
        <img
          src="src/assets/logo.png"
          alt="GlimVid Logo"
          className={styles.logo}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.welcomeText}>
          <h2>Welcome to GLIMVID</h2>
          <p>
            Explore our collection of stunning images, GIFs, and videos. Enjoy
            the experience!
          </p>
        </div>
        <div className={styles.slider}>
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
