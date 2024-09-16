import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/videoGallery/VideoGallery.css";
import videoData from "./videoData.json";

const categories = ["All", "Trending", "18+"];

const VideoG = () => {
  const { categoryId } = useParams(); // Get category from URL
  const [videos, setVideos] = useState([]);
  const [category, setCategory] = useState(categoryId || "All");
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const fetchVideos = useCallback(() => {
    setLoading(true);

    // Fetch videos based on category and search query
    const filteredVideos = videoData.filter((video) => {
      const matchesCategory =
        category === "All" || video.category.includes(category);
      const matchesSearchQuery = video.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearchQuery;
    });

    setVideos(filteredVideos);
    setLoading(false);
    setHasMore(filteredVideos.length > 0);
  }, [category, searchQuery]);

  useEffect(() => {
    setVideos([]); // Reset videos when category changes
    setHasMore(true);
    setSelectedVideo(null);
    setSuggestedVideos([]);
    fetchVideos();
  }, [category, fetchVideos]);

  useEffect(() => {
    if (categoryId) {
      setCategory(categoryId);
      setVideos([]); // Reset videos
      setHasMore(true);
    }
  }, [categoryId]);

  useEffect(() => {
    setVideos([]); // Clear videos on search query change
    setHasMore(true);
    fetchVideos();
  }, [searchQuery, fetchVideos]);

  const handleCategorySelect = (newCategory) => {
    setVideos([]); // Clear current videos
    setHasMore(true);
    navigate(`/video/${newCategory.toLowerCase()}`);
  };

  const handleVideoSelect = (video) => {
    if (selectedVideo && selectedVideo.id === video.id) return;

    setSelectedVideo(video);
    navigate(`/video/${category.toLowerCase()}/${video.id}`);
    fetchSuggestedVideos(video.category, video.id);
  };

  const handleBackToList = () => {
    setSelectedVideo(null);
    setSuggestedVideos([]);
    navigate(`/video/${category.toLowerCase()}`);
  };

  const fetchSuggestedVideos = (category, excludeVideoId) => {
    if (!category) return;
    const suggested = videoData
      .filter(
        (video) =>
          video.category.includes(category) && video.id !== excludeVideoId
      )
      .slice(0, 5);
    setSuggestedVideos(suggested);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2 &&
      !loading &&
      hasMore
    ) {
      fetchVideos(); // Fetch more videos when the user scrolls to the bottom
    }
  };

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
          <video className="video-player" controls>
            <source src={selectedVideo.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Suggested Videos */}
          <div className="suggestions">
            <h2>Suggested Videos</h2>
            <div className="suggested-list">
              {suggestedVideos.map((video) => (
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
