import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { VscEyeClosed } from "react-icons/vsc";
import { FaInfoCircle } from "react-icons/fa";
import GifCard from "./GifCard";
import "../../styles/gif/GifSe.css";
// Sample items with valid data
const items = [
  {
    id: 1,
    url: "https://gifcandy.net/wp-content/uploads/2020/04/Janice-Griffith-bound-squirt-and-gape.gif",
    title: "Funny Cat",
    category: "18+",
    type: "gif",
  },
  {
    id: 2,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-100.gif",
    title: "Funny Cat",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 3,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-98.gif",
    title: "Funny Cat",
    category: "Cute Girl",
    type: "gif",
  },
  {
    id: 4,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-96.gif",
    title: "Funny Cat",
    category: "Cute Girl",
    type: "gif",
  },
];

const categories = [
  "All",
  "Trending",
  "Car",
  "Game",
  "18+",
  "Cute Girl",
  "Ghost",
  "Funny",
  "Smile",
  "Angry",
  "Laugh",
  "Sad",
  "Fight",
  "Horror",
];

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCategorySelect = (category) => {
    if (category === "18+") {
      setShowWarning(true);
    } else {
      setSelectedCategory(category);
      localStorage.setItem("selectedCategory", category);
    }
  };

  const handleItemClick = (item) => {
    setZoomedItem(item);
  };

  const toggleBlur = () => {
    const newBlurState = !blurEnabled;
    setBlurEnabled(newBlurState);
    localStorage.setItem("blurEnabled", JSON.stringify(newBlurState));
  };

  useEffect(() => {
    setShuffledItems(shuffleArray(items));
    const savedBlurState = JSON.parse(localStorage.getItem("blurEnabled"));
    if (savedBlurState !== null) {
      setBlurEnabled(savedBlurState);
    }

    const savedCategory = localStorage.getItem("selectedCategory");
    if (savedCategory) {
      setSelectedCategory(savedCategory);
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

  const handleInfoClick = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // Hide after 3 seconds
  };

  return (
    <div className="container-gif">
      <div className="search-container">
        <FaInfoCircle
          className="infoIcon"
          title="Click the left side button to select category"
          onMouseEnter={handleInfoClick}
          onClick={handleInfoClick}
        />
        <input
          type="text"
          placeholder="Search items..."
          className="searchInput"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="toggleBlurButton">
          <div className="button-cover-blur" onClick={toggleBlur}>
            <input
              type="checkbox"
              className="checkbox"
              checked={blurEnabled}
              onChange={toggleBlur}
            />
            <div className="button-toggle"></div>
          </div>
        </div>
      </div>

      {showNotification && (
        <div className="notification">
          Click the left side button to select category
        </div>
      )}

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button
          className={`sidebarToggle ${isSidebarOpen ? "open" : "closed"}`}
          onClick={toggleSidebar}
        >
          <i
            className={`fas ${
              isSidebarOpen ? "fa-chevron-left" : "fa-chevron-right"
            }`}
          ></i>
        </button>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Select Category</h3>
          {categories.map((category, index) => (
            <a
              key={index}
              href="#"
              className={`sidebarMenuItem ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </a>
          ))}
        </div>
      </div>

      <div className="gallery">
        {filteredItems.map((item, index) => (
          <div key={index} onClick={() => handleItemClick(item)}>
            <GifCard gif={item} blurEnabled={blurEnabled} />
          </div>
        ))}
      </div>

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
            className={`zoomedImage ${blurEnabled ? "blurred" : ""}`}
          />
          {blurEnabled && (
            <div className="iconOverlay">
              <VscEyeClosed className="eyeIcon" />
            </div>
          )}
        </div>
      )}

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
                localStorage.setItem("selectedCategory", "18+");
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
