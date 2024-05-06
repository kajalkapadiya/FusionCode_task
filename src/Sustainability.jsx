import React from "react";
import "./order.css";

const Sustainability = () => {
  return (
    <>
      <h3 className="order">Sustainability</h3>
      <div style={{ borderBottom: "1px solid #fffef2" }}></div>
      <ul style={{ paddingLeft: "0", margin: "0", listStyle: "none" }}>
        <li style={{ paddingTop: "2rem" }}>
          <span style={{ color: "#fffef2", fontSize: "1.5rem" }}>
            All Aesop products are vegan, and we do not test our formulations or
            ingredients on animals. We are Leaping Bunny approved and a
            Certified B Corporation. Learn more
          </span>
        </li>
      </ul>
    </>
  );
};

export default Sustainability;
