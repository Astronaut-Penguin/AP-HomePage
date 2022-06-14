//- Import React
import React, { useState } from "react";

//- Import Expandable Component
import "@blueprintjs/core/lib/css/blueprint.css";
import { Collapse, Button } from "@blueprintjs/core";

//- Import Styles
import styles from "./Us.module.css";

//- Import Components
import Title from "../../components/title/title";
import CtaButton from "../../components/Button/CtaButton/CtaButton";
import UsPenguin from "../../components/UsPenguin/UsPenguin";

//- Import Images
import Alejo from "./assets/Alejo.png";
import Agustin from "./assets/Agustin.png";
import Mati from "./assets/Mati.png";
import Flor from "./assets/Flor.png";
import Agustina from "./assets/Agustina.png";
import Facu from "./assets/Facu.png";
import Diego from "./assets/Penguin.png";

import Arrow from "./assets/arrow.svg";

const UsSection = () => {
  const [s, setS] = useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className={styles.Container} id="us">
      <div className={styles.UsContainer}>
        <Title text={"Us"} />
      </div>
      <div className={styles.PCText}>
        <h4 className={styles.PC}>
          We make experiences. Our team is qualified to accomplish your project
          and make it real.
        </h4>
        <h4 className={styles.PC}>
          We are a multi-disciplinary team of experts in different areas. With
          focus on new technologies such as Blockchain, NFTs, Web 3.0 and the
          ultimate trends on design and digital production systems.
        </h4>
      </div>

      <div className={styles.Penguins}>
        <div className={styles.Background}></div>
        {/* <div className={styles.BottomShadow}></div> */}

        <div onClick={() => setS(1)}>
          <UsPenguin
            penguin={Mati}
            name="Mati"
            job="SCRUM MASTER"
            className={styles.Penguin}
            index={s}
            num={1}
          />
        </div>
        <div onClick={() => setS(2)}>
          <UsPenguin
            penguin={Alejo}
            name="Astro"
            job="CO-FOUNDER"
            left
            className={styles.Ale}
            index={s}
            num={2}
          />
        </div>
        <div onClick={() => setS(3)}>
          <UsPenguin
            penguin={Facu}
            name="Facu"
            job="DEVELOPER"
            left
            className={styles.Facu}
            index={s}
            num={3}
          />
        </div>
        <div onClick={() => setS(4)}>
          <UsPenguin
            penguin={Flor}
            name="Flor"
            job="DESIGNER"
            left
            className={styles.Flor}
            index={s}
            num={4}
          />
        </div>
        <div onClick={() => setS(5)}>
          <UsPenguin
            penguin={Agustin}
            name="Agustin"
            job="CO-FOUNDER"
            className={styles.Mati}
            index={s}
            num={5}
          />
        </div>
        <div onClick={() => setS(6)}>
          <UsPenguin
            penguin={Agustina}
            name="Agus"
            job="DESIGNER"
            className={styles.Agus}
            index={s}
            num={6}
          />
        </div>
        <div onClick={() => setS(7)}>
          <UsPenguin
            penguin={Diego}
            name="Diego"
            job="UX/IX SPECIALIST"
            className={styles.Diego}
            index={s}
            num={7}
          />
        </div>
      </div>

      <div className={styles.TextContainer}>
        <h4 className={styles.WeMake}>We make experiences.</h4>
        <h4 className={styles.OurTeam}>
          Our team is qualified to accomplish your project and make it real.
        </h4>

        <Collapse isOpen={isOpen} className={styles.OurTeam}>
          We are a multi-disciplinary team of experts in different areas. With
          focus on new technologies such as Blockchain, NFTs, Web 3.0 and the
          ultimate trends on design and digital production systems.
        </Collapse>
        <a onClick={() => setIsOpen(!isOpen)} className={styles.Button}>
          {isOpen ? (
            <img className={styles.ImgOpen} src={Arrow} />
          ) : (
            <img className={styles.Img} src={Arrow} />
          )}
        </a>
      </div>

      <div className={styles.ButtonContainer}>
        <CtaButton text={"Contact us"} />
      </div>
    </section>
  );
};

export default UsSection;
