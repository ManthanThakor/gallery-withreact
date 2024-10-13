// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Route/Home/Home";
import GifSec from "./components/Gif/GifSec";
import ErrorBoundary from "./components/Gif/ERROR/ErrorBoundary";
import Fav from "./Route/Fav/Fav";
import GIf from "./Route/Gif/GIf";
import ContactuS from "./Route/ContactUs/ContactuS";
import ImageGalleryR from "./Route/Image-Gallery/ImageGalleryR";
import VideoGRoute from "./Route/Video/VideoGRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="middle">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<ImageGalleryR />} />
          <Route path="/video/:categoryId" element={<VideoGRoute />} />{" "}
          {/* Corrected VideoG route */}
          <Route
            path="/video/:categoryId/:videoId"
            element={<VideoGRoute />}
          />{" "}
          {/* Video details route */}
          <Route
            path="/gif/all"
            element={
              <ErrorBoundary>
                <GIf />
              </ErrorBoundary>
            }
          />
          <Route
            path="/gif/:category"
            element={
              <ErrorBoundary>
                <GifSec />
              </ErrorBoundary>
            }
          />
          <Route path="/favorites" element={<Fav />} />
          <Route path="/contact" element={<ContactuS />} />
        </Routes>
      </div>
      <footer className="App-footer">
        &copy; 2024 Image Gallery. All rights reserved.
      </footer>
    </Router>
  );
}

export default App;
