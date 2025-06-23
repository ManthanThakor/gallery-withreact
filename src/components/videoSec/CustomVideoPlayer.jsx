import React, { useEffect, useRef, useState } from "react";
import dashjs from "dashjs";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaExpand,
  FaCompress,
  FaCog,
} from "react-icons/fa";
import "../../styles/videoGallery/CustomVideoPlayer.css";

const CustomVideoPlayer = ({ videoData }) => {
  const { videoUrl, type } = videoData;
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const dashPlayerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isControlsVisible, setIsControlsVisible] = useState(true);
  const [bitrates, setBitrates] = useState([]);
  const [currentQuality, setCurrentQuality] = useState(-1); // -1 for auto
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (type === "DASH") {
      const player = dashjs.MediaPlayer().create();
      dashPlayerRef.current = player;
      player.initialize(videoElement, videoUrl, true);
      player.on(dashjs.MediaPlayer.events.STREAM_INITIALIZED, () => {
        const audioBitrates = player.getBitrateInfoListFor("audio");
        const videoBitrates = player.getBitrateInfoListFor("video");
        if (videoBitrates.length > 1) {
          setBitrates(videoBitrates.map((b) => b.height));
        }
      });
    } else {
      videoElement.src = videoUrl;
    }

    const handleTimeUpdate = () => {
      setCurrentTime(videoElement.currentTime);
      setDuration(videoElement.duration);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    videoElement.addEventListener("timeupdate", handleTimeUpdate);
    videoElement.addEventListener("play", handlePlay);
    videoElement.addEventListener("pause", handlePause);

    return () => {
      if (dashPlayerRef.current) {
        dashPlayerRef.current.reset();
      }
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      videoElement.removeEventListener("play", handlePlay);
      videoElement.removeEventListener("pause", handlePause);
    };
  }, [videoUrl, type]);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleProgressChange = (e) => {
    const newTime = parseFloat(e.target.value);
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(timeInSeconds % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      playerRef.current.requestFullscreen().catch((err) => {
        alert(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleQualityChange = (qualityIndex) => {
    if (dashPlayerRef.current) {
      dashPlayerRef.current.updateSettings({
        streaming: {
          abr: {
            autoSwitchBitrate: {
              video: qualityIndex === -1,
            },
          },
        },
      });
      if (qualityIndex !== -1) {
        dashPlayerRef.current.setQualityFor("video", qualityIndex, true);
      }
      setCurrentQuality(qualityIndex);
    }
    setIsSettingsVisible(false);
  };

  let hideControlsTimeout;
  const handleMouseMove = () => {
    setIsControlsVisible(true);
    clearTimeout(hideControlsTimeout);
    hideControlsTimeout = setTimeout(() => {
      if (isPlaying) {
        setIsControlsVisible(false);
        setIsSettingsVisible(false);
      }
    }, 3000);
  };

  return (
    <div
      ref={playerRef}
      className="video-player-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        clearTimeout(hideControlsTimeout);
        if (isPlaying) {
          setIsControlsVisible(false);
          setIsSettingsVisible(false);
        }
      }}
    >
      <video
        ref={videoRef}
        className="video-player"
        onClick={togglePlayPause}
      />

      <div className={`controls-overlay ${isControlsVisible ? "visible" : ""}`}>
        <div className="progress-bar-container">
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleProgressChange}
            className="progress-bar"
          />
        </div>

        <div className="controls-bar">
          <div className="controls-left">
            <button onClick={togglePlayPause} className="control-button">
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <div className="volume-container">
              <button onClick={toggleMute} className="control-button">
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider"
              />
            </div>
            <span className="time-display">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
          <div className="controls-right">
            {bitrates.length > 0 && (
              <div className="settings-container">
                <button
                  onClick={() => setIsSettingsVisible(!isSettingsVisible)}
                  className="control-button"
                >
                  <FaCog />
                </button>
                {isSettingsVisible && (
                  <ul className="quality-menu">
                    <li
                      className={currentQuality === -1 ? "active" : ""}
                      onClick={() => handleQualityChange(-1)}
                    >
                      Auto
                    </li>
                    {bitrates.map((quality, index) => (
                      <li
                        key={quality}
                        className={currentQuality === index ? "active" : ""}
                        onClick={() => handleQualityChange(index)}
                      >
                        {quality}p
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            <button onClick={toggleFullscreen} className="control-button">
              {isFullscreen ? <FaCompress /> : <FaExpand />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
