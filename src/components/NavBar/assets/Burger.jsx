// REACT
import React, { useEffect } from "react";

// COMPONENT
const Burger = () => {
  ////////////////
  // ANIMATIONS //
  ////////////////

  useEffect(() => {
    const Cross = document.getElementById("Cross");
  }, []);

  ////////////
  // RENDER //
  ////////////
  return (
    <svg
      id="PointContainer"
      viewBox="0 0 100 100"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      width="100%"
      height="100%"
    >
      <g transform="matrix(.089669 0 0 0.089669 5.16569 5.16662)">
        <path
          fill="white"
          id="Cross"
          d="M638.6,500L961.3,177.3c38.3-38.3,38.3-100.3,0-138.6s-100.3-38.3-138.6,0L500,361.4L177.3,38.7C139,0.4,77,0.4,38.7,38.7s-38.3,100.3,0,138.6L361.4,500L38.7,822.7C0.4,861,0.4,923,38.7,961.3C57.9,980.4,82.9,990,108,990s50.1-9.6,69.3-28.7L500,638.6L822.7,961.3C841.8,980.4,866.9,990,892,990s50.1-9.6,69.3-28.7c38.3-38.3,38.3-100.3,0-138.6L638.6,500Z"
        />
      </g>
      <ellipse
        fill="white"
        id="Ellipse1"
        rx="22.5"
        ry="22.5"
        transform="translate(22.5 77.5)"
        strokeWidth="0"
      />
      <ellipse
        fill="white"
        id="Ellipse2"
        rx="22.5"
        ry="22.5"
        transform="translate(77.5 77.5)"
        strokeWidth="0"
      />
      <ellipse
        fill="white"
        id="Ellipse3"
        rx="22.5"
        ry="22.5"
        transform="translate(77.5 22.5)"
        strokeWidth="0"
      />
      <ellipse
        fill="white"
        id="Ellipse4"
        rx="22.5"
        ry="22.5"
        transform="translate(22.5 22.5)"
        strokeWidth="0"
      />
    </svg>
  );
};

export default Burger;
