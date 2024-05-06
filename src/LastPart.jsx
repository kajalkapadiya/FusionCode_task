import React from "react";
import RightArrow from "./assets/RightArrow";
import "./LastPart.css";

const LatPart = () => {
  return (
    <>
      <article className="LatPart" style={{ display: "flex" }}>
        <div className="lastPart_img">
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/40maT6HjV7m3W6O2g1bgVg/1d6cc93d4f5e5e7e019066815fb92c84/Aesop-Other-Digital-Gift-Card-Large.png"
            alt="Image"
          />
        </div>
        <div className="LatPart_inner ">
          <header>
            <h2>Eminently suited to all</h2>
          </header>
          <p>
            An Aesop Gift Card is the ideal gift for the fussy, the faraway and
            anyone in between—conveniently delivered with the click of a mouse
            to conceal last-minute selections.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #cfcec4",
            }}
          >
            <a>Purchase now</a>
            <span style={{ marginLeft: "3rem" }}>
              <RightArrow />
            </span>
          </div>
        </div>
      </article>
      <div className="quote">
        <blockquote aria-label="‘Your best and wisest refuge from all troubles is in your science.’  Ada Lovelace ">
          <p>
            ‘Your best and wisest refuge from all troubles is in your science.’ 
          </p>
          <footer>
            <cite>Ada Lovelace </cite>
          </footer>
        </blockquote>
      </div>
      <div className="quote_outerPart">
        <div className="quote_innerPart">
          <h2>Certified B Corp</h2>
          <p>
            We meet the highest verified standards of social and environmental
            performance, transparency and accountability.
          </p>
        </div>
        <div className="quote_innerPart">
          <h2>Leaping Bunny approved</h2>
          <p>
            Our formulations are approved as cruelty free under the Cruelty Free
            International Leaping Bunny programme.
          </p>
        </div>
        <div className="quote_innerPart">
          <h2>PETA recognition</h2>
          <p>
            We appear on PETA's internationally recognised vegan and
            cruelty-free lists.
          </p>
        </div>
      </div>
    </>
  );
};

export default LatPart;
