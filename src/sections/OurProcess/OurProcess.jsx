//- Import React
import React, { useState } from "react";

//- Import Expandable Component
import "@blueprintjs/core/lib/css/blueprint.css";
import { Collapse, Button } from "@blueprintjs/core";

//- Import Styles
import styles from "./OurProcess.module.css";

//- Import Components
import Title from "../../components/title/title";
import Text from "../../components/text/text";

//- Import Images
import Penguin from "./assets/penguin1.png";
import Arrow from "./assets/arrow.svg";

const OurProcessSection = () => {
  const [is1, set1] = React.useState(false);
  const [is2, set2] = React.useState(false);
  const [is3, set3] = React.useState(false);
  const [is4, set4] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className={styles.Container}>
        <div className={styles.TitleContainer}>
            <Title text={"Our Process"} />
        </div>
        <div className={styles.TextContainer}>
            <Text text={"Our process is based on Human Centered Design. We are constantly in contact with the client, looking for feedback and to streamline the process."} />
        </div>

        <div className={styles.ProcessContainer}>
            <div className={styles.RightSide}>
                <div className={styles.Number}>#1</div>
                <div className={styles.RedBall}></div>

                <a onClick={() => set2(!is2)}>
                    {is2 ? (
                        <div>
                            <div className={styles.SmallNumber} style={{marginTop: '23px', marginLeft: '129px'}}>#1</div>
                            <div className={styles.GrayBall} style={{marginTop: '10px', marginLeft: '120px'}}></div>
                        </div>
                    ) : (
                        <div>
                            <div className={styles.SmallNumber} style={{marginTop: '23px', marginLeft: '129px'}}>#2</div>
                            <div className={styles.GrayBall} style={{marginTop: '10px', marginLeft: '120px'}}></div>
                        </div>
                    )}
                </a>

                <a onClick={() => set3(!is3)}>
                    {is3 ? (
                        <div>
                            <div className={styles.SmallNumber} style={{marginTop: '73px', marginLeft: '169px'}}>#2</div>
                            <div className={styles.GrayBall} style={{marginTop: '60px', marginLeft: '160px'}}></div>
                        </div>
                    ) : (
                        <div>
                            <div className={styles.SmallNumber} style={{marginTop: '73px', marginLeft: '169px'}}>#3</div>
                            <div className={styles.GrayBall} style={{marginTop: '60px', marginLeft: '160px'}}></div>
                        </div>
                    )}
                </a>

                <a onClick={() => set4(!is4)}>
                    {is4 ? (
                        <div>
                            <div className={styles.SmallNumber} style={{marginTop: '133px', marginLeft: '179px'}}>#3</div>
                            <div className={styles.GrayBall} style={{marginTop: '120px', marginLeft: '170px'}}></div>
                        </div>
                    ) : (
                        <div>
                            <div className={styles.SmallNumber} style={{marginTop: '133px', marginLeft: '179px'}}>#4</div>
                            <div className={styles.GrayBall} style={{marginTop: '120px', marginLeft: '170px'}}></div>
                        </div>
                    )}
                </a>

                <img className={styles.Penguin} src={Penguin} />
            </div>

            <div className={styles.LeftSide}>
                <h4 className={styles.ProcessTitle}>OBSERVATION</h4>
                    <h4 className={styles.ProcessText}>
                        We reach the client and ask for the necessary information to do the project. Goals, target, timeframes, expectations. 
                    </h4>
                    <a onClick={() => setIsOpen(!isOpen)} className={styles.Button}>
                        {isOpen ? (
                            <img className={styles.ImgOpen} src={Arrow} />
                        ) : (
                            <img className={styles.Img} src={Arrow} />
                        )}
                    </a>
                    <Collapse isOpen={isOpen} className={styles.ProcessText}>
                        We talk to the client to know him better and help him find the answers to the project and make a better outcome.
                    </Collapse>
            </div>
        </div>
    </section>
  );
};

export default OurProcessSection;
