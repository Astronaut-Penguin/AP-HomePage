// REACT
import React from "react";

// STYLES
import styles from "./NavBar.module.css";

// COMPONENT
const NavBar = () => {
  ////////////
  // RENDER //
  ////////////
  return (
    <section className={styles.Container}>
      <div className={styles.Logo}></div>

      <button className={styles.Burger}></button>
    </section>
  );
};

export default NavBar;
