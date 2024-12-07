import React, { useState, useEffect, useRef } from "react";
import "../../styles/videoGallery/CustomVideoPlayer.css";

const CustomVideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1); // Range from 0 to 1
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Handle Play/Pause
  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Handle Mute/Unmute
  const handleMuteToggle = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    videoRef.current.muted = newMutedState;
  };

  // Handle Volume Change
  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
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

  // Handle Playbar Change (Scrubbing)
  const handlePlaybarChange = (event) => {
    const newTime = event.target.value;
    setCurrentTime(newTime);
    videoRef.current.currentTime = newTime;
  };

  // Update current time and duration
  const updatePlaybar = () => {
    setCurrentTime(videoRef.current.currentTime);
    setDuration(videoRef.current.duration);
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

    // Update playbar on time update
    videoRef.current.addEventListener("timeupdate", updatePlaybar);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
      videoRef.current.removeEventListener("timeupdate", updatePlaybar);
    };
  }, []);

  return (
    <div ref={playerRef} className="custom-video-player">
      <video ref={videoRef} className="video-element" src={videoUrl}></video>
      <div className="video-controls">
        <button onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={handleMuteToggle}>
          {isMuted ? "Unmute" : "Mute"}
        </button>

        <div className="volume-control">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>

        <div className="playbar-control">
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handlePlaybarChange}
          />
          <span>
            {Math.floor(currentTime)} / {Math.floor(duration)} sec
          </span>
        </div>

        <button onClick={handleFullscreen}>Fullscreen</button>
        <button onClick={handleExitFullscreen}>Exit Fullscreen</button>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
