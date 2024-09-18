import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/videoGallery/VideoGallery.css";
import videoData from "./videoData.json";

const categories = ["Trending", "18+"]; // Removed "All" category

const VideoG = () => {
  const { categoryId, videoId } = useParams();
  const navigate = useNavigate();

  const [videos, setVideos] = useState([]);
  const [category, setCategory] = useState(categoryId || categories[0]); // Default to the first category
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(() => {
    const storedVideo = localStorage.getItem("selectedVideo");
    return storedVideo ? JSON.parse(storedVideo) : null;
  });
  const [suggestedVideos, setSuggestedVideos] = useState([]);

  // Debounced fetch handler
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  // Fetch suggested videos based on the selected video's category
  const fetchSuggestedVideos = useCallback(() => {
    if (!selectedVideo) return;

    const suggested = videoData.filter(
      (video) =>
        video.category === selectedVideo.category &&
        video.id !== selectedVideo.id
    );

    setSuggestedVideos(suggested);
  }, [selectedVideo]); // Only depend on 'selectedVideo'

  // Fetch videos with infinite scrolling
  const fetchVideos = useCallback(() => {
    if (!hasMore || loading) return; // Avoid fetching if there's no more data or already loading

    setLoading(true);

    const filteredVideos = videoData.filter((video) => {
      const matchesCategory = video.category.includes(category);
      const matchesSearchQuery = video.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearchQuery;
    });

    setVideos((prevVideos) => [...prevVideos, ...filteredVideos]);
    setLoading(false);
    setHasMore(filteredVideos.length > 0);
  }, [category, searchQuery, hasMore, loading]); // Add relevant dependencies

  useEffect(() => {
    if (categoryId) {
      setCategory(categoryId);
    }
    setVideos([]); // Reset videos on category change
    fetchVideos();
  }, [categoryId, fetchVideos]);

  useEffect(() => {
    setVideos([]); // Reset videos on search query change
    setHasMore(true);
    fetchVideos();
  }, [searchQuery, fetchVideos]);

  useEffect(() => {
    if (videoId) {
      const video = videoData.find((v) => v.id === videoId);
      if (video) {
        setSelectedVideo(video);
        localStorage.setItem("selectedVideo", JSON.stringify(video));
      }
    } else {
      setSelectedVideo(null);
      localStorage.removeItem("selectedVideo");
      setSuggestedVideos([]);
    }
  }, [videoId]);

  useEffect(() => {
    if (selectedVideo) {
      fetchSuggestedVideos();
    }
  }, [selectedVideo, fetchSuggestedVideos]);

  const handleCategorySelect = (newCategory) => {
    setCategory(newCategory);
    setVideos([]);
    setHasMore(true);
    navigate(`/video/${newCategory.toLowerCase()}`);
  };

  const handleVideoSelect = (video) => {
    if (selectedVideo && selectedVideo.id === video.id) return;

    setSelectedVideo(video);
    localStorage.setItem("selectedVideo", JSON.stringify(video));
    navigate(`/video/${category.toLowerCase()}/${video.id}`);
  };

  const handleBackToList = () => {
    setSelectedVideo(null);
    localStorage.removeItem("selectedVideo");
    setSuggestedVideos([]);
    navigate(`/video/${category.toLowerCase()}`);
  };

  const handleScroll = debounce(() => {
    if (
      window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2 &&
      !loading &&
      hasMore
    ) {
      fetchVideos();
    }
  }, 300);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <div className="video-gallery">
      {selectedVideo ? (
        <div className="video-detail">
          <button className="back-button" onClick={handleBackToList}>
            Back to List
          </button>
          <h1>{selectedVideo.title}</h1>
          <video key={selectedVideo.videoUrl} className="video-player" controls>
            <source src={selectedVideo.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Suggested Videos */}
          <div className="suggestions">
            <h2>Suggested Videos</h2>
            <div className="suggested-list">
              {suggestedVideos.length > 0 ? (
                suggestedVideos.map((video) => (
                  <div
                    key={video.id}
                    className="video-card"
                    onClick={() => handleVideoSelect(video)}
                  >
                    <img
                      className="video-thumbnail"
                      src={video.thumbnail || "https://via.placeholder.com/150"}
                      alt={video.title}
                    />
                    <h3 className="video-title">{video.title}</h3>
                  </div>
                ))
              ) : (
                <p>No suggestions available.</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Selector */}
          <div className="category-selector">
            {categories.map((cat) => (
              <div
                key={cat}
                className={`category-item ${category === cat ? "active" : ""}`}
                onClick={() => handleCategorySelect(cat)}
              >
                {cat}
              </div>
            ))}
          </div>

          {/* Video List */}
          <div className="video-list">
            {videos.map((video) => (
              <div
                key={video.id}
                className="video-card"
                onClick={() => handleVideoSelect(video)}
              >
                <img
                  className="video-thumbnail"
                  src={video.thumbnail || "https://via.placeholder.com/150"}
                  alt={video.title}
                />
                <h3 className="video-title">{video.title}</h3>
              </div>
            ))}
          </div>

          {loading && <div className="loading">Loading...</div>}
        </>
      )}
    </div>
  );
};

export default VideoG;
