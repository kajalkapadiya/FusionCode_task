import React from "react";

const RightArrow = ({ fill_color }) => {
  console.log(fill_color);
  return (
    <svg
      aria-labelledby="rightArrow-:R1bamkhuj6:"
      data-testid="data-testid-Icon"
      focusable="false"
      height="12"
      role="img"
      style={{
        height: "12px",
        width: "12px",
        fill: fill_color,
      }}
      tabIndex="-1"
      viewBox="0 0 50 50"
      width="12"
    >
      <title id="rightArrow-:R1bamkhuj6:">rightArrow</title>
      <g>
        <path d="M30.1,5.3L50,25.1L30.1,45h-6.6l18-17.6H0v-4.8h41.5l-18-17.6h6.6V5.3z"></path>
      </g>
    </svg>
  );
};

export default RightArrow;
