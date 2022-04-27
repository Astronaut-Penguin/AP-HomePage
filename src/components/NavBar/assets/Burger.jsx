// REACT
import React, { useEffect } from "react";

// GSAP
import gsap from "gsap";

// PROPS
// toggle: variable que cambia el estado
// activate: variable que le dice a partir de cuando puede cambiar

// SVG COMPONENT
const Burger = ({ toggle, activate, onComplete }) => {
  ////////////////
  // ANIMATIONS //
  ////////////////

  useEffect(() => {
    // Animation when starts
    var tlStart = gsap.timeline();
    tlStart.fromTo(
      "#Ellipse1",
      { x: 50, y: 50 },
      { x: 22.5, y: 22.5, duration: 0.3, delay: 0.5, ease: "sine" }
    );
    tlStart.fromTo(
      "#Ellipse2",
      { x: 50, y: 50 },
      { x: 77.5, y: 22.5, duration: 0.3, delay: 0.5, ease: "sine" },
      "0"
    );
    tlStart.fromTo(
      "#Ellipse3",
      { x: 50, y: 50 },
      { x: 22.5, y: 77.5, duration: 0.3, delay: 0.5, ease: "sine" },
      "0"
    );
    tlStart.fromTo(
      "#Ellipse4",
      { x: 50, y: 50 },
      { x: 77.5, y: 77.5, duration: 0.3, delay: 0.5, ease: "sine" },
      "0"
    );
    tlStart.fromTo("#Cross", { opacity: 0 }, { opacity: 0 }, "0");
  }, []);

  useEffect(() => {
    // When the button open the modal
    var tlOpen = gsap.timeline({
      onComplete: onComplete,
    });

    if (toggle && activate) {
      tlOpen.fromTo(
        "#Ellipse1",
        { x: 22.5, y: 22.5 },
        { x: 100, y: 100, scale: 0, duration: 0.3, ease: "sine" },
        "0"
      );
      tlOpen.fromTo(
        "#Ellipse2",
        { x: 77.5, y: 22.5 },
        { x: 50, y: 100, scale: 0, duration: 0.3, ease: "sine" },
        "0"
      );
      tlOpen.fromTo(
        "#Ellipse3",
        { x: 22.5, y: 77.5 },
        { x: 100, y: 50, scale: 0, duration: 0.3, ease: "sine" },
        "0"
      );
      tlOpen.fromTo(
        "#Ellipse4",
        { x: 77.5, y: 77.5 },
        {
          x: 50,
          y: 50,
          scale: 0,
          duration: 0.3,
          ease: "sine",
        },
        "0"
      );
      tlOpen.fromTo(
        "#Cross",
        { x: 500, y: 500, opacity: 1, scale: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          delay: 0.1,
          duration: 0.3,
          ease: "sine",
        },
        "0"
      );
    } else if (!toggle && activate) {
      var tlClose = gsap.timeline({
        onComplete: onComplete,
      });

      // When the button closes the modal
      tlClose.fromTo(
        "#Ellipse1",
        { x: 100, y: 100 },
        { x: 22.5, y: 22.5, scale: 1, delay: 0.1, duration: 0.3, ease: "sine" },
        "0"
      );
      tlClose.fromTo(
        "#Ellipse2",
        { x: 50, y: 100 },
        { x: 77.5, y: 22.5, scale: 1, delay: 0.2, duration: 0.3, ease: "sine" },
        "0"
      );
      tlClose.fromTo(
        "#Ellipse3",
        { x: 100, y: 50 },
        { x: 22.5, y: 77.5, scale: 1, delay: 0.3, duration: 0.3, ease: "sine" },
        "0"
      );
      tlClose.fromTo(
        "#Ellipse4",
        { x: 50, y: 50 },
        {
          x: 77.5,
          y: 77.5,
          scale: 1,
          delay: 0.4,
          duration: 0.3,
          ease: "sine",
        },
        "0"
      );
      tlClose.fromTo(
        "#Cross",
        { x: 0, y: 0, scale: 1 },
        {
          x: 500,
          y: 500,
          scale: 0,
          duration: 0.3,
          ease: "sine",
        },
        "0"
      );
    }
  }, [toggle]);

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
      <ellipse fill="white" id="Ellipse1" rx="22.5" ry="22.5" strokeWidth="0" />
      <ellipse fill="white" id="Ellipse2" rx="22.5" ry="22.5" strokeWidth="0" />
      <ellipse fill="white" id="Ellipse3" rx="22.5" ry="22.5" strokeWidth="0" />
      <ellipse fill="white" id="Ellipse4" rx="22.5" ry="22.5" strokeWidth="0" />
      <g transform="matrix(.089669 0 0 0.089669 5.16569 5.16662)">
        <path
          fill="white"
          id="Cross"
          d="M638.6,500L961.3,177.3c38.3-38.3,38.3-100.3,0-138.6s-100.3-38.3-138.6,0L500,361.4L177.3,38.7C139,0.4,77,0.4,38.7,38.7s-38.3,100.3,0,138.6L361.4,500L38.7,822.7C0.4,861,0.4,923,38.7,961.3C57.9,980.4,82.9,990,108,990s50.1-9.6,69.3-28.7L500,638.6L822.7,961.3C841.8,980.4,866.9,990,892,990s50.1-9.6,69.3-28.7c38.3-38.3,38.3-100.3,0-138.6L638.6,500Z"
        />
      </g>
    </svg>
  );
};

export default Burger;
