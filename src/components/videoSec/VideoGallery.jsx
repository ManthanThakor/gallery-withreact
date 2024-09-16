import React, { useState, useEffect, useCallback } from "react";
import "../../styles/videoGallery/VideoGallery.css";
import videoData from "./videoData.json"; // Import local JSON data

const categories = ["All", "Trending", "18+"];

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Fetch videos based on category and pagination
  const fetchVideos = useCallback(() => {
    setLoading(true);
    const filteredVideos = videoData.filter(
      (video) => category === "All" || video.category === category.toLowerCase()
    );
    const newVideos = filteredVideos.slice((page - 1) * 5, page * 5);

    // Avoid duplicates by filtering already loaded videos
    setVideos((prevVideos) => {
      const uniqueVideos = newVideos.filter(
        (video) => !prevVideos.some((prevVideo) => prevVideo.id === video.id)
      );
      return [...prevVideos, ...uniqueVideos];
    });

    setLoading(false);
    if (newVideos.length === 0) {
      setHasMore(false);
    }
  }, [category, page]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  const handleCategorySelect = (newCategory) => {
    setCategory(newCategory);
    setVideos([]); // Reset videos when category changes
    setPage(1); // Reset page when category changes
    setHasMore(true); // Reset infinite scroll flag
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading ||
      !hasMore
    )
      return;
    setPage((prevPage) => prevPage + 1); // Load more videos on scroll
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <div className="video-gallery">
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
          <div key={video.id} className="video-card">
            {/* Thumbnail */}
            {video.thumbnail ? (
              <img
                className="video-thumbnail"
                src={video.thumbnail}
                alt={video.title}
              />
            ) : (
              <img
                className="video-thumbnail"
                src="https://via.placeholder.com/150" // Fallback thumbnail
                alt="Default thumbnail"
              />
            )}
            <h3>{video.title}</h3>
            {video.videoUrl.includes("youtube.com") ? (
              <iframe
                className="iframe-sec"
                src={`https://www.youtube.com/embed/${
                  video.videoUrl.split("v=")[1]
                }`}
                title={video.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            ) : (
              <video className="videosec" controls>
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>

      {loading && <div className="loading">Loading...</div>}
    </div>
  );
};

export default VideoGallery;
