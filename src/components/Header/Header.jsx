// REACT
import React, { useState } from "react";

// STYLES
import styles from "./Header.module.css";

// SVG
import Burger from "./assets/Burger";
import Arrow from "./assets/arrow.svg";

// Collapse
import "@blueprintjs/core/lib/css/blueprint.css";
import { Collapse } from "@blueprintjs/core";

// COMPONENT
const Header = () => {
  ///////////////
  // FUNCTIONS //
  ///////////////

  const [Open, setOpen] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const [block, setBlock] = useState(false);

  const handleOpen = () => {
    if (!block) {
      setOpen(!Open);
      setClicked(true);
      setBlock(true);

      const interval = setInterval(() => {
        setBlock(false);
        clearInterval(interval);
      }, 500);
    } else {
    }
  };

  // Resize
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  ////////////
  // RENDER //
  ////////////
  return (
    <header
      className={`${styles.Container} ${Open ? styles.Black : styles.Deg}`}
    >
      <div className={styles.Header}>
        <a className={styles.Logo} href="#home" />

        {width >= 1024 ? (
          <>
            <nav className={styles.Nav}>
              <a href="#work">Work</a>
              <a href="#process">Process</a>
              {/* <a href="#us">Us</a> */}
              {/* <a href="#web3">3.0</a> */}
            </nav>

            <a href="" className={styles.Contact}>
              Start now
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.75 8.75L35 21L22.75 33.25M7 21H35H7Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </>
        ) : null}

        {width <= 1023 ? (
          <button className={styles.Burger} onClick={handleOpen}>
            <Burger toggle={Open} activate={isClicked} />
          </button>
        ) : null}
      </div>
      {width <= 1023 ? (
        <Collapse isOpen={Open}>
          <nav className={styles.Nav}>
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            {/* <a href="#us">Us</a> */}
            {/* <a href="#web3">3.0</a> */}
          </nav>
          <hr />
          <a href="" className={styles.Contact}>
            Contact us
          </a>
        </Collapse>
      ) : null}
    </header>
  );
};

export default Header;
