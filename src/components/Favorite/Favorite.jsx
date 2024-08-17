// src/components/Favorites/Favorites.js
import React, { useState, useEffect } from "react";
import GifCard from "../Gif/GifCard";
import "../../styles/fav/fav.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Load favorites from localStorage
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites-container">
      <h2>Favorites</h2>
      <div className="favorites-gallery">
        {favorites.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          favorites.map((item) => (
            <div key={item.id} className="favorite-item">
              <GifCard gif={item} />
              <button
                className="removeFavoriteButton"
                onClick={() => handleRemoveFavorite(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
