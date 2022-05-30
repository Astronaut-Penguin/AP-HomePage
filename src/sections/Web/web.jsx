//- Import React
import React, { useState } from "react";

//- Import Styles
import styles from "./web.module.css";

//- Import Components
import Title from "../../components/title/title";
import Text from "../../components/text/text";
import WebCard from "../../components/WebCard/WebCard";

//- Flicking Imports
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

const WebSection = () => {
  const [s, setS] = useState(0);

  return (
    <section className={styles.Container}>
      <div className={styles.TitleContainer}>
        <Title
          text="Web 3.0"
        />
      </div>
      <div className={styles.TextContainer}>
        <Text
          text="The evolution of Web 3.0 let us make a more unique user centered design, creating an original and customized experience."
          style={{ marginLeft: "26px" }}
        />
      </div>
      <h2 className={styles.Breaking}>BREAKING NEWS</h2>

      <div className={styles.CarouselContainer}>
        <Flicking
          circular={false}
          onChanged={(e) => {
            setS(e.index);
          }}
          defaultIndex={0}
          renderOnlyVisible={true}
          className={styles.Carousel}
        >
          <div className={styles.Card}>
            <WebCard title={"What is a Web 3.0?"} enablePlay site={"/"} />
            <WebCard title={"Launch: new walleta"} site={"/"} />
          </div>
          <div className={styles.Card}>
            <WebCard title={"What is a Web 3.0?"} enablePlay site={"/"} />
            <WebCard title={"Launch: new wallet"} site={"/"} />
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
      </div>

      <div className={styles.Standing}>
        <div className={styles.StandingCard}>
          <WebCard 
              title={"What is a Web 3.0?"} 
              enablePlay
              site={"/"}
          />
          <WebCard 
              title={"Launch: new wallet"} 
              site={"/"}
          />
          <WebCard 
              title={"Launch: new wallet"} 
              site={"/"}
          />
        </div>
        <div className={styles.StandingCard}>
          <WebCard 
              title={"What is a Web 3.0?"} 
              enablePlay
              site={"/"}
          />
          <WebCard 
              title={"Launch: new wallet"} 
              site={"/"}
          />
          <WebCard 
              title={"Launch: new wallet"} 
              site={"/"}
          />
        </div>
      </div>
    </section>
  );
};

export default WebSection;
