import React, { useState } from "react";
import "../../styles/home/feature.css";

const images = {
  experience:
    "https://c4.wallpaperflare.com/wallpaper/439/731/824/anime-girls-hatsune-miku-moon-night-wallpaper-preview.jpg",
  teams:
    "https://w0.peakpx.com/wallpaper/43/751/HD-wallpaper-anime-hot-girl-girl-long-hair-anime-sexy.jpg",
  nft: "https://images-ng.pixai.art/images/orig/2339688a-b1b0-4646-9091-aea5bc17d834",
  client:
    "https://cdn.openart.ai/published/O7hlELWxavNomkJTpUvZ/tz8hI6Uy_iDRO_1024.webp",
};

const Feature = () => {
  const [currentImage, setCurrentImage] = useState(images.experience);

  return (
    <div className="container">
      <div className="feature-leftside">
        <div className="header">
          <div className="title-fe">POWERFUL SERVICES</div>
          <div className="subtitle">OUR POWERFUL SERVICES DONE ON TIME</div>
          <div className="underline"></div>
        </div>
        <div className="content">
          <div className="feature-1">
            <div
              className="service"
              onMouseEnter={() => setCurrentImage(images.experience)}
            >
              <div className="icon">
                <i className="fas fa-gem"></i>
              </div>
              <div className="title">Year Experience</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis
                eleifend sollicitudin is aue euismods.
              </div>
            </div>
            <div
              className="service"
              onMouseEnter={() => setCurrentImage(images.teams)}
            >
              <div className="icon">
                <i className="fas fa-user-cog"></i>
              </div>
              <div className="title">Expert Teams</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis
                eleifend sollicitudin is aue euismods.
              </div>
            </div>
          </div>
          <div className="feature-2">
            <div
              className="service"
              onMouseEnter={() => setCurrentImage(images.nft)}
            >
              <div className="icon">
                <i className="fas fa-coins"></i>
              </div>
              <div className="title">Best NFT Game</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis
                eleifend sollicitudin is aue euismods.
              </div>
            </div>
            <div
              className="service"
              onMouseEnter={() => setCurrentImage(images.client)}
            >
              <div className="icon">
                <i className="fas fa-globe-americas"></i>
              </div>
              <div className="title">Worldwide Client</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis
                eleifend sollicitudin is aue euismods.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-rightside">
        <div className="image">
          <img src={currentImage} alt="Service Image" className="fade" />
          <div className="download">
            <i className="fas fa-download"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
