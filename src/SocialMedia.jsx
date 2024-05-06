import React from "react";
import RightUpArrow from "./assets/RightUpArrow";

const SocialMedia = () => {
  return (
    <>
      <h3 style={{ color: "#fffef2", fontSize: "2rem" }}>Social media</h3>
      <div style={{ borderBottom: "1px solid #fffef2" }}></div>
      <ul style={{ paddingLeft: "0", margin: "0", listStyle: "none" }}>
        <li style={{ paddingTop: "1rem" }}>
          <span style={{ color: "#fffef2", fontSize: "1.5rem" }}>
            Instagram
          </span>
          <i>
            <RightUpArrow />
          </i>
        </li>
        <li style={{ paddingTop: "1rem" }}>
          <span style={{ color: "#fffef2", fontSize: "1.5rem" }}>Twitter</span>
          <i>
            <RightUpArrow />
          </i>
        </li>
        <li style={{ paddingTop: "1rem" }}>
          <span style={{ color: "#fffef2", fontSize: "1.5rem" }}>Linkedin</span>
          <i>
            <RightUpArrow />
          </i>
        </li>
        <li style={{ paddingTop: "1rem" }}>
          <span style={{ color: "#fffef2", fontSize: "1.5rem" }}>WeChat</span>
        </li>
        <li style={{ paddingTop: "1rem" }}>
          <span style={{ color: "#fffef2", fontSize: "1.5rem" }}>Weibo</span>
          <i>
            <RightUpArrow />
          </i>
        </li>
      </ul>
    </>
  );
};

export default SocialMedia;
