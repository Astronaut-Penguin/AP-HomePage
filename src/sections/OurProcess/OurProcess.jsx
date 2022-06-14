//- Import React
import React, { useState, useRef } from "react";

//- Import Expandable Component
import "@blueprintjs/core/lib/css/blueprint.css";
import { Collapse, Button } from "@blueprintjs/core";

//- Import Motion
import { motion } from "framer-motion";

//- Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

//- Import Styles
import styles from "./OurProcess.module.css";
import "swiper/css";
import "swiper/css/bundle";
// import "./swiper-bundle.min.css"

//- Import Components
import Title from "../../components/title/title";
import Text from "../../components/text/text";
import Tablet from "./Tablet";

//- Import Images
import Penguin from "./assets/AnimationInspect.gif";
import Arrow from "./assets/arrow.svg";
import PagArrow from "./assets/pagArrow.svg";

const OurProcessSection = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const variants1 = {
    open: {
      y: 81,
      x: 93,
      backgroundColor: ["hsl(0, 0, 26)", "hsl(5, 88, 57)"],
      scale: 2.2,
    },
    closed: {
      y: 4,
      x: 60,
      backgroundColor: ["hsl(5, 88, 57)", "hsl(0, 0, 26)"],
      scale: 1.0,
    },
  };

  const variants2 = {
    open: {
      y: 81,
      x: 93,
      backgroundColor: ["hsl(0, 0, 26)", "hsl(5, 88, 57)"],
      scale: 2.2,
    },
    closed: {
      y: 10,
      x: 120,
      backgroundColor: ["hsl(5, 88, 57)", "hsl(0, 0, 26)"],
      scale: 1.0,
    },
  };

  const variants3 = {
    open: {
      y: 81,
      x: 93,
      backgroundColor: ["hsl(0, 0, 26)", "hsl(5, 88, 57)"],
      scale: 2.2,
    },
    closed: {
      y: 59,
      x: 160,
      backgroundColor: ["hsl(5, 88, 57)", "hsl(0, 0, 26)"],
      scale: 1.0,
    },
  };

  const variants4 = {
    open: {
      y: 81,
      x: 93,
      backgroundColor: ["hsl(0, 0, 26)", "hsl(5, 88, 57)"],
      scale: 2.2,
    },
    closed: {
      y: 120,
      x: 171,
      backgroundColor: ["hsl(5, 88, 57)", "hsl(0, 0, 26)"],
      scale: 1.0,
    },
  };

  const [isMotionOpen1, setMotionOpen1] = useState(true);
  const [isMotionOpen2, setMotionOpen2] = useState(false);
  const [isMotionOpen3, setMotionOpen3] = useState(false);
  const [isMotionOpen4, setMotionOpen4] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className={styles.Container} id="process">
      <div className={styles.TitleContainer}>
        <Title text={"Our Process"} />
      </div>
      <div className={styles.TextContainer}>
        <Text
          text={
            "Our process is based on Human Centered Design. We are constantly in contact with the client, looking for feedback and to streamline the process."
          }
        />
      </div>

      <div className={styles.ProcessContainer}>
        <div className={styles.ProcessContainer}>
          <div className={styles.RightSide}>
            {isMotionOpen1 ? (
              <div className={styles.ChangeButton}>
                <motion.div
                  animate={isMotionOpen1 ? "open" : "closed"}
                  variants={variants1}
                  transition={{ duration: 1.0 }}
                  className={styles.Caja}
                  onClick={() => setMotionOpen1(false)}
                >
                  <div
                    className={styles.SmallNumber}
                    style={{ marginTop: "12px", marginLeft: "8px" }}
                  >
                    #1
                  </div>
                </motion.div>
              </div>
            ) : (
              <div className={styles.ChangeButton}>
                <motion.div
                  animate={isMotionOpen1 ? "open" : "closed"}
                  variants={variants1}
                  transition={{ duration: 1.0 }}
                  className={styles.Caja}
                  onClick={() => {
                    setMotionOpen1(true);
                    setMotionOpen2(false);
                    setMotionOpen3(false);
                    setMotionOpen4(false);
                  }}
                >
                  <div
                    className={styles.SmallNumber}
                    style={{ marginTop: "12px", marginLeft: "8px" }}
                  >
                    #1
                  </div>
                </motion.div>
              </div>
            )}

            {isMotionOpen2 ? (
              <div className={styles.ChangeButton}>
                <motion.div
                  animate={isMotionOpen2 ? "open" : "closed"}
                  variants={variants2}
                  transition={{ duration: 1.0 }}
                  className={styles.Caja}
                  onClick={() => setMotionOpen2(false)}
                >
                  <div
                    className={styles.SmallNumber}
                    style={{ marginTop: "12px", marginLeft: "8px" }}
                  >
                    #2
                  </div>
                </motion.div>
              </div>
            ) : (
              <div className={styles.ChangeButton}>
                <motion.div
                  animate={isMotionOpen2 ? "open" : "closed"}
                  variants={variants2}
                  transition={{ duration: 1.0 }}
                  className={styles.Caja}
                  onClick={() => {
                    setMotionOpen2(true);
                    setMotionOpen1(false);
                    setMotionOpen3(false);
                    setMotionOpen4(false);
                  }}
                >
                  <div
                    className={styles.SmallNumber}
                    style={{ marginTop: "12px", marginLeft: "8px" }}
                  >
                    #2
                  </div>
                </motion.div>
              </div>
            )}

            {isMotionOpen3 ? (
              <div className={styles.ChangeButton}>
                <motion.div
                  animate={isMotionOpen3 ? "open" : "closed"}
                  variants={variants3}
                  transition={{ duration: 1.0 }}
                  className={styles.Caja}
                  onClick={() => setMotionOpen3(false)}
                >
                  <div
                    className={styles.SmallNumber}
                    style={{ marginTop: "12px", marginLeft: "8px" }}
                  >
                    #3
                  </div>
                </motion.div>
              </div>
            ) : (
              <div className={styles.ChangeButton}>
                <motion.div
                  animate={isMotionOpen3 ? "open" : "closed"}
                  variants={variants3}
                  transition={{ duration: 1.0 }}
                  className={styles.Caja}
                  onClick={() => {
                    setMotionOpen3(true);
                    setMotionOpen1(false);
                    setMotionOpen2(false);
                    setMotionOpen4(false);
                  }}
                >
                  <div
                    className={styles.SmallNumber}
                    style={{ marginTop: "12px", marginLeft: "8px" }}
                  >
                    #3
                  </div>
                </motion.div>
              </div>
            )}

            {isMotionOpen4 ? (
              <div className={styles.ChangeButton}>
                <motion.div
                  animate={isMotionOpen4 ? "open" : "closed"}
                  variants={variants4}
                  transition={{ duration: 1.0 }}
                  className={styles.Caja}
                  onClick={() => setMotionOpen4(false)}
                >
                  <div
                    className={styles.SmallNumber}
                    style={{ marginTop: "12px", marginLeft: "8px" }}
                  >
                    #4
                  </div>
                </motion.div>
              </div>
            ) : (
              <div className={styles.ChangeButton}>
                <motion.div
                  animate={isMotionOpen4 ? "open" : "closed"}
                  variants={variants4}
                  transition={{ duration: 1.0 }}
                  className={styles.Caja}
                  onClick={() => {
                    setMotionOpen4(true);
                    setMotionOpen1(false);
                    setMotionOpen2(false);
                    setMotionOpen3(false);
                  }}
                >
                  <div
                    className={styles.SmallNumber}
                    style={{ marginTop: "12px", marginLeft: "8px" }}
                  >
                    #4
                  </div>
                </motion.div>
              </div>
            )}

            <img className={styles.Penguin} src={Penguin} />
          </div>

          {isMotionOpen1 ? (
            <div className={styles.LeftSide}>
              <h4 className={styles.ProcessTitle}>OBSERVATION</h4>
              <h4 className={styles.ProcessText}>
                We reach the client and ask for the necessary information to do
                the project. Goals, target, timeframes, expectations.
              </h4>

              <Collapse isOpen={isOpen} className={styles.ProcessText}>
                We talk to the client to know him better and help him find the
                answers to the project and make a better outcome.
              </Collapse>
              <a onClick={() => setIsOpen(!isOpen)} className={styles.Button}>
                {isOpen ? (
                  <img className={styles.ImgOpen} src={Arrow} />
                ) : (
                  <img className={styles.Img} src={Arrow} />
                )}
              </a>
            </div>
          ) : null}

          {isMotionOpen2 ? (
            <div className={styles.LeftSide}>
              <h4 className={styles.ProcessTitle}>IDEATION</h4>
              <h4 className={styles.ProcessText}>
                With all the information, we design answers consistent with the
                client requirements, we investigate deeply on the right users,
                the tasks they need to know to achieve what they want,
                developing the structure and architecture of the system.
              </h4>

              <Collapse isOpen={isOpen} className={styles.ProcessText}>
                As we move forward, our designers create prototypes which will
                be tested. And the product owner talks to the client to have
                feedback.
              </Collapse>
              <a onClick={() => setIsOpen(!isOpen)} className={styles.Button}>
                {isOpen ? (
                  <img className={styles.ImgOpen} src={Arrow} />
                ) : (
                  <img className={styles.Img} src={Arrow} />
                )}
              </a>
            </div>
          ) : null}

          {isMotionOpen3 ? (
            <div className={styles.LeftSide}>
              <h4 className={styles.ProcessTitle}>CREATION</h4>
              <h4 className={styles.ProcessText}>
                With the client`s feedback, our creative team starts the design,
                using forefront UX and graphic systems to achieve the goal. We
                test the products with user types to find issues and solve them.
              </h4>

              <Collapse isOpen={isOpen} className={styles.ProcessText}>
                When the design phase is approved by the client, the developers
                start to plan the programming logic and then, start to develop
                the structure based on the design, performing testings that will
                confirm everything goes according to plan.
              </Collapse>
              <a onClick={() => setIsOpen(!isOpen)} className={styles.Button}>
                {isOpen ? (
                  <img className={styles.ImgOpen} src={Arrow} />
                ) : (
                  <img className={styles.Img} src={Arrow} />
                )}
              </a>
            </div>
          ) : null}

          {isMotionOpen4 ? (
            <div className={styles.LeftSide}>
              <h4 className={styles.ProcessTitle}>IMPLEMENTATION</h4>
              <h4 className={styles.ProcessText}>
                In this final phase, we fix and merge all the components and
                apply the technological solutions needed for the client to know
                the system and be satisfied with the result.
              </h4>

              <Collapse isOpen={isOpen} className={styles.ProcessText}>
                We think we are a bridge between users and clients, achieving
                effective communication to make a great experience.
              </Collapse>
              <a onClick={() => setIsOpen(!isOpen)} className={styles.Button}>
                {isOpen ? (
                  <img className={styles.ImgOpen} src={Arrow} />
                ) : (
                  <img className={styles.Img} src={Arrow} />
                )}
              </a>
            </div>
          ) : null}
        </div>
      </div>

      <div className={styles.ProcessContainerPC}>
        <div className={styles.CarouselContainer}>
          <img src={Penguin} className={styles.PenguinPC} />
        </div>
        <div className={styles.CarouselContainerNumber}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            allowTouchMove={false}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className={styles.SlideNumber}>#1</SwiperSlide>
            <SwiperSlide className={styles.SlideNumber}>#2</SwiperSlide>
            <SwiperSlide className={styles.SlideNumber}>#3</SwiperSlide>
            <SwiperSlide className={styles.SlideNumber}>#4</SwiperSlide>
            <button ref={prevRef} className={styles.PrevArrow}>
              <img src={PagArrow} className={styles.Prev} />
            </button>
            <button ref={nextRef} className={styles.NextArrow}>
              <img src={PagArrow} />
              <svg
                width="22"
                height="32"
                viewBox="0 0 22 32"
                fill="#F24130"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.Blur}
              >
                <path
                  d="M3.87605 15.2882L3 16M3 16L19 29M3 16L19 3"
                  stroke="white"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </Swiper>
        </div>
        <div className={styles.ContainerPC}>
          <div className={styles.TitleContainerPC}>
            <Title text={"Our Process"} />
          </div>
          <div className={styles.TextContainerPC}>
            <Text
              text={
                "Our process is based on Human Centered Design. We are constantly in contact with the client, looking for feedback and to streamline the process."
              }
            />
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            allowTouchMove={false}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className={styles.SlideText}>
              <h4 className={styles.ProcessTitle}>OBSERVATION</h4>
              <h4 className={styles.ProcessText}>
                We reach the client and ask for the necessary information to do
                the project. Goals, target, timeframes, expectations.
              </h4>
              <h4 className={styles.ProcessText}>
                We talk to the client to know him better and help him find the
                answers to the project and make a better outcome.
              </h4>
            </SwiperSlide>
            <SwiperSlide className={styles.SlideText}>
              <h4 className={styles.ProcessTitle}>IDEATION</h4>
              <h4 className={styles.ProcessText}>
                With all the information, we design answers consistent with the
                client requirements, we investigate deeply on the right users,
                the tasks they need to know to achieve what they want,
                developing the structure and architecture of the system.
              </h4>
              <h4 className={styles.ProcessText}>
                As we move forward, our designers create prototypes which will
                be tested. And the product owner talks to the client to have
                feedback.
              </h4>
            </SwiperSlide>
            <SwiperSlide className={styles.SlideText}>
              <h4 className={styles.ProcessTitle}>CREATION</h4>
              <h4 className={styles.ProcessText}>
                With the client`s feedback, our creative team starts the design,
                using forefront UX and graphic systems to achieve the goal. We
                test the products with user types to find issues and solve them.
              </h4>
              <h4 className={styles.ProcessText}>
                When the design phase is approved by the client, the developers
                start to plan the programming logic and then, start to develop
                the structure based on the design, performing testings that will
                confirm everything goes according to plan.
              </h4>
            </SwiperSlide>
            <SwiperSlide className={styles.SlideText}>
              <h4 className={styles.ProcessTitle}>IMPLEMENTATION</h4>
              <h4 className={styles.ProcessText}>
                In this final phase, we fix and merge all the components and
                apply the technological solutions needed for the client to know
                the system and be satisfied with the result.
              </h4>
              <h4 className={styles.ProcessText}>
                We think we are a bridge between users and clients, achieving
                effective communication to make a great experience.
              </h4>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <Tablet />
    </section>
  );
};

export default OurProcessSection;
