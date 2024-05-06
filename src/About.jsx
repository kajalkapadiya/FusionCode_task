import React from "react";

const About = () => {
  return (
    <>
      <h3 style={{ color: "#fffef2", fontSize: "2rem" }}>About</h3>
      <div style={{ borderBottom: "1px solid #fffef2" }}></div>
      <ul style={{ paddingLeft: "0", margin: "0", listStyle: "none" }}>
        <li style={{ paddingTop: "1rem" }}>
          <span style={{ color: "#fffef2", fontSize: "1.5rem" }}>
            our story
          </span>
        </li>
        <li style={{ paddingTop: "1rem" }}>
          <span style={{ color: "#fffef2", fontSize: "1.5rem" }}>
            Foundation
          </span>
        </li>
        <li style={{ paddingTop: "1rem" }}>
          <span style={{ color: "#fffef2", fontSize: "1.5rem" }}>Careers</span>
        </li>
        <li style={{ paddingTop: "1rem" }}>
          <span style={{ color: "#fffef2", fontSize: "1.5rem" }}>
            Privacy policy
          </span>
        </li>
        <li style={{ paddingTop: "1rem" }}>
          <span style={{ color: "#fffef2", fontSize: "1.5rem" }}>
            Accessibility
          </span>
        </li>
        <li style={{ paddingTop: "1rem" }}>
          <span style={{ color: "#fffef2", fontSize: "1.5rem" }}>
            Cookie Policy
          </span>
        </li>
      </ul>
    </>
  );
};

export default About;
