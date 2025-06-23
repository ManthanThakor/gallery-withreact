import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/videoGallery/VideoGallery.css";
import initialVideoData from "./videoData.json";
import CustomVideoPlayer from "./CustomVideoPlayer";
import { FaSearch, FaPlay } from "react-icons/fa";

const categories = ["Trending", "18+", "3D", "Wallpaper"];
const VIDEOS_PER_PAGE = 12;

const VideoG = () => {
  const { categoryId, videoId } = useParams();
  const navigate = useNavigate();

  const [videoData, setVideoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(
    categoryId || categories[0]
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    // Simulate fetching data
    setTimeout(() => {
      setVideoData(initialVideoData);
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (categoryId) {
      setActiveCategory(categoryId);
      setCurrentPage(1);
    }
  }, [categoryId]);

  useEffect(() => {
    if (videoId && videoData.length > 0) {
      const video = videoData.find((v) => v.id === parseInt(videoId));
      setSelectedVideo(video || null);
    } else {
      setSelectedVideo(null);
    }
  }, [videoId, videoData]);

  const filteredVideos = useMemo(() => {
    return videoData
      .filter((video) => {
        const matchesCategory = video.category
          .toLowerCase()
          .includes(activeCategory.toLowerCase());
        const matchesSearchQuery = video.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearchQuery;
      })
      .sort((a, b) => a.id - b.id);
  }, [videoData, activeCategory, searchQuery]);

  const paginatedVideos = useMemo(() => {
    const startIndex = (currentPage - 1) * VIDEOS_PER_PAGE;
    return filteredVideos.slice(startIndex, startIndex + VIDEOS_PER_PAGE);
  }, [filteredVideos, currentPage]);

  const totalPages = Math.ceil(filteredVideos.length / VIDEOS_PER_PAGE);

  const handleCategorySelect = (category) => {
    navigate(`/video/${category}`);
  };

  const handleVideoSelect = (video) => {
    navigate(`/video/${activeCategory}/${video.id}`);
  };

  const handleBackToList = () => {
    navigate(`/video/${activeCategory}`);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const suggestedVideos = useMemo(() => {
    if (!selectedVideo) return [];
    return videoData
      .filter(
        (v) =>
          v.category === selectedVideo.category && v.id !== selectedVideo.id
      )
      .slice(0, 5); // Limit suggestions
  }, [selectedVideo, videoData]);

  if (selectedVideo) {
    return (
      <div className="video-detail-page">
        <div className="video-player-section">
          <button className="back-button" onClick={handleBackToList}>
            &larr; Back to Gallery
          </button>
          <CustomVideoPlayer videoData={selectedVideo} />
          <h1 className="video-detail-title">{selectedVideo.title}</h1>
        </div>
        <div className="suggestions-section">
          <h2>Suggested Videos</h2>
          <div className="suggested-list">
            {suggestedVideos.length > 0 ? (
              suggestedVideos.map((video) => (
                <div
                  key={video.id}
                  className="suggested-video-card"
                  onClick={() => handleVideoSelect(video)}
                >
                  <img
                    className="suggested-video-thumbnail"
                    src={video.thumbnail}
                    alt={video.title}
                  />
                  <h3 className="suggested-video-title">{video.title}</h3>
                </div>
              ))
            ) : (
              <p>No suggestions available.</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="video-gallery-container">
      <div className="gallery-header">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search videos..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
        <div className="category-selector">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-item ${
                activeCategory === cat ? "active" : ""
              }`}
              onClick={() => handleCategorySelect(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {isLoading ? (
        <div className="loading-spinner"></div>
      ) : paginatedVideos.length > 0 ? (
        <>
          <div className="video-list">
            {paginatedVideos.map((video) => (
              <div
                key={video.id}
                className="video-card"
                onClick={() => handleVideoSelect(video)}
              >
                <div className="thumbnail-container">
                  <img
                    className="video-thumbnail"
                    src={video.thumbnail}
                    alt={video.title}
                  />
                  <div className="play-icon-overlay">
                    <FaPlay />
                  </div>
                </div>
                <h3 className="video-title">{video.title}</h3>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination-controls">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`pagination-button ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </>
      ) : (
        <p className="no-videos-message">
          No videos found. Try another search or category.
        </p>
      )}
    </div>
  );
};

export default VideoG;
