import React from "react";
import RightArrow from "./assets/RightArrow";
import "./ContentWithImage.css";

const ContentWithImage = () => {
  return (
    <article className="contentWithImage" style={{ display: "flex" }}>
      <div className="contentWithImage_inner ">
        <header>
          <h3>A seasonal offer</h3>
          <h2>Experience Karst Eau de Parfum</h2>
        </header>
        <p>
          In celebration of balmy summer days, receive a complimentary vial of
          fresh, herbaceous, marine Karst Eau de Parfum with the purchase of two
          eligible formulations. (Excludes Click and Collect.)
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #cfcec4",
            justifyContent: "center",
          }}
        >
          <a>Explore summer formulations</a>
          <span style={{ marginLeft: "2rem" }}>
            <RightArrow />
          </span>
        </div>
      </div>
      <div className="img-container">
        <img
          src="https://www.aesop.com/u1nb1km7t5q7/3UWzrNrjTbNjBomL9WkVaS/4aa0066ec853b88cfc0bd209174785c2/Aesop_Travel_2023_Web_Landing_Page_2_Secondary_Mid_Desktop_2560x1440px.jpg"
          alt="Image"
          style={{ width: "100%" }}
        />
      </div>
    </article>
  );
};

export default ContentWithImage;
