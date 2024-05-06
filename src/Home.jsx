import React, { useEffect, useState } from "react";
import images from "./images";
import "./home.css";
import Aesop from "./assets/Aesop";
import RightArrow from "./assets/RightArrow";
import LeftArrow from "./assets/LeftArrow";
import PauseBtn from "./assets/PauseBtn";
import ResumeBtn from "./assets/ResumeBtn";
import Rightsymbol from "./assets/Rightsymbol";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const fill_color = "#fffef2";

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const pauseSlider = () => {
    setIsPaused(true);
  };

  const resumeSlider = () => {
    setIsPaused(false);
  };

  useEffect(() => {
    let intervalId;
    if (!isPaused) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [currentIndex, isPaused]);

  return (
    <div className="slider-container">
      {/* Display current image */}

      <div
        className={`img_container ${
          currentIndex === 1 || currentIndex === 2 ? "special-width" : ""
        }`}
      >
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <div
            className="aesop_container"
            style={{ flex: currentIndex !== 0 ? "0 0 35%" : "1" }}
          >
            <Aesop currentIndex={currentIndex} />
          </div>
          {currentIndex === 0 && (
            <div className="image_content">
              <header>
                <h3>Mother's Day</h3>
                <h1>For the discerning</h1>
              </header>
              <div>
                <div>
                  <p>
                    Our range of products provides ample options for even the
                    most particular of gift-givers and recipients—fitting
                    choices to reciprocate maternal guidance.
                  </p>
                </div>
                <div className="ab_div">
                  <a
                    href="/hk/en/c/gift-guide/mothers-day/"
                    target="_self"
                    style={{ display: "flex" }}
                  >
                    <span>Discover Mother’s Day gifts</span>
                    <i aria-hidden="true" style={{ marginLeft: "1rem" }}>
                      <RightArrow fill_color={fill_color} />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          )}
          {currentIndex === 1 && (
            <div className="content_container">
              <header>
                <h3>Warm weather companions</h3>
                <h2>Exfoliating and Replenishing Duo</h2>
              </header>
              <div>
                <div>
                  <p>
                    Support the skin as humidity rises by polishing away dead
                    skin cells with a cream exfoliant and following with a
                    hydrating, refreshing gel-based masque twice weekly.
                  </p>
                </div>
                <div className="a_div">
                  <a
                    href="/hk/en/p/skin/treat-masque/exfoliating-and-replenishing-duo/"
                    target="_self"
                    style={{ display: "flex" }}
                  >
                    <span>Discover the duo</span>
                    <i style={{ marginLeft: "1rem" }}>
                      <RightArrow />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          )}
          {currentIndex === 2 && (
            <div
              className="content_container"
              style={{ flex: "1", width: "50%" }}
            >
              <header>
                <h3>Skin Care+</h3>
                <h2>Vitamin-enriched skin care</h2>
              </header>
              <div>
                <div>
                  <p>
                    With generous measures of efficacious botanicals and
                    skin-supportive ingredients, the Skin Care+ range was
                    designed to provide optimal replenishment.
                  </p>
                </div>
                <div className="a_div">
                  <a
                    href="/hk/en/c/skin/skin-care-plus-range/"
                    target="_self"
                    style={{ display: "flex" }}
                  >
                    <span>Discover the range</span>
                    <i style={{ marginLeft: "1rem" }}>
                      <RightArrow />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={
            currentIndex === 1 || currentIndex === 2 ? "special-image" : ""
          }
        />
      </div>

      {/* Navigation buttons */}
      <div className="slider-controls">
        <button className="left_btn" onClick={prevSlide}>
          <LeftArrow className="svg_btn" />
        </button>
        <span>
          {currentIndex}/ {images.length}
        </span>
        <button className="right_btn" onClick={nextSlide}>
          <Rightsymbol />
        </button>
        <button onClick={isPaused ? resumeSlider : pauseSlider}>
          {isPaused ? <PauseBtn /> : <ResumeBtn />}
        </button>
      </div>
    </div>
  );
};

export default Home;
