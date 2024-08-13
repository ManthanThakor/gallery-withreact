import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { VscEyeClosed } from "react-icons/vsc";
import GifCard from "./GifCard";

// Sample items with valid data
const items = [
  {
    id: 1,
    url: "https://gifcandy.net/wp-content/uploads/2020/04/Janice-Griffith-bound-squirt-and-gape.gif",
    title: "Funny Cat",
    category: "Cute Girl",
    type: "gif", // GIF example
  },
  // Add more items as needed
];

const categories = ["All", "Cute Girl", "Anime Girl", "Hot Girl", "18+"];

const shuffleArray = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const GifSec = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showWarning, setShowWarning] = useState(false);
  const [zoomedItem, setZoomedItem] = useState(null);
  const [shuffledItems, setShuffledItems] = useState([]);
  const [blurEnabled, setBlurEnabled] = useState(true);

  useEffect(() => {
    setShuffledItems(shuffleArray(items));
  }, []);

  const handleCategorySelect = (category) => {
    if (category === "18+") {
      setShowWarning(true);
    } else {
      setSelectedCategory(category);
    }
  };

  const handleItemClick = (item) => {
    setZoomedItem(item);
  };

  const toggleBlur = () => {
    setBlurEnabled(!blurEnabled);
    localStorage.setItem("blurEnabled", JSON.stringify(!blurEnabled));
  };

  useEffect(() => {
    const savedBlurState = JSON.parse(localStorage.getItem("blurEnabled"));
    if (savedBlurState !== null) {
      setBlurEnabled(savedBlurState);
    }
  }, []);

  const filteredItems = shuffledItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" ||
      selectedCategory === item.category ||
      (selectedCategory === "18+" && item.category === "18+");

    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search items..."
        className="searchInput"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Category Filters */}
      <div className="filters">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`filterButton ${
              selectedCategory === category ? "activeFilter" : ""
            }`}
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Toggle Blur Button */}
      <button className="toggleBlurButton" onClick={toggleBlur}>
        {blurEnabled ? "Blur Off" : "Blur On"}
      </button>

      {/* Display Filtered Items */}
      <div className="gallery">
        {filteredItems.map((item, index) => (
          <div key={index} onClick={() => handleItemClick(item)}>
            <GifCard gif={item} blurEnabled={blurEnabled} />
          </div>
        ))}
      </div>

      {/* Zoomed Item Overlay */}
      {zoomedItem && (
        <div
          className={`zoomOverlay ${
            blurEnabled && zoomedItem.category === "18+" ? "blurred" : ""
          }`}
          onClick={() => setZoomedItem(null)}
        >
          <img
            src={zoomedItem.url}
            alt={zoomedItem.title}
            className="zoomedImage"
          />
          {blurEnabled && zoomedItem.category === "18+" && (
            <div className="iconOverlay">
              <VscEyeClosed className="eyeIcon" />
            </div>
          )}
        </div>
      )}

      {/* Warning Overlay */}
      {showWarning && (
        <div className="warningOverlay">
          <div className="warningBox">
            <h2>Warning</h2>
            <p>You must be 18+ to view this content.</p>
            <button
              className="warningButton"
              onClick={() => {
                setShowWarning(false);
                setSelectedCategory("18+");
              }}
            >
              I am 18+
            </button>
            <button
              className="warningButton"
              onClick={() => setShowWarning(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GifSec;
