import React from "react";
import "../../styles/home/feature.css";
const Feature = () => {
  return (
    <>
      <div className="container">
        <div className="feature-leftside">
          <div className="header">
            <div className="title">POWERFUL SERVICES</div>
            <div className="subtitle">OUR POWERFUL SERVICES DONE ON TIME</div>
            <div className="underline"></div>
          </div>
          <div className="content">
            <div className="feature-1">
              <div className="service">
                <div className="icon">
                  <i className="fas fa-gem"></i>
                </div>
                <div className="title">Year Experience</div>
                <div className="description">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis
                  eleifend sollicitudin is aue euismods.
                </div>
              </div>
              <div className="service">
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
              <div className="service">
                <div className="icon">
                  <i className="fas fa-coins"></i>
                </div>
                <div className="title">Best NFT Game</div>
                <div className="description">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis
                  eleifend sollicitudin is aue euismods.
                </div>
              </div>
              <div className="service">
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
            <img src="https://picsum.photos/id/1015/800/600" alt="Game Image" />
            <div className="download">
              <i className="fas fa-download"></i>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Feature;
