import React, { useState } from "react";
import { IonIcon } from "react-ion-icon";
import "../styles/home/Slider.css";
const Hslide = () => {
  const [items, setItems] = useState([
    {
      title: "Lossless Youths",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      imageUrl: "https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg",
    },
    {
      title: "Estrange Bond",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      imageUrl: "https://i.redd.it/tc0aqpv92pn21.jpg",
    },
    {
      title: "The Gate Keeper",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      imageUrl: "https://wharferj.files.wordpress.com/2015/11/bio_north.jpg",
    },
    {
      title: "Last Trace Of Us",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      imageUrl: "https://images7.alphacoders.com/878/878663.jpg",
    },
    {
      title: "Urban Decay",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      imageUrl:
        "https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg",
    },
    {
      title: "The Migration",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      imageUrl: "https://da.se/app/uploads/2015/09/simon-december1994.jpg",
    },
  ]);

  const handleNext = () => {
    setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
  };

  const handlePrev = () => {
    setItems((prevItems) => [
      prevItems[prevItems.length - 1],
      ...prevItems.slice(0, prevItems.length - 1),
    ]);
  };

  return (
    <main>
      <ul className="slider">
        {items.map((item, index) => (
          <li
            key={index}
            className={`item ${index === 1 ? "active" : ""}`}
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            <div className="content">
              <h2 className="title">{item.title}</h2>
              <p className="description">{item.description}</p>
              <button>Read More</button>
            </div>
          </li>
        ))}
      </ul>
      <nav className="nav">
        <IonIcon
          className="btn prev"
          name="arrow-back-outline"
          onClick={handlePrev}
        />
        <IonIcon
          className="btn next"
          name="arrow-forward-outline"
          onClick={handleNext}
        />
      </nav>
    </main>
  );
};

export default Hslide;
