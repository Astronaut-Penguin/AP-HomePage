// REACT
import React, { useEffect } from "react";

// STYLE
import styles from "./Home.module.css";

// IMAGES
import Planet from "../../assets/images/planet.png";

// COMPONENTS
import { CtaButton } from "../../components";

const Home = () => {
  ///////////////
  // ANIMATORS //
  ///////////////

  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      // Get Elements Ref
      const CFX = document.getElementById("Planet_CFX");
      const RedBall = document.getElementById("Planet_RedBall");
      const BlueBall_A = document.getElementById("Planet_BlueBall_A");
      const BlueBall_B = document.getElementById("Planet_BlueBall_B");

      // Get Scroll Value
      var scrolled = window.scrollY;

      // Randomize Translate
      var short = scrolled * 0.1;
      var mid = scrolled * 0.2;
      var large = scrolled * 0.3;

      // Animate
      CFX.style.transform = "translateY(" + large + "px)";
      RedBall.style.transform = "translateY(" + mid + "px)";
      BlueBall_A.style.transform = "translateY(" + large + "px)";
      BlueBall_B.style.transform = "translateY(" + mid + "px)";
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
          <div className={styles.BlueBall_A} id="Planet_BlueBall_A" />
          <div className={styles.BlueBall_B} id="Planet_BlueBall_B" />
          {/* 888888888 */}

          <h3>WELCOME TO ASTRONAUT PENGUIN</h3>
          <h2>Build the Future.</h2>
        </div>

        <p>
          A design and blockchain company.
          <br />
          We create experiences.
        </p>

        <div style={{ zIndex: 10 }}>
          <CtaButton text={"Get Started"} />
        </div>
      </div>
    </section>
  );
};

export default Home;
