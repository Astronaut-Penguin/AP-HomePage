// REACT
import React, { useState } from "react";

// STYLES
import styles from "./NavBar.module.css";

// SVG
import Burger from "./assets/Burger";

// COMPONENT
const NavBar = () => {
  ///////////////
  // FUNCTIONS //
  ///////////////

  const [Open, setOpen] = useState(false);
  const [isClicked, setClicked] = useState(false);

  const handleOpen = () => {
    setOpen(!Open);
    setClicked(true);
  };

  ////////////
  // RENDER //
  ////////////
  return (
    <section className={styles.Container}>
      <div className={styles.Logo}></div>

      <button className={styles.Burger} onClick={handleOpen}>
        <Burger toggle={Open} activate={isClicked} />
      </button>
    </section>
  );
};

export default NavBar;
