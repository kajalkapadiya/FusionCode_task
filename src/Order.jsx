import React from "react";
import RightUpArrow from "./assets/RightUpArrow";
import "./order.css";

const Order = () => {
  return (
    <>
      <h3 className="order">Orders and support</h3>
      <div style={{ borderBottom: "1px solid #fffef2" }}></div>
      <ul style={{ paddingLeft: "0", margin: "0", listStyle: "none" }}>
        <li style={{ paddingTop: "2rem" }}>
          <span style={{ color: "#fffef2", fontSize: "1.5rem" }}>
            Contact us
          </span>
          <i>
            <RightUpArrow />
          </i>
        </li>
        <li style={{ paddingTop: "1rem" }}>
          <span style={{ color: "#fffef2", fontSize: "1.5rem" }}>FAQs</span>
          <i>
            <RightUpArrow />
          </i>
        </li>
        <li style={{ paddingTop: "1rem" }}>
          <span style={{ color: "#fffef2", fontSize: "1.5rem" }}>Shipping</span>
          <i>
            <RightUpArrow />
          </i>
        </li>
        <li style={{ paddingTop: "1rem" }}>
          <span style={{ color: "#fffef2", fontSize: "1.5rem" }}>Returns</span>
          <i>
            <RightUpArrow />
          </i>
        </li>
        <li style={{ paddingTop: "1rem" }}>
          <span style={{ color: "#fffef2", fontSize: "1.5rem" }}>
            Order history
          </span>
        </li>
        <li style={{ paddingTop: "1rem" }}>
          <span style={{ color: "#fffef2", fontSize: "1.5rem" }}>
            Check gift card balance
          </span>
        </li>
        <li style={{ paddingTop: "1rem" }}>
          <span style={{ color: "#fffef2", fontSize: "1.5rem" }}>
            Terms and conditions
          </span>
        </li>
      </ul>
    </>
  );
};

export default Order;
