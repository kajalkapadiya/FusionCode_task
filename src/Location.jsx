import React from "react";

const Location = () => {
  return (
    <>
      <h3 style={{ color: "#fffef2", fontSize: "2rem" }}>
        Location preference
      </h3>
      <div style={{ borderBottom: "1px solid #fffef2" }}></div>
      <ul style={{ paddingLeft: "0", margin: "0", listStyle: "none" }}>
        <li style={{ paddingTop: "2rem" }}>
          <a
            style={{
              color: "#fffef2",
              fontSize: "1.5rem",
              textDecoration: "underline",
            }}
          >
            Hong Kong, SAR
          </a>
        </li>
      </ul>
    </>
  );
};

export default Location;
