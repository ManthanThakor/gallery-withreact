import React, { useEffect, useRef } from "react";
import "../../styles/videoGallery/CustomVideoPlayer.css";

const CustomVideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  // Handle Play/Pause
  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  // Handle Mute/Unmute
  const handleMuteToggle = () => {
    videoRef.current.muted = !videoRef.current.muted;
  };

  // Handle Fullscreen
  const handleFullscreen = () => {
    if (playerRef.current.requestFullscreen) {
      playerRef.current.requestFullscreen();
    } else if (playerRef.current.webkitRequestFullscreen) {
      playerRef.current.webkitRequestFullscreen();
    } else if (playerRef.current.mozRequestFullScreen) {
      playerRef.current.mozRequestFullScreen();
    } else if (playerRef.current.msRequestFullscreen) {
      playerRef.current.msRequestFullscreen();
    }
  };

  // Handle Exit Fullscreen
  const handleExitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  // Handle Escape key to exit fullscreen
  const handleEscapeKey = (event) => {
    if (event.key === "Escape") {
      handleExitFullscreen();
    }
  };

  useEffect(() => {
    // Add event listener for Escape key
    window.addEventListener("keydown", handleEscapeKey);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <div ref={playerRef} className="custom-video-player">
      <video ref={videoRef} className="video-element" src={videoUrl}></video>
      <div className="video-controls">
        <button onClick={handlePlayPause}>Play/Pause</button>
        <button onClick={handleMuteToggle}>Mute/Unmute</button>
        <button onClick={handleFullscreen}>Fullscreen</button>
        <button onClick={handleExitFullscreen}>Exit Fullscreen</button>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
