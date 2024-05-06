import React, { useEffect, useRef, useState } from "react";
import "./hero.css";
import RightArrow from "./assets/RightArrow";
import slides from "./slides";
import LeftArrow from "./assets/LeftArrow";
import Rightsymbol from "./assets/Rightsymbol";

const Hero = () => {
  const sliderRef = useRef(null);
  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 100;
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += 100;
  };
  return (
    <>
      <div className="leftSide_responsive">
        <h3>Skin Care+</h3>
        <h2>Intensive formulations for complex skin</h2>
        <p>
          Explore products formulated with mature skin and urban dwellers in
          mind, to provide daily hydration and the additional benefit of potent
          vitamins and anti-oxidants.
        </p>
        <a
          href="/hk/en/c/skin/skin-care-plus-range/"
          target="_self"
          style={{ display: "flex" }}
        >
          <span> Browse formulations</span>
          <i aria-hidden="true" style={{ marginLeft: "2rem" }}>
            <RightArrow />
          </i>
        </a>
      </div>
      <div className="Hero_container">
        <button className="slider_button" onClick={scrollLeft}>
          <LeftArrow />
        </button>
        <div className="slider" ref={sliderRef}>
          <div className="slider_inner">
            <div className="leftSide">
              <h3>Skin Care+</h3>
              <h2>Intensive formulations for complex skin</h2>
              <p>
                Explore products formulated with mature skin and urban dwellers
                in mind, to provide daily hydration and the additional benefit
                of potent vitamins and anti-oxidants.
              </p>
              <a href="/hk/en/c/skin/skin-care-plus-range/" target="_self">
                Browse formulations
                <i aria-hidden="true">
                  <RightArrow />
                </i>
              </a>
            </div>
            {slides.map((slide, index) => (
              <div className="item_container" key={index}>
                <img src={slide.imgSrc} alt={slide.title} />
                <div className="item" style={{ padding: "0 2rem" }}>
                  <h5>{slide.title}</h5>
                  <div>{slide.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="slider_button" onClick={scrollRight}>
          <Rightsymbol />
        </button>
      </div>
    </>
  );
};

export default Hero;
