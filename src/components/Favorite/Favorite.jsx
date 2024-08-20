import React, { useState, useEffect } from "react";
import GifCard from "../Gif/GifCard";
import "../../styles/fav/fav.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [selectedGif, setSelectedGif] = useState(null);

  useEffect(() => {
    // Load favorites from localStorage
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    console.log("Loaded favorites:", savedFavorites); // Debugging statement
    setFavorites(savedFavorites);
  }, []);

  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handleGifClick = (gif) => {
    setSelectedGif(gif);
  };

  const closeModal = () => {
    setSelectedGif(null);
  };

  return (
    <div className="favorites-container">
      <h2>Favorites</h2>
      <div className="favorites-gallery">
        {favorites.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          favorites.map((item) => (
            <div
              key={item.id}
              className="favorite-item"
              onClick={() => handleGifClick(item)}
            >
              <GifCard gif={item} blurEnabled={false} />
              <button
                className="removeFavoriteButton"
                onClick={(e) => {
                  e.stopPropagation(); // Prevents modal from opening
                  handleRemoveFavorite(item.id);
                }}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {selectedGif && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedGif.url} alt={selectedGif.title} />
            <button className="close-modal-button" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
