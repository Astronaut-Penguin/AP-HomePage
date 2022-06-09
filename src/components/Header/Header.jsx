// REACT
import React, { useState } from "react";

// STYLES
import styles from "./Header.module.css";

// SVG
import Burger from "./assets/Burger";

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

  ////////////
  // RENDER //
  ////////////
  return (
    <section
      className={`${styles.Container} ${Open ? styles.Black : styles.Deg}`}
    >
      <div className={styles.Header}>
        <div className={styles.Logo}></div>

        <button className={styles.Burger} onClick={handleOpen}>
          <Burger toggle={Open} activate={isClicked} />
        </button>
      </div>
      <Collapse isOpen={Open}>
        <nav className={styles.Nav}>
          <a href="">Work</a>
          <a href="">Process</a>
          <a href="">Us</a>
          <a href="">3.0</a>
        </nav>
        <hr />
        <a href="" className={styles.Contact}>
          Contact us
        </a>
      </Collapse>
    </section>
  );
};

export default Header;
