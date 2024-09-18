import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/videoGallery/VideoGallery.css";
import videoData from "./videoData.json";

const categories = ["Trending", "18+"]; // Removed "All" category
const VIDEOS_PER_LOAD = 12; // Load 12 videos at a time

const VideoG = () => {
  const { categoryId, videoId } = useParams();
  const navigate = useNavigate();

  const [videos, setVideos] = useState([]);
  const [category, setCategory] = useState(categoryId || categories[0]); // Default to the first category
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(() => {
    const storedVideo = localStorage.getItem("selectedVideo");
    return storedVideo ? JSON.parse(storedVideo) : null;
  });
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Keep track of pagination
  const observerRef = useRef(); // Ref for the intersection observer

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
    const filteredVideos = videoData
      .filter((video) => {
        const matchesCategory = video.category.includes(category);
        const matchesSearchQuery = video.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearchQuery;
      })
      .slice(0, currentPage * VIDEOS_PER_LOAD); // Fetch only required number of videos

    setVideos(filteredVideos);
  }, [category, searchQuery, currentPage]);

  useEffect(() => {
    if (categoryId) {
      setCategory(categoryId);
    }
    setCurrentPage(1); // Reset page when category changes
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

  // Infinite scrolling logic using Intersection Observer
  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    const lastVideoElement = document.querySelector(".video-card:last-child");

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("Last video is visible, loading more videos...");
          setCurrentPage((prevPage) => prevPage + 1); // Increment page
        }
      },
      { threshold: 1.0 }
    );

    if (lastVideoElement) {
      observerRef.current.observe(lastVideoElement);
    } else {
      console.log("No last video element found.");
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [videos]);

  // Add a console.log to check how videos are updating
  useEffect(() => {
    console.log("Current page:", currentPage);
    console.log("Videos after fetching:", videos);
  }, [videos, currentPage]);

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
        </>
      )}
    </div>
  );
};

export default VideoG;
