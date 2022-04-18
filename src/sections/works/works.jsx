//- Import React
import React, { useState, useEffect } from "react";

//- Import Styles
import styles from "./works.module.css";

//- Import Components
import Title from "../../components/title/title";
import Text from "../../components/text/text";
import ClientCard from "../../components/clientCard/clientCard";

//- Import Images
import TribeLogo from "./assets/tribeLogo.png";
import MiladyLogo from "./assets/miladyLogo.png";
import APLogo from "./assets/apLogo.png";
import WilderLogo from "./assets/wilderLogo.png";

//- Flicking Imports
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

const updateTransform = (e) => {
  e.currentTarget.panels.forEach((panel) => {
    const rotateVal = -panel.progress * 30;
    const sinRot = Math.sin(Math.abs((rotateVal * Math.PI) / 180));
    const depth = 100000 * sinRot * sinRot;
    panel.element.style.transform = `translateZ(-${depth}px) rotateX(${rotateVal}deg)`;
  });
};

const WorksSection = () => {
  const [s, setS] = useState(1);
  useEffect(() => {
    const camera = document.getElementsByClassName("flicking-camera");
    camera[0].style.transformStyle = "preserve-3d";
  }, []);

  return (
    <section className={styles.Container}>
      <Title text="Works" style={{ marginLeft: "26px" }} />
      <div className={styles.TextContainer}>
        <Text
          text="Our projects, successful cases that have exceeded our expectations."
          style={{ marginLeft: "26px" }}
        />
      </div>

      <div className={styles.CarouselContainer}>
        <Flicking
          circular={false}
          onChanged={(e) => {
            setS(e.index);
          }}
          defaultIndex={1}
          // renderOnlyVisible={true}
          onReady={updateTransform}
          onMove={updateTransform}
          className={styles.Carousel}
        >
          <div className={styles.Card}>
            <ClientCard
              logo={TribeLogo}
              title={"Tribe"}
              text={
                "We developed the marketplace to sell collections inspired in famous DeFi in the BSC."
              }
              leftTitle={"MARKET CAP"}
              leftNum={"$40M"}
              enableWeek
              footNum={"on the launch day"}
              rightTitle={"POPULAR COIN"}
              rightNum={"#500"}
              enableLine
              footText={"Contract"}
              enableSite
              siteLink={"https://tribetoken.app/#/"}
              contractLink={"https://tribetoken.app/#/"}
              s={s}
              index={0}
            />
          </div>
          <div className={styles.Card}>
            <ClientCard
              logo={WilderLogo}
              title={"Wilder World"}
              text={
                "We developed a marketplace to sell NFTs of their Metaverse and worked on 3D models."
              }
              leftTitle={"PROFIT"}
              leftNum={"$700K"}
              enableWeek
              footNum={"per week"}
              rightTitle={"POPULAR COIN"}
              rightNum={"#200"}
              enableLine
              footText={"Contract"}
              enableSite
              siteLink={"https://www.wilderworld.com/"}
              contractLink={"https://www.wilderworld.com/"}
              s={s}
              index={1}
            />
          </div>
          <div className={styles.Card}>
            <ClientCard
              logo={MiladyLogo}
              title={"Milady"}
              text={
                "We developed the connections to the smart contracts and solve issues."
              }
              leftTitle={"PROFIT"}
              leftNum={"$1M"}
              rightTitle={"NFT SOLD"}
              rightNum={"100%"}
              enableLine
              footText={"Contract"}
              enableSite
              siteLink={"https://tribetoken.app/#/"}
              contractLink={"https://tribetoken.app/#/"}
              s={s}
              index={2}
            />
          </div>
          <div className={styles.Card}>
            <ClientCard
              logo={APLogo}
              title={"Astronaut Penguin"}
              text={
                "We created the first cold wallet in Latin America and the physical world first for mobile."
              }
              // textStyle={{paddingTop: '30px'}}
              footText={"View Post"}
              contractLink={"https://tribetoken.app/#/"}
              s={s}
              index={3}
            />
          </div>
        </Flicking>
      </div>

      <div className={styles.Dots}>
        <div className={styles.DotsContainer}>
          <div
            className={`${styles.TextContainer} ${
              s == 0 ? styles.DotSelected : styles.DotNotSelected
            }`}
          ></div>
        </div>
        <div className={styles.DotsContainer}>
          <div
            className={`${styles.TextContainer} ${
              s == 1 ? styles.DotSelected : styles.DotNotSelected
            }`}
          ></div>
        </div>
        <div className={styles.DotsContainer}>
          <div
            className={`${styles.TextContainer} ${
              s == 2 ? styles.DotSelected : styles.DotNotSelected
            }`}
          ></div>
        </div>
        <div className={styles.DotsContainer}>
          <div
            className={`${styles.TextContainer} ${
              s == 3 ? styles.DotSelected : styles.DotNotSelected
            }`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
