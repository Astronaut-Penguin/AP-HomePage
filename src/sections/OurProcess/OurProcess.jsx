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
  const [s, setS] = useState(1);
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
            {s == 1 &&
                <div className={styles.Change}>
                    <div className={styles.RightSide}>
                        <div className={styles.Number}>#1</div>
                        <div className={styles.RedBall}></div>

                        <a onClick={() => setS(2)}>
                            <div className={styles.SmallNumber} style={{marginTop: '23px', marginLeft: '129px'}}>#2</div>
                            <div className={styles.GrayBall} style={{marginTop: '10px', marginLeft: '120px'}}></div>
                        </a>

                        <a onClick={() => setS(3)}>
                            <div className={styles.SmallNumber} style={{marginTop: '73px', marginLeft: '169px'}}>#3</div>
                            <div className={styles.GrayBall} style={{marginTop: '60px', marginLeft: '160px'}}></div>
                        </a>

                        <a onClick={() => setS(4)}>
                            <div className={styles.SmallNumber} style={{marginTop: '133px', marginLeft: '179px'}}>#4</div>
                            <div className={styles.GrayBall} style={{marginTop: '120px', marginLeft: '170px'}}></div>
                        </a>

                        <img className={styles.Penguin} src={Penguin} />
                    </div>

                    <div className={styles.LeftSide}>
                        <h4 className={styles.ProcessTitle}>OBSERVATION</h4>
                        <h4 className={styles.ProcessText}>
                            We reach the client and ask for the necessary information to do the project. Goals, target, timeframes, expectations. 
                        </h4>

                        <Collapse isOpen={isOpen} className={styles.ProcessText}>
                            We talk to the client to know him better and help him find the answers to the project and make a better outcome.
                        </Collapse>
                        <a onClick={() => setIsOpen(!isOpen)} className={styles.Button}>
                            {isOpen ? (
                                <img className={styles.ImgOpen} src={Arrow} />
                            ) : (
                                <img className={styles.Img} src={Arrow} />
                            )}
                        </a>
                    </div>
                </div>
            }

            {s == 2 &&
                <div className={styles.Change}>
                    <div className={styles.RightSide}>
                        <div className={styles.Number}>#2</div>
                        <div className={styles.RedBall}></div>

                        <a onClick={() => setS(1)}>
                            <div className={styles.SmallNumber} style={{marginTop: '23px', marginLeft: '129px'}}>#1</div>
                            <div className={styles.GrayBall} style={{marginTop: '10px', marginLeft: '120px'}}></div>
                        </a>

                        <a onClick={() => setS(3)}>
                            <div className={styles.SmallNumber} style={{marginTop: '73px', marginLeft: '169px'}}>#3</div>
                            <div className={styles.GrayBall} style={{marginTop: '60px', marginLeft: '160px'}}></div>
                        </a>

                        <a onClick={() => setS(4)}>
                            <div className={styles.SmallNumber} style={{marginTop: '133px', marginLeft: '179px'}}>#4</div>
                            <div className={styles.GrayBall} style={{marginTop: '120px', marginLeft: '170px'}}></div>
                        </a>
                        
                        <img className={styles.Penguin} src={Penguin} />
                    </div>

                    <div className={styles.LeftSide}>
                        <h4 className={styles.ProcessTitle}>IDEATION</h4>
                        <h4 className={styles.ProcessText}>
                            With all the information, we design answers consistent with the client requirements, we investigate deeply on the right users, the tasks they need to know to achieve what they want, developing the structure and architecture of the system.
                        </h4>

                        <Collapse isOpen={isOpen} className={styles.ProcessText}>
                            As we move forward, our designers create prototypes which will be tested. And the product owner talks to the client to have feedback.
                        </Collapse>
                        <a onClick={() => setIsOpen(!isOpen)} className={styles.Button}>
                            {isOpen ? (
                                <img className={styles.ImgOpen} src={Arrow} />
                            ) : (
                                <img className={styles.Img} src={Arrow} />
                            )}
                        </a>
                    </div>
                </div>
            }

            {s == 3 &&
                <div className={styles.Change}>
                    <div className={styles.RightSide}>
                        <div className={styles.Number}>#3</div>
                        <div className={styles.RedBall}></div>

                        <a onClick={() => setS(1)}>
                            <div className={styles.SmallNumber} style={{marginTop: '23px', marginLeft: '129px'}}>#1</div>
                            <div className={styles.GrayBall} style={{marginTop: '10px', marginLeft: '120px'}}></div>
                        </a>

                        <a onClick={() => setS(2)}>
                            <div className={styles.SmallNumber} style={{marginTop: '73px', marginLeft: '169px'}}>#2</div>
                            <div className={styles.GrayBall} style={{marginTop: '60px', marginLeft: '160px'}}></div>
                        </a>

                        <a onClick={() => setS(4)}>
                            <div className={styles.SmallNumber} style={{marginTop: '133px', marginLeft: '179px'}}>#4</div>
                            <div className={styles.GrayBall} style={{marginTop: '120px', marginLeft: '170px'}}></div>
                        </a>
                        
                        <img className={styles.Penguin} src={Penguin} />
                    </div>

                    <div className={styles.LeftSide}>
                        <h4 className={styles.ProcessTitle}>CREATION</h4>
                        <h4 className={styles.ProcessText}>
                            With the client’s feedback, our creative team starts the design, using forefront UX and graphic systems to achieve the goal. We test the products with user types to find issues and solve them.
                        </h4>

                        <Collapse isOpen={isOpen} className={styles.ProcessText}>
                            When the design phase is approved by the client, the developers start to plan the programming logic and then, start to develop the structure based on the design, performing testings that will confirm everything goes according to plan.
                        </Collapse>
                        <a onClick={() => setIsOpen(!isOpen)} className={styles.Button}>
                            {isOpen ? (
                                <img className={styles.ImgOpen} src={Arrow} />
                            ) : (
                                <img className={styles.Img} src={Arrow} />
                            )}
                        </a>
                    </div>
                </div>
            }

            {s == 4 &&
                <div className={styles.Change}>
                    <div className={styles.RightSide}>
                        <div className={styles.Number}>#4</div>
                        <div className={styles.RedBall}></div>

                        <a onClick={() => setS(1)}>
                            <div className={styles.SmallNumber} style={{marginTop: '23px', marginLeft: '129px'}}>#1</div>
                            <div className={styles.GrayBall} style={{marginTop: '10px', marginLeft: '120px'}}></div>
                        </a>

                        <a onClick={() => setS(2)}>
                            <div className={styles.SmallNumber} style={{marginTop: '73px', marginLeft: '169px'}}>#2</div>
                            <div className={styles.GrayBall} style={{marginTop: '60px', marginLeft: '160px'}}></div>
                        </a>

                        <a onClick={() => setS(3)}>
                            <div className={styles.SmallNumber} style={{marginTop: '133px', marginLeft: '179px'}}>#3</div>
                            <div className={styles.GrayBall} style={{marginTop: '120px', marginLeft: '170px'}}></div>
                        </a>
                        
                        <img className={styles.Penguin} src={Penguin} />
                    </div>

                    <div className={styles.LeftSide}>
                        <h4 className={styles.ProcessTitle}>IMPLEMENTATION</h4>
                        <h4 className={styles.ProcessText}>
                            In this final phase, we fix and merge all the components and apply the technological solutions needed for the client to know the system and be satisfied with the result.
                        </h4>

                        <Collapse isOpen={isOpen} className={styles.ProcessText}>
                            We think we are a bridge between users and clients, achieving effective communication to make a great experience.
                        </Collapse>
                        <a onClick={() => setIsOpen(!isOpen)} className={styles.Button}>
                            {isOpen ? (
                                <img className={styles.ImgOpen} src={Arrow} />
                            ) : (
                                <img className={styles.Img} src={Arrow} />
                            )}
                        </a>
                    </div>
                </div>
            }   
        </div>
    </section>
  );
};

export default OurProcessSection;
