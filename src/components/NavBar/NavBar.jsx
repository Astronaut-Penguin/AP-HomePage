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

  const handleOpen = () => {
    setOpen(!Open);
  };

  ////////////
  // RENDER //
  ////////////
  return (
    <section className={styles.Container}>
      <div className={styles.Logo}></div>

      <button className={styles.Burger} onClick={handleOpen}>
        <Burger />
      </button>
    </section>
  );
};

export default NavBar;
