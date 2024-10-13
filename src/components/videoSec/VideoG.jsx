import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/videoGallery/VideoGallery.css";
import videoData from "./videoData.json";

const categories = ["Trending", "18+", "3D", "Wallpaper"];
const VIDEOS_PER_PAGE = 12;
const VIDEO_QUALITY_OPTIONS = ["video_480p", "video_720p", "video_1080p"];

const VideoG = () => {
  const { categoryId, videoId } = useParams();
  const navigate = useNavigate();

  const [videos, setVideos] = useState([]);
  const [category, setCategory] = useState(categoryId || categories[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(() => {
    const storedVideo = localStorage.getItem("selectedVideo");
    return storedVideo ? JSON.parse(storedVideo) : null;
  });
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedQuality, setSelectedQuality] = useState("video_720p");

  const fetchSuggestedVideos = useCallback(() => {
    if (!selectedVideo) return;

    const suggested = videoData.filter(
      (video) =>
        video.category === selectedVideo.category &&
        video.id !== selectedVideo.id
    );

    setSuggestedVideos(suggested);
  }, [selectedVideo]);

  const fetchVideos = useCallback(() => {
    const filteredVideos = videoData.filter((video) => {
      const matchesCategory = video.category.includes(category);
      const matchesSearchQuery = video.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearchQuery;
    });

    const totalPages = Math.ceil(filteredVideos.length / VIDEOS_PER_PAGE);
    setTotalPages(totalPages);

    const paginatedVideos = filteredVideos.slice(
      (currentPage - 1) * VIDEOS_PER_PAGE,
      currentPage * VIDEOS_PER_PAGE
    );

    setVideos(paginatedVideos);
  }, [category, searchQuery, currentPage]);

  useEffect(() => {
    if (categoryId) {
      setCategory(categoryId);
    }
    setCurrentPage(1);
  }, [categoryId]);

  useEffect(() => {
    fetchVideos();
  }, [searchQuery, currentPage, fetchVideos]);

  useEffect(() => {
    if (videoId) {
      const video = videoData.find((v) => v.id === Number(videoId));
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
    setCurrentPage(1);
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

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleQualityChange = (event) => {
    setSelectedQuality(event.target.value);
  };

  return (
    <div className="video-gallery">
      {selectedVideo ? (
        <div className="video-detail">
          <button className="back-button" onClick={handleBackToList}>
            Back to List
          </button>
          <h1>{selectedVideo.title}</h1>

          {/* Video Quality Selector */}
          <div className="quality-selector">
            <label htmlFor="video-quality">Select Quality: </label>
            <select
              id="video-quality"
              value={selectedQuality}
              onChange={handleQualityChange}
            >
              {VIDEO_QUALITY_OPTIONS.map((quality) => (
                <option key={quality} value={quality}>
                  {quality.replace("video_", "")}
                </option>
              ))}
            </select>
          </div>

          {/* Update video key to force re-render */}
          <video
            key={selectedVideo.id + selectedQuality} // Change key to force re-render
            className="video-player"
            controls
          >
            <source src={selectedVideo[selectedQuality]} type="video/mp4" />
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

          {/* Pagination Controls */}
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
        </>
      )}
    </div>
  );
};

export default VideoG;
