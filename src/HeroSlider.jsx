import React, { useRef } from "react";
import "./hero.css";
import RightArrow from "./assets/RightArrow";
import items from "./items";
import LeftArrow from "./assets/LeftArrow";
import Rightsymbol from "./assets/Rightsymbol";

const HeroSlider = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 100;
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += 100;
  };
  return (
    <>
      <div className="Hero_container">
        <button className="slider_button" onClick={scrollLeft}>
          <LeftArrow />
        </button>
        <div className="slider" ref={sliderRef}>
          <div className="slider_inner">
            <div className="leftSide">
              <h3>Sun Care and SPF</h3>
              <h2>Pair time in the sun with intelligent care</h2>
              <p>
                Daily protection from damaging UVA and UVB sun rays is key to
                sustaining healthy, supple skin. In addition to protection,
                Aesop SPF formulations deliver hydration and skin-softening
                nourishment.
              </p>
              <a href="/hk/en/c/skin/skin-care-plus-range/" target="_self">
                Browse formulations
                <i aria-hidden="true">
                  <RightArrow />
                </i>
              </a>
            </div>
            {items.map((slide, index) => (
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
      {/* <div className="Pagination">
        <div className="Pagination_list">
          <div
            className="Pagination_bar"
            // style={{ width: "16.6667%", left: `${paginationPosition}%` }}
          ></div>
        </div>
      </div>
       */}
    </>
  );
};

export default HeroSlider;
