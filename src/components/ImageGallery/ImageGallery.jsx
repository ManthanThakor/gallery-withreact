// src/components/ImageGallery.js
import React, { useEffect, useState } from "react";
import styles from "../../styles/image-Gall/imageGallery.module.css";
import ImageCard from "./ImageCard";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { VscEyeClosed } from "react-icons/vsc";

const images = [
  {
    id: 1,
    url: "https://cdn.pixabay.com/photo/2023/01/27/10/53/anime-7748386_1280.jpg",
    title: "Image 1",
    category: "Anime Girl",
  },
  {
    id: 2,
    url: "https://img.freepik.com/premium-photo/anime-girl-character_483949-6145.jpg",
    title: "Image 2",
    category: "Hot Girl",
  },
  {
    id: 3,
    url: "https://img.freepik.com/premium-photo/anime-girl-character-fantasy-black-dress_483949-6361.jpg",
    title: "Image 3",
    category: "Cute Girl",
  },
  {
    id: 4,
    url: "https://img.freepik.com/premium-photo/she-reminds-me-anime-character-i-created_1262542-14135.jpg",
    title: "Image 4",
    category: "Anime Girl",
  },
  {
    id: 5,
    url: "https://img.freepik.com/premium-photo/cartoon-girl-with-cigarette-her-hand_777271-50377.jpg",
    title: "Image 5",
    category: "Hot Girl",
  },
  {
    id: 6,
    url: "https://img.freepik.com/premium-photo/anime-characters-standing-room-with-window-plant_949067-59929.jpg",
    title: "Image 6",
    category: "Anime Girl",
  },
  {
    id: 7,
    url: "https://img.freepik.com/free-photo/illustration-anime-character-rain_23-2151394703.jpg",
    title: "Image 7",
    category: "Cute Girl",
  },
  {
    id: 8,
    url: "https://img.freepik.com/premium-photo/anime-girl-window_777271-50156.jpg",
    title: "Image 8",
    category: "Anime Girl",
  },
  {
    id: 9,
    url: "https://img.freepik.com/free-photo/lifestyle-scene-with-people-doing-regular-tasks-anime-style_23-2151002525.jpg",
    title: "Image 9",
    category: "Hot Girl",
  },
  {
    id: 10,
    url: "https://cdni.pornpics.com/1280/1/246/75770532/75770532_012_c4f7.jpg",
    title: "Image 9",
    category: "18+",
  },
  {
    id: 11,
    url: "https://cdni.pornpics.com/1280/1/246/75770532/75770532_014_8445.jpg",
    title: "Image 9",
    category: "18+",
  },
  {
    id: 12,
    url: "https://cdni.pornpics.com/1280/7/484/75964738/75964738_017_9c1a.jpg",
    title: "Image 9",
    category: "18+",
  },
  {
    id: 13,
    url: "https://cdni.pornpics.com/1280/7/631/10800398/10800398_044_f8ab.jpg",
    title: "Image 9",
    category: "18+",
  },
  {
    id: 14,
    url: "https://cdni.pornpics.com/1280/7/95/75020473/75020473_079_7a6a.jpg",
    title: "Image 9",
    category: "18+",
  },
  {
    id: 15,
    url: "https://cdni.pornpics.com/1280/7/631/10800398/10800398_035_c91a.jpg",
    title: "Image 9",
    category: "18+",
  },
  {
    id: 16,
    url: "https://cdni.pornpics.com/1280/7/712/56762637/56762637_049_f90f.jpg",
    title: "Image 9",
    category: "18+",
  },
  {
    id: 17,
    url: "https://cdni.pornpics.com/1280/7/130/19110145/19110145_036_749c.jpg",
    title: "Image 9",
    category: "18+",
  },
  {
    id: 18,
    url: "https://cdni.pornpics.com/1280/7/130/19110145/19110145_058_96e9.jpg",
    title: "Image 9",
    category: "18+",
  },
  {
    id: 19,
    url: "https://cdni.pornpics.com/1280/7/130/19110145/19110145_049_e985.jpg",
    title: "Image 9",
    category: "18+",
  },
  {
    id: 20,
    url: "https://cdni.pornpics.com/460/1/246/75770532/75770532_016_8ba7.jpg",
    title: "Image 9",
    category: "18+",
  },
  {
    id: 21,
    url: "https://cdni.pornpics.com/1280/1/246/75770532/75770532_018_995e.jpg",
    title: "Image 9",
    category: "18+",
  },
  {
    id: 22,
    url: "https://cdni.pornpics.com/1280/7/631/10800398/10800398_067_b2b9.jpg",
    title: "Image 9",
    category: "18+",
  },
  {
    id: 23,
    url: "https://cdni.pornpics.com/460/7/631/10800398/10800398_035_c91a.jpg",
    title: "Image 9",
    category: "18+",
  },
  {
    id: 24,
    url: "https://cdni.pornpics.com/1280/7/631/10800398/10800398_078_ad2f.jpg",
    title: "Image 9",
    category: "18+",
  },
  {
    id: 25,
    url: "https://cdni.pornpics.com/1280/7/631/10800398/10800398_026_7758.jpg",
    title: "Image 9",
    category: "18+",
  },
  {
    id: 26,
    url: "https://cdni.pornpics.com/1280/5/209/57622710/57622710_005_52f8.jpg",
    title: "Girl piss naked 4k porn",
    category: "18+",
  },
  {
    id: 27,
    url: "https://cdni.pornpics.com/1280/1/315/46043634/46043634_006_e89c.jpg",
    title: "Girl piss naked 4k porn",
    category: "18+",
  },
  {
    id: 28,
    url: "https://cdni.pornpics.com/1280/5/209/57622710/57622710_008_0a60.jpg",
    title: "Girl piss naked 4k porn",
    category: "18+",
  },
  {
    id: 29,
    url: "https://cdni.pornpics.com/1280/7/53/21298108/21298108_021_e4f2.jpg",
    title: "Girl piss naked 4k porn",
    category: "18+",
  },
  {
    id: 30,
    url: "https://cdni.pornpics.com/1280/5/209/88974470/88974470_001_ea43.jpg",
    title: "Girl piss naked 4k porn",
    category: "18+",
  },
  {
    id: 31,
    url: "https://cdni.pornpics.com/1280/5/209/88974470/88974470_013_2538.jpg",
    title: "Girl piss naked 4k porn",
    category: "18+",
  },
  {
    id: 32,
    url: "https://cdni.pornpics.com/1280/7/484/72814090/72814090_007_f8a4.jpg",
    title: "Girl piss naked 4k porn",
    category: "18+",
  },
  {
    id: 33,
    url: "https://cdni.pornpics.com/1280/7/484/72814090/72814090_012_aed4.jpg",
    title: "Girl piss naked 4k porn",
    category: "18+",
  },
  {
    id: 34,
    url: "https://cdni.pornpics.com/1280/7/484/72814090/72814090_089_2c36.jpg",
    title: "Girl piss naked 4k porn",
    category: "18+",
  },
  {
    id: 35,
    url: "https://cdni.pornpics.com/1280/7/83/48317070/48317070_024_b5f6.jpg",
    title: "Girl piss naked 4k porn",
    category: "18+",
  },
  {
    id: 36,
    url: "https://cdni.pornpics.com/1280/5/209/57834887/57834887_004_9b31.jpg",
    title: "Girl piss naked 4k porn",
    category: "18+",
  },
  {
    id: 37,
    url: "https://cdni.pornpics.com/1280/7/483/23321545/23321545_025_1681.jpg",
    title: "Girl piss naked 4k porn",
    category: "18+",
  },
  {
    id: 38,
    url: "https://cdni.pornpics.com/1280/1/315/46043634/46043634_005_42d1.jpg",
    title: "Girl piss naked 4k porn",
    category: "18+",
  },
  {
    id: 39,
    url: "https://cdni.pornpics.com/1280/1/334/86811562/86811562_002_006d.jpg",
    title: "Girl piss naked 4k porn",
    category: "18+",
  },
  {
    id: 40,
    url: "https://cdni.pornpics.com/1280/1/334/86811562/86811562_010_51ac.jpg",
    title: "Girl piss naked 4k porn",
    category: "18+",
  },
  {
    id: 41,
    url: "https://cdni.pornpics.com/1280/1/334/86811562/86811562_013_d368.jpg",
    title: "Girl piss naked 4k porn",
    category: "18+",
  },
  {
    id: 42,
    url: "https://cdni.pornpics.com/1280/7/152/55871378/55871378_008_64b0.jpg",
    title: "Girl piss naked 4k porn",
    category: "18+",
  },
  {
    id: 43,
    url: "https://cdni.pornpics.com/1280/7/278/99004206/99004206_093_6123.jpg",
    title: "Pink Pussy hot girl",
    category: "18+",
  },
  {
    id: 44,
    url: "https://cdni.pornpics.com/1280/7/726/88930204/88930204_056_b6d1.jpg",
    title: "Pink Pussy hot girl",
    category: "18+",
  },
  {
    id: 45,
    url: "https://cdni.pornpics.com/1280/7/726/88930204/88930204_066_73fb.jpg",
    title: "Pink Pussy hot girl",
    category: "18+",
  },
  {
    id: 46,
    url: "https://cdni.pornpics.com/1280/7/549/52579671/52579671_037_9571.jpg",
    title: "Pink Pussy hot girl",
    category: "18+",
  },
  {
    id: 47,
    url: "https://cdni.pornpics.com/1280/7/57/98326675/98326675_046_5fc0.jpg",
    title: "Pink Pussy hot girl",
    category: "18+",
  },
  {
    id: 48,
    url: "https://cdni.pornpics.com/1280/7/57/98326675/98326675_044_d927.jpg",
    title: "Pink Pussy hot girl",
    category: "18+",
  },
  {
    id: 49,
    url: "https://cdni.pornpics.com/1280/7/57/98326675/98326675_040_da92.jpg",
    title: "Pink Pussy hot girl",
    category: "18+",
  },
  {
    id: 50,
    url: "https://cdni.pornpics.com/1280/7/57/98326675/98326675_079_5aa5.jpg",
    title: "Pink Pussy hot girl",
    category: "18+",
  },
  {
    id: 51,
    url: "https://cdn1.images.hentaicity.com/galleries/0907/63148/6d6b4959a90de7ddc2446c5477317c99.jpg",
    title: "Anime girl pussy",
    category: "18+",
  },
  {
    id: 52,
    url: "https://cdni.lamalinks.com/1280/1/5/57523760/57523760_008_53b8.jpg",
    title: "I Anime girl pussy",
    category: "18+",
  },
  {
    id: 53,
    url: "https://pbs.twimg.com/media/ElvKeoHWMAAOZU7.jpg:large",
    title: "Anime girl pussy",
    category: "18+",
  },
  {
    id: 54,
    url: "https://pbs.twimg.com/media/E7TrEQSXMAQmEBJ.jpg:large",
    title: "Anime girl pussy",
    category: "18+",
  },
  {
    id: 55,
    url: "https://erowall.com/wallpapers/original/26899.jpg",
    title: "Anime girl pussy",
    category: "18+",
  },
  {
    id: 56,
    url: "https://erowall.com/wallpapers/original/34717.jpg",
    title: "Anime girl pussy",
    category: "18+",
  },
  {
    id: 57,
    url: "https://cdni.pornpics.de/1280/7/486/70269690/70269690_051_f90c.jpg",
    title: "wet pussy hot 4k ",
    category: "18+",
  },
  {
    id: 58,
    url: "https://cdni.pornpics.de/1280/5/238/16484130/16484130_007_52ec.jpg",
    title: "wet pussy hot 4k ",
    category: "18+",
  },
  {
    id: 59,
    url: "https://cdni.pornpics.de/1280/7/672/66845618/66845618_119_5728.jpg",
    title: "wet pussy hot 4k",
    category: "18+",
  },
  {
    id: 60,
    url: "https://cdni.pornpics.de/1280/7/302/14190634/14190634_061_ec2f.jpg",
    title: "wet pussy hot 4k",
    category: "18+",
  },
  {
    id: 61,
    url: "https://photo.xmissymedia.nl/pictures/metart1401xm/20240916-MetArt_2024-09-13_PINK-GINGHAM-ELLIE-LUNA-by-MYTRO_0f7e1_xm/MetArt_Pink-Gingham_Ellie-Luna_medium_0047.jpg",
    title: "Hot girl pussy",
    category: "18+",
  },
  {
    id: 62,
    url: "https://video.damplips.com/pics/wp-content/uploads/2024/01/girl-orgasm-cum.jpg",
    title: "Hot girl pussy",
    category: "18+",
  },
  {
    id: 63,
    url: "https://photo.xmissymedia.nl/pictures/metart1401xm/20240916-MetArt_2024-09-13_PINK-GINGHAM-ELLIE-LUNA-by-MYTRO_0f7e1_xm/MetArt_Pink-Gingham_Ellie-Luna_medium_0049.jpg",
    title: "Hot girl pussy",
    category: "18+",
  },
  {
    id: 64,
    url: "https://photo.xmissymedia.nl/pictures/metart1401xm/20240916-MetArt_2024-09-13_PINK-GINGHAM-ELLIE-LUNA-by-MYTRO_0f7e1_xm/MetArt_Pink-Gingham_Ellie-Luna_medium_0053.jpg",
    title: "Hot girl pussy",
    category: "18+",
  },
  {
    id: 65,
    url: "https://photo.xmissymedia.nl/pictures/metart1401xm/20240916-MetArt_2024-09-13_PINK-GINGHAM-ELLIE-LUNA-by-MYTRO_0f7e1_xm/MetArt_Pink-Gingham_Ellie-Luna_medium_0075.jpg",
    title: "Hot girl pussy",
    category: "18+",
  },
  {
    id: 66,
    url: "https://photo.xmissymedia.nl/pictures/metart1401xm/20240916-MetArt_2024-09-13_PINK-GINGHAM-ELLIE-LUNA-by-MYTRO_0f7e1_xm/MetArt_Pink-Gingham_Ellie-Luna_medium_0103.jpg",
    title: "Hot girl pussy",
    category: "18+",
  },
  {
    id: 67,
    url: "https://photo.xmissymedia.nl/pictures/metart1401xm/20240916-MetArt_2024-09-13_PINK-GINGHAM-ELLIE-LUNA-by-MYTRO_0f7e1_xm/MetArt_Pink-Gingham_Ellie-Luna_medium_0129.jpg",
    title: "Hot girl pussy boobs big ",
    category: "18+",
  },
  {
    id: 68,
    url: "https://photo.xmissymedia.nl/pictures/sexart1301/20240916-SexArt_2024-09-13_HYPNOTIC-CLEMENCE-AUDIARD--LEYA-DESANTIS-by-ANDREJ-LUPIN_c9204_xm/SexArt_Hypnotic_Clemence-Audiard--Leya-Desantis_medium_0071.jpg",
    title: "Hot girl pussy lesbian sex",
    category: "18+",
  },
  {
    id: 69,
    url: "https://photo.xmissymedia.nl/pictures/sexart1301/20240916-SexArt_2024-09-13_HYPNOTIC-CLEMENCE-AUDIARD--LEYA-DESANTIS-by-ANDREJ-LUPIN_c9204_xm/SexArt_Hypnotic_Clemence-Audiard--Leya-Desantis_medium_0088.jpg",
    title: "Hot girl pussy lesbian sex",
    category: "18+",
  },
  {
    id: 70,
    url: "https://steam.aeonsecho.com/3-character-display/images/lp/aeons-echo/3-character-display/1/d-ch2-poster.png",
    title: "Hot girl pussy",
    category: "18+",
  },
  {
    id: 71,
    url: "https://steam.aeonsecho.com/4-characters/char-nsfw-4.png",
    title: "Hot girl pussy",
    category: "18+",
  },
];

