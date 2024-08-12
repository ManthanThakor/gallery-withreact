// src/components/Home.js
import React from "react";
import Navbar from "./Navbar";
import ImageGallery from "./ImageGallery";
import WelcomeSection from "./WelcomeSection";
import "../styles/Home.css"; // Optional: if you want specific styles for Home

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Image Gallery</h1>
      </header>
      <main className="App-main">
        <WelcomeSection />
        <ImageGallery />
      </main>
      <footer className="App-footer">
        &copy; 2024 Image Gallery. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
