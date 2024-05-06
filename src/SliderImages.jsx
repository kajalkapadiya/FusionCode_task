import React, { useState } from "react";
import RightArrow from "./assets/RightArrow";
import LeftArrow from "./assets/LeftArrow";
import "./ContentWithImage.css";
import "./sliderImages.css";

const SliderImages = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://www.aesop.com/u1nb1km7t5q7/5oGiDiVFqrGsMNB5GQlJPf/78b7bd491f8d163a6f414feb7986fb79/Aesop_Hollywood_Road_II_Hero_Bleed_Tablet_1536x864px.jpg",
    "https://www.aesop.com/u1nb1km7t5q7/1wOORxVBCv4oCWaBXOWsio/c4ddbbc742fe7b9b9a56ae95b0f89cb7/Aesop_MO_Stores_DFS_Macau_Four_Seasons_Hero_Bleed_Tablet_1536x864px.jpg",
    "https://www.aesop.com/u1nb1km7t5q7/3bTY5Dirb1wghMMd0LDlN2/c0355e488ce9468a68d7f723d5c82754/Aesop_Fashion_Walk_II_Hero_Bleed_Tablet_1536x864px.jpg",
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <article className="contentWithImage" style={{ display: "flex" }}>
      <div className="contentWithImage_inner ">
        <header>
          <h2>Store locator</h2>
        </header>
        <p>
          Our consultants are available to host you in-store and provide
          tailored guidance on gift purchases.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a>Find a nearby store</a>
          <span style={{ marginLeft: "3rem" }}>
            <RightArrow />
          </span>
        </div>
      </div>
      <div className="img-container">
        <button className="slider-button left" onClick={prevSlide}>
          <LeftArrow />
        </button>
        <button className="slider-button right" onClick={nextSlide}>
          <RightArrow />
        </button>
        <img
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          style={{ width: "100%" }}
        />
      </div>
    </article>
  );
};

export default SliderImages;
