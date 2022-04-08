// REACT
import React, { useEffect } from "react";

// STYLE
import styles from "./Home.module.css";

// IMAGES
import Planet from "../../assets/images/planet.png";

const Home = () => {
  ///////////////
  // ANIMATORS //
  ///////////////

  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      // Get Elements Ref
      const CFX = document.getElementById("Planet_CFX");
      const RedBall = document.getElementById("Planet_RedBall");

      // Get Scroll Value
      var scrolled = window.scrollY;

      // Randomize Translate
      var short = scrolled * 0.1;
      var mid = scrolled * 0.2;
      var large = scrolled * 0.3;

      // Animate
      CFX.style.transform = "translate3d(0px," + large + "px, 0px)";
      RedBall.style.transform = "translate3d(0px," + mid + "px, 0px)";
    });
  }, []);

  ////////////
  // RENDER //
  ////////////
  return (
    <section className={styles.Container}>
      <div className={styles.MiddleContainer}>
        <div className={styles.SunBlue} />
        <div className={styles.SunB} />

        <div className={styles.PlanetContainer}>
          {/* Planet Image */}
          <img className={styles.Planet} src={Planet} alt="" />
          {/* Planet FXs */}
          <div className={styles.Glow} />
          <div className={styles.AFX} />
          <div className={styles.BFX} />
          <div className={styles.CFX} id="Planet_CFX" />
          <div className={styles.RedBall} id="Planet_RedBall" />
          {/* 888888888 */}

          <h3>WELCOME TO ASTRONAUT PENGUIN</h3>
          <h2>Build the Future.</h2>
        </div>

        <p>
          A design and blockchain company.
          <br />
          We create experiences.
        </p>
      </div>
    </section>
  );
};

export default Home;