const categories = ["All", "Cute Girl", "Anime Girl", "Hot Girl", "18+"];

const shuffleArray = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const ImageGallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showWarning, setShowWarning] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [shuffledImages, setShuffledImages] = useState([]);
  const [blurEnabled, setBlurEnabled] = useState(true); // State to track blur

  useEffect(() => {
    setShuffledImages(shuffleArray(images));
  }, []);

  const handleCategorySelect = (category) => {
    if (category === "18+") {
      setShowWarning(true);
    } else {
      setSelectedCategory(category);
    }
  };

  const handleImageClick = (image) => {
    setZoomedImage(image);
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

  const filteredImages = shuffledImages.filter((image) => {
    const matchesCategory =
      selectedCategory === "All" ||
      selectedCategory === image.category ||
      (selectedCategory === "All" && searchTerm && image.category === "18+");

    const matchesSearch = image.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.containerImg}>
      <input
        type="text"
        placeholder="Search images..."
        className={styles.searchInput}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className={styles.filters}>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`${styles.filterButton} ${
              selectedCategory === category ? styles.activeFilter : ""
            }`}
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <button className={styles.toggleBlurButton} onClick={toggleBlur}>
        {blurEnabled ? "Blur Off" : "Blur On"}
      </button>

      <div className={styles.gallery}>
        {filteredImages.map((image, index) => (
          <div key={index} onClick={() => handleImageClick(image)}>
            <ImageCard image={image} blurEnabled={blurEnabled} />
          </div>
        ))}
      </div>

      {zoomedImage && (
        <div
          className={`${styles.zoomOverlay} ${
            blurEnabled && zoomedImage.category === "18+" ? styles.blurred : ""
          }`}
          onClick={() => setZoomedImage(null)}
        >
          <img
            src={zoomedImage.url}
            alt={zoomedImage.title}
            className={styles.zoomedImage}
          />
          {blurEnabled && zoomedImage.category === "18+" && (
            <div className={styles.iconOverlay}>
              <VscEyeClosed className={styles.eyeIcon} />
            </div>
          )}
        </div>
      )}

      {showWarning && (
        <div className={styles.warningOverlay}>
          <div className={styles.warningBox}>
            <h2>Warning</h2>
            <p>You must be 18+ to view this content.</p>
            <button
              className={styles.warningButton}
              onClick={() => {
                setShowWarning(false);
                setSelectedCategory("18+");
              }}
            >
              I am 18+
            </button>
            <button
              className={styles.warningButton}
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

export default ImageGallery;
