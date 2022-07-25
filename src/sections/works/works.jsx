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
import APLogo from "./assets/apLogo.png";
import CapyLogo from "./assets/capyLogo.png";
import MatchLogo from "./assets/matchLogo.png";

import Planet from "../../assets/images/planet.png";

//- Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "./swiper-bundle.min.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

//- Flicking Imports
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

const updateTransform = (e) => {
  e.currentTarget.panels.forEach((panel) => {
    const rotateVal = -panel.progress * 30;
    const opacityVal = panel.progress;
    const filterVal = Math.abs(opacityVal);
    const sinRot = Math.sin(Math.abs((rotateVal * Math.PI) / 180));
    const depth = 100000 * sinRot * sinRot;
    panel.element.style.transform = `translateZ(-${depth}px) rotateX(${rotateVal}deg)`;
    panel.element.style.filter = `brightness(${-filterVal + 1})`;
    // console.log(-filterVal + 1);
  });
};

const WorksSection = () => {
  const [s, setS] = useState(1);
  useEffect(() => {
    const camera = document.getElementsByClassName("flicking-camera");
    camera[0].style.transformStyle = "preserve-3d";
  }, []);

  ///////////////
  // ANIMATORS //
  ///////////////
  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      // Get Other Planets Ref
      const Background_Ball_A = document.getElementById("Background_Ball_A");
      const Background_Ball_B = document.getElementById("Background_Ball_B");
      const Background_Ball_C = document.getElementById("Background_Ball_C");

      // Get Scroll Value
      var scrolled = window.scrollY;

      // Randomize Translate
      var short = scrolled * 0.1;
      var mid = scrolled * 0.2;
      var large = scrolled * 0.3;

      // Other Planets Animate
      Background_Ball_A.style.transform = "translateY(" + mid + "px)";
      Background_Ball_B.style.transform =
        "translateY(" + scrolled * 0.5 + "px)";
      Background_Ball_C.style.transform =
        "translateY(" + scrolled * 0.15 + "px)";
    });
  }, []);

  ////////////
  // RENDER //
  ////////////

  return (
    <section className={styles.Container} id="work">
      {/* 88888888888888888888888 */}
      {/* FXs */}
      <div className={`${styles.Container_Background_FX} Container_Background`}>
        <div className={styles.Container_Overflow_Background_FX}>
          {/* PLANET AND FXS */}
          <div className={`${styles.Container_Planet} Container_Background`}>
            <img src={Planet} alt="Pixel Planet" className={styles.Planet} />
            <div className={styles.Glow} />
            <div className={styles.FX_Planet_A} />
            <div className={styles.FX_Planet_B} />
          </div>

          {/* Background Balls */}
          <div className={styles.Background_Ball_A} id="Background_Ball_A" />
          <div className={styles.Background_Ball_B} id="Background_Ball_B" />
          <div className={styles.Background_Ball_C} id="Background_Ball_C" />

          {/* Background FXs */}
          <div className={styles.Background_FX_A} />
          <div className={styles.Background_FX_B} />
          <div className={styles.Background_FX_C} />
          <div className={styles.Background_FX_D} />
          <div className={styles.Background_FX_E} />
        </div>
      </div>
      {/* 88888888888888888888888 */}

      {/* CONTENT */}
      <div className={`${styles.Container_Content} Container_Content`}>
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
                logo={APLogo}
                title={"Astronaut Penguin"}
                text={
                  "We created the first cold wallet in Latin America and the physical world first for mobile."
                }
                // textStyle={{paddingTop: '30px'}}
                footText={"View Post"}
                contractLink={"https://tribetoken.app/#/"}
                s={s}
                index={2}
              />
            </div>
            <div className={styles.Card}>
              <ClientCard
                logo={CapyLogo}
                title={"CAPYARMY"}
                text={
                  "We developed the home and the mint page for the collection on Polygon."
                }
                s={s}
                index={3}
                enableSoon
              />
            </div>
            <div className={styles.Card}>
              <ClientCard
                logo={MatchLogo}
                title={"Matchain"}
                text={
                  "The very first TON decentralized game platform, focused on the education of new game developers and the boost of experienced ones."
                }
                enableSoon
                s={s}
                index={4}
              />
            </div>
          </Flicking>
        </div>

        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          // mousewheel={true}
          // keyboard={true}
          allowTouchMove={false}
          modules={[Navigation, Pagination]}
          className="mySwipere"
        >
          <SwiperSlide>
            <div className={styles.TabletContainer}>
              <div className={styles.Column} style={{ marginTop: "140px" }}>
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
                    enableFoot
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
                    logo={CapyLogo}
                    title={"CAPYARMY"}
                    text={
                      "We developed the home and the mint page for the collection on Polygon."
                    }
                    s={s}
                    index={1}
                    enableSoon
                  />
                </div>
              </div>

              <div className={styles.Column}>
                <div className={styles.Card}>
                  <ClientCard
                    logo={APLogo}
                    title={"Astronaut Penguin"}
                    text={
                      "We created the first cold wallet in Latin America and the physical world first for mobile."
                    }
                    enableFoot
                    footText={"View Post"}
                    contractLink={"https://tribetoken.app/#/"}
                    s={s}
                    index={3}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.TabletContainer}>
              <div className={styles.Column} style={{ marginTop: "140px" }}>
                <div className={styles.Card}>
                  <ClientCard
                    logo={MatchLogo}
                    title={"Matchain"}
                    text={
                      "The very first TON decentralized game platform, focused on the education of new game developers and the boost of experienced ones."
                    }
                    enableSoon
                    s={s}
                    index={3}
                  />
                </div>
              </div>

              <div className={styles.Column}>
                <div className={styles.Card}>
                  <ClientCard
                    logo={APLogo}
                    title={"New Project"}
                    text={""}
                    enableSoon
                    s={s}
                    index={3}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

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
          <div className={styles.DotsContainer}>
            <div
              className={`${styles.TextContainer} ${
                s == 4 ? styles.DotSelected : styles.DotNotSelected
              }`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
