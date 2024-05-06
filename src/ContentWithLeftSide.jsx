import React from "react";
import RightArrow from "./assets/RightArrow";
import "./ContentWithImage.css";

const ContentWithLeftSide = () => {
  return (
    <article className="contentWithImage" style={{ display: "flex" }}>
      <div className="contentWithImage_inner ">
        <header>
          <h3>High time for high coverage</h3>
          <h2>Protective Facial Lotion SPF50</h2>
        </header>
        <p>
          Introducing a daily-use formulation offering broad-spectrum UV
          protection and sustained hydration—come rain or shine.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a>Discover Protective Facial Lotion SPF50</a>
          <span style={{ marginLeft: "3rem" }}>
            <RightArrow />
          </span>
        </div>
      </div>
      <div className="img-container">
        <img
          src="https://www.aesop.com/u1nb1km7t5q7/6fNN0BAQNyzP9A9eOwmcaE/cb660d194f4078aa1e4e09b2da3983d5/Aesop_SPF50_2023_Web_Homepage_Secondary_Mid_Desktop_2560x1440px.jpg"
          alt="Image"
          style={{ width: "100%" }}
        />
      </div>
    </article>
  );
};

export default ContentWithLeftSide;
