import React from "react";
import RightArrow from "./assets/RightArrow";
import "./ContentWithRightSide.css";

const ContentWithRightHtml = () => {
  return (
    <article className="ContentWithRightSide" style={{ display: "flex" }}>
      <div className="img-container">
        <img
          src="https://www.aesop.com/u1nb1km7t5q7/6a0rFYweQvQusUfEHpowUJ/32611c5a1ea838756fd635261d88d2db/Aesop-Generic-Images-Facial-Appointments-1-Mid-Desktop-2560x1440px.jpg"
          alt="Image"
          style={{ width: "100%" }}
        />
      </div>
      <div className="ContentWithRightSide_inner ">
        <header>
          <h3>Facial Appointments</h3>
          <h2>Composure for the skin and senses</h2>
        </header>
        <p>
          For a well-rounded skin care regimen, Aesop Facial Appointments offer
          a series of treatments tailored to balance, stimulate and intensely
          nourish the skin.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #cfcec4",
            justifyContent: "center",
          }}
        >
          <a>Learn more</a>
          <span
            style={{
              marginLeft: "3rem",
            }}
          >
            <RightArrow />
          </span>
        </div>
      </div>
    </article>
  );
};

export default ContentWithRightHtml;
