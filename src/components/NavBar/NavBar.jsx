// REACT
import React, { useState } from "react";

// STYLES
import styles from "./NavBar.module.css";

// SVG
import Burger from "./assets/Burger";

// Collapse
import "@blueprintjs/core/lib/css/blueprint.css";
import { Collapse } from "@blueprintjs/core";

// COMPONENT
const NavBar = () => {
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
    <section className={styles.Container}>
      <div className={styles.Header}>
        <div className={styles.Logo}></div>

        <button className={styles.Burger} onClick={handleOpen}>
          <Burger toggle={Open} activate={isClicked} />
        </button>
      </div>
      <Collapse isOpen={Open}>
        <p style={{ color: "white" }}>Faso</p>
      </Collapse>
    </section>
  );
};

export default NavBar;
