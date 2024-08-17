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
    title: "Girl squirt squirting sex piss porn pussy 4k hd  Cat",
    category: "18+",
    type: "gif",
  },
  {
    id: 2,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-100.gif",
    title: "Girl squirt squirting sex piss porn pussy 4k hd ",
    category: "18+",
    type: "gif",
  },
  {
    id: 3,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-98.gif",
    title: "Funny CatGirl squirt squirting sex piss porn",
    category: "18+",
    type: "gif",
  },
  {
    id: 4,
    url: "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-squirt-96.gif",
    title: "Girl squirt squirting sex piss porn",
    category: "18+",
    type: "gif",
  },
  {
    id: 5,
    url: "https://i.gifer.com/o6m.gif",
    title: "Funny Cat mickey black and white felix  cat",
    category: "Trending",
    type: "gif",
  },
  {
    id: 6,
    url: " https://i.gifer.com/ig4.gif",
    title:
      "unicorn cute happy glitter unikitty kittycorn meetaiko joy delirious cat jump aiko Funny Cat mickey black and white felix  cat",
    category: "Trending",
    type: "gif",
  },
  {
    id: 7,
    url: "https://i.gifer.com/nRq.gif",
    title: "Funny Cat mickey black and white felix  cat",
    category: "Trending",
    type: "gif",
  },
  {
    id: 8,
    url: "https://i.gifer.com/6ki.gif",
    title: "Funny Cat mickey black and white felix  cat",
    category: "Trending",
    type: "gif",
  },
  {
    id: 9,
    url: "https://i.gifer.com/JSb.gif",
    title: "Funny Cat mickey black and white felix  cat",
    category: "Trending",
    type: "gif",
  },
  {
    id: 10,
    url: "https://i.gifer.com/1dTC.gif",
    title: "Funny Cat mickey black and white felix  cat",
    category: "Trending",
    type: "gif",
  },
  {
    id: 11,
    url: "https://i.gifer.com/2P2U.gif",
    title: "Funny Cat mickey black and white felix  cat",
    category: "Trending",
    type: "gif",
  },
  {
    id: 12,
    url: "https://i.gifer.com/4Me6.gif",
    title: "Funny Cat mickey black and white felix  cat",
    category: "Trending",
    type: "gif",
  },
  {
    id: 13,
    url: "https://i.gifer.com/L2DA.gif",
    title: "Funny Cat mickey black and white felix  cat",
    category: "Trending",
    type: "gif",
  },
  {
    id: 14,
    url: "https://i.gifer.com/V06s.gif",
    title: "Funny Cat mickey black and white felix  cat",
    category: "Trending",
    type: "gif",
  },
  {
    id: 15,
    url: "https://i.gifer.com/7RLt.gif",
    title: "Funny Cat mickey black and white felix  cat",
    category: "Trending",
    type: "gif",
  },
  {
    id: 16,
    url: "https://i.gifer.com/IvAw.gif",
    title: "Funny Cat mickey black and white felix  cat",
    category: "Trending",
    type: "gif",
  },
  {
    id: 17,
    url: "https://i.gifer.com/BFxa.gif",
    title: "Funny Cat mickey black and white felix  cat",
    category: "Trending",
    type: "gif",
  },
  {
    id: 18,
    url: "https://i.gifer.com/N5o5.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 19,
    url: "https://i.gifer.com/Laxf.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 20,
    url: "https://i.gifer.com/QglV.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 21,
    url: "https://i.gifer.com/9nhn.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 22,
    url: "https://i.gifer.com/60Ks.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 23,
    url: "https://i.gifer.com/XOsX.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 24,
    url: "https://i.gifer.com/6fQC.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 25,
    url: "https://i.gifer.com/NusJ.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 26,
    url: "https://i.gifer.com/NbxD.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 27,
    url: "https://i.gifer.com/3dof.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 28,
    url: "https://i.gifer.com/fxVE.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 29,
    url: "https://i.gifer.com/FM7o.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 30,
    url: "https://i.gifer.com/3UsO.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 31,
    url: "https://i.gifer.com/J59.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 32,
    url: "https://i.gifer.com/J4o.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 33,
    url: "https://i.gifer.com/LLuC.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 34,
    url: "https://i.gifer.com/4SHX.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 35,
    url: "https://i.gifer.com/Ie7K.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 36,
    url: "https://i.gifer.com/D5ul.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 37,
    url: "https://i.gifer.com/9grr.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 38,
    url: "https://i.gifer.com/uF.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 39,
    url: "https://i.gifer.com/Scpn.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 40,
    url: "https://i.gifer.com/Szwz.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 41,
    url: "https://i.gifer.com/9Szg.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 42,
    url: "https://i.gifer.com/1P4x.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 43,
    url: "https://i.gifer.com/Zbtq.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 44,
    url: "https://i.gifer.com/RRhK.gif",
    title: "trending cute 4k hd girl cat funny",
    category: "Trending",
    type: "gif",
  },
  {
    id: 45,
    url: "https://i.gifer.com/fxk4.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 46,
    url: "https://i.gifer.com/7o7K.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 47,
    url: "https://i.gifer.com/VdgG.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 48,
    url: "https://i.gifer.com/3dof.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 49,
    url: "https://i.gifer.com/6bU.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 50,
    url: "https://i.gifer.com/Kog.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 51,
    url: "https://i.gifer.com/Dr95.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 52,
    url: "https://i.gifer.com/Un8o.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 53,
    url: "https://i.gifer.com/NC8m.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 54,
    url: "https://i.gifer.com/3VUn.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 55,
    url: "https://i.gifer.com/6bU.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 56,
    url: "https://i.gifer.com/GEkw.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 57,
    url: "https://i.gifer.com/Q0Jz.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 58,
    url: "https://i.gifer.com/8BP.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 59,
    url: "https://i.gifer.com/7StL.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 60,
    url: "https://i.gifer.com/6bS.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 61,
    url: "https://i.gifer.com/7cbe.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 62,
    url: "https://i.gifer.com/OE8W.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 63,
    url: "https://i.gifer.com/5sHb.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 64,
    url: "https://i.gifer.com/5LXM.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 65,
    url: "https://i.gifer.com/8B6Z.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 66,
    url: "https://i.gifer.com/WkgZ.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 67,
    url: "https://i.gifer.com/1Ppt.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
    type: "gif",
  },
  {
    id: 68,
    url: "https://i.gifer.com/X72e.gif",
    title: "Trending Car Glow 4k",
    category: "Car",
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
            className={`zoomedImage ${
              blurEnabled && zoomedItem.category === "18+" ? "blurred" : ""
            }`}
          />
          {blurEnabled && zoomedItem.category === "18+" && (
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
