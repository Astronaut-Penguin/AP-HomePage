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

//- Import Images
import Penguin1 from "./assets/penguin1.png";
import Penguin2 from "./assets/penguin2.png";
import Penguin3 from "./assets/penguin3.png";
import Arrow from "./assets/arrow.svg";

const UsSection = () => {
  // const [s, setS] = useState(1);
  const [isOpen, setIsOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);

  return (
    <section className={styles.Container}>
      <div className={styles.UsContainer}>
        <Title text={"Us"} />
      </div>
      <div className={styles.Penguins}>
        <div className={styles.Background}></div>

        <a onClick={() => setShow(!show)}>
          <img src={Penguin2} className={styles.Facu} />
          {show ? (
            <div className={styles.Info} style={{marginLeft: '205px', marginTop: '35px'}}>
              <div className={styles.Line}></div>
              <div className={styles.SecondLineLeft}></div>
              <div className={styles.CircleLeft}></div>
              <h2 className={styles.PersonLeft}>Facu</h2>
              <h3 className={styles.JobLeft}>FRONT-END DEVELOPER</h3>
            </div>
          ) : (
            null
          )}
        </a>
        <img src={Penguin1} className={styles.Ale} />
        <img src={Penguin1} className={styles.Flor} />
        <img src={Penguin2} className={styles.Penguin} />
        <img src={Penguin3} className={styles.Mati} />
        <img src={Penguin3} className={styles.Agus} />
        <img src={Penguin2} className={styles.Diego} />
      </div>

      <div className={styles.TextContainer}>
        <h4 className={styles.WeMake}>We make experiences.</h4>
        <h4 className={styles.OurTeam}>
          Our team is qualified to accomplish your project and make it real.
        </h4>

        <a onClick={() => setIsOpen(!isOpen)} className={styles.Button}>
          {isOpen ? (
            <img className={styles.ImgOpen} src={Arrow} />
          ) : (
            <img className={styles.Img} src={Arrow} />
          )}
        </a>
        <Collapse isOpen={isOpen} className={styles.OurTeam}>
          We are a multi-disciplinary team of experts in different areas. With
          focus on new technologies such as Blockchain, NFTs, Web 3.0 and the
          ultimate trends on design and digital production systems.
        </Collapse>
      </div>

      <div className={styles.ButtonContainer}>
        <CtaButton text={"Contact us"} />
      </div>
    </section>
  );
};

export default UsSection;
