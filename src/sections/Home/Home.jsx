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
      // Get Other Planets Ref
      const OtherPlanet_A = document.getElementById("Other_Planet_A");
      const OtherPlanet_B = document.getElementById("Other_Planet_B");
      const OtherPlanet_C = document.getElementById("Other_Planet_C");
      const OtherPlanet_D = document.getElementById("Other_Planet_D");

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
      // Other Planets Animate
      OtherPlanet_A.style.transform = "translateY(" + mid + "px)";
      OtherPlanet_B.style.transform = "translateY(" + scrolled * 0.5 + "px)";
      OtherPlanet_C.style.transform = "translateY(" + scrolled * 0.15 + "px)";
      OtherPlanet_D.style.transform = "translateY(" + scrolled * 0.15 + "px)";
    });
  }, []);

  ////////////
  // RENDER //
  ////////////
  return (
    <section className={styles.Container} id="home">
      <div className={`${styles.MiddleContainer} Container_Content`}>
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

          {/* Other Planets */}
          <div className={styles.OtherPlanet_A} id="Other_Planet_A" />
          <div className={styles.OtherPlanet_B} id="Other_Planet_B" />
          <div className={styles.OtherPlanet_C} id="Other_Planet_C" />
          <div className={styles.OtherPlanet_D} id="Other_Planet_D" />

          {/* 888888888 */}

          <h3>WELCOME TO ASTRONAUT PENGUIN</h3>
          <h2>
            Build the
            <br />
            future.
          </h2>
        </div>

        <p>We provide blockchain solutions</p>

        <div style={{ zIndex: 10 }}>
          <CtaButton text={"Get Started"} />
        </div>
      </div>

      {/* <a
        title="Discord"
        href="https://discord.com/"
        target="_blank"
        className={styles.Discord}
      /> */}
    </section>
  );
};

export default Home;
