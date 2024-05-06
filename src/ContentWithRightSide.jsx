import React from "react";
import RightArrow from "./assets/RightArrow";
import "./ContentWithRightSide.css";

const ContentWithRightSide = () => {
  return (
    <article className="ContentWithRightSide" style={{ display: "flex" }}>
      <div className="img-container">
        <img
          src="https://www.aesop.com/u1nb1km7t5q7/33jC1RNNiSeYosSCN0cKiC/1421c9199c986832eb2120251deb0759/Aesop_Gifting_2024_Web_Homepage_Secondary_Gift_Guide_GL_Mid_Desktop_2560x1440px.jpg"
          alt="Image"
          style={{ width: "100%" }}
        />
      </div>
      <div className="ContentWithRightSide_inner ">
        <header>
          <h3>Options, streamlined</h3>
          <h2>The Gift Finder</h2>
        </header>
        <p>
          This practical and playful tool designed to aid in choosing a suitable
          offering allows the range to be sorted according to a variety of
          criteria.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #cfcec4",
            justifyContent: "center",
          }}
        >
          <a>Discover the Gift Finder</a>
          <span>
            <RightArrow />
          </span>
        </div>
      </div>
    </article>
  );
};

export default ContentWithRightSide;
