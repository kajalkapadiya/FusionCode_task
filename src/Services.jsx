import React from "react";

const Services = () => {
  return (
    <>
      <h3 style={{ color: "#fffef2", fontSize: "2rem" }}>Services</h3>
      <div style={{ borderBottom: "1px solid #fffef2" }}></div>
      <ul style={{ paddingLeft: "0", margin: "0", listStyle: "none" }}>
        <li style={{ paddingTop: "2rem" }}>
          <span style={{ color: "#fffef2", fontSize: "1.5rem" }}>
            Live assistance
          </span>
        </li>
        <li style={{ paddingTop: "1rem" }}>
          <span style={{ color: "#fffef2", fontSize: "1.5rem" }}>
            Corporate gifts
          </span>
        </li>
        <li style={{ paddingTop: "1rem" }}>
          <span style={{ color: "#fffef2", fontSize: "1.5rem" }}>
            Facial Appointments
          </span>
        </li>
        <li style={{ paddingTop: "1rem" }}>
          <span style={{ color: "#fffef2", fontSize: "1.5rem" }}>
            Click and Collect
          </span>
        </li>
        <li style={{ paddingTop: "1rem" }}>
          <span style={{ color: "#fffef2", fontSize: "1.5rem" }}>
            Video consultation
          </span>
        </li>
      </ul>
    </>
  );
};

export default Services;
