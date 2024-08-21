// src/components/Home.js
import React from "react";
import "./Home.css";
import ImageGallery from "../../components/ImageGallery";
import Hslide from "../../components/Home/Hslide";
import WelcomeSection from "../../components/Home/WelcomeSection";
import Feature from "../../components/Home/Feature";

// import WallpaperCard from "../../components/HomeWallpaper";

const Home = () => {
  return (
    <div className="App">
      <main className="App-main">
        <WelcomeSection />
      </main>
      <Feature />

      <div className="slide-home">
        <Hslide />
      </div>
    </div>
  );
};

export default Home;
