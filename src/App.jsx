// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Route/Home/Home";
import GifSec from "./components/Gif/GifSec";
import ErrorBoundary from "./components/Gif/ERROR/ErrorBoundary";
import Favorites from "./components/Favorite/Favorite";

function App() {
  return (
    <Router>
      <Navbar /> {/* Ensure Navbar is rendered on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/gif"
          element={
            <ErrorBoundary>
              <GifSec />
            </ErrorBoundary>
          }
        />
        <Route path="/favorites" element={<Favorites />} />{" "}
        {/* Add this route */}
        {/* Uncomment these when the components are ready */}
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <footer className="App-footer">
        &copy; 2024 Image Gallery. All rights reserved.
      </footer>
    </Router>
  );
}

export default App;
