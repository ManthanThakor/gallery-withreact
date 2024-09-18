import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/videoGallery/VideoGallery.css";
import videoData from "./videoData.json";

const categories = ["Trending", "18+"];
const VIDEOS_PER_PAGE = 12; // Number of videos per page

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
  const [totalPages, setTotalPages] = useState(1); // Total pages for pagination

  // Fetch suggested videos based on the selected video's category
  const fetchSuggestedVideos = useCallback(() => {
    if (!selectedVideo) return;

    const suggested = videoData.filter(
      (video) =>
        video.category === selectedVideo.category &&
        video.id !== selectedVideo.id
    );

    setSuggestedVideos(suggested);
  }, [selectedVideo]);

  // Fetch videos for the selected category and search query
  const fetchVideos = useCallback(() => {
    const filteredVideos = videoData.filter((video) => {
      const matchesCategory = video.category.includes(category);
      const matchesSearchQuery = video.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearchQuery;
    });

    // Calculate pagination details
    const totalPages = Math.ceil(filteredVideos.length / VIDEOS_PER_PAGE);
    setTotalPages(totalPages);

    // Fetch only videos for the current page
    const paginatedVideos = filteredVideos.slice(
      (currentPage - 1) * VIDEOS_PER_PAGE,
      currentPage * VIDEOS_PER_PAGE
    );

    console.log("Fetched videos:", paginatedVideos); // Debugging line
    setVideos(paginatedVideos);
  }, [category, searchQuery, currentPage]);

  useEffect(() => {
    if (categoryId) {
      setCategory(categoryId);
    }
    setCurrentPage(1); // Reset to the first page when category changes
    fetchVideos();
  }, [categoryId, fetchVideos]);

  useEffect(() => {
    fetchVideos();
  }, [searchQuery, currentPage, fetchVideos]);

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
    setCurrentPage(1); // Reset to the first page when category changes
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
