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
import Penguin1 from "./assets/penguin1.png";
import Penguin2 from "./assets/penguin2.png";
import Penguin3 from "./assets/penguin3.png";
import Arrow from "./assets/arrow.svg";

const UsSection = () => {
  const [s, setS] = useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className={styles.Container}>
      <div className={styles.UsContainer}>
        <Title text={"Us"} />
      </div>
      <div className={styles.Penguins}>
        <div className={styles.Background}></div>
        <div className={styles.BottomShadow}></div>

        <UsPenguin penguin={Penguin2} name='Penguin' job='TEAM LEAD' left className={styles.Penguin} />
        <UsPenguin penguin={Penguin1} name='Astro' job='DEVELOP TEAM LEAD' left className={styles.Ale} />
        <UsPenguin penguin={Penguin2} name='Facu' job='FRONT-END DEVELOPER' left className={styles.Facu} />
        <UsPenguin penguin={Penguin1} name='Flor' job='GRAPHIC DESIGN' left className={styles.Flor} />
        <UsPenguin penguin={Penguin3} name='Mati' job='SCRUM MASTER' className={styles.Mati} />
        <UsPenguin penguin={Penguin3} name='Agus' job='DESIGN TEAM LEAD' className={styles.Agus} />
        <UsPenguin penguin={Penguin2} name='Diego' job='UX/IX SPECIALIST' className={styles.Diego} />
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