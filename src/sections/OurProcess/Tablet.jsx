//- Import React
import React, { useState, useRef } from "react";

//- Import Expandable Component
import "@blueprintjs/core/lib/css/blueprint.css";
import { Collapse, Button } from "@blueprintjs/core";

//- Import Motion
import { motion } from "framer-motion";

//- Import Styles
import styles from "./OurProcess.module.css";

//- Import Images
import Penguin from "./assets/AnimationInspect.gif";
import Arrow from "./assets/arrow.svg";
import PagArrow from "./assets/pagArrow.svg";

const Tablet = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  
    const variants1 = {
      open: { 
          y: 91, 
          x: 93,
          backgroundColor: ['hsl(0, 0, 26)', 'hsl(5, 88, 57)'],
          scale: 2.2 
      },
      closed: { 
          y: -6, 
          x: 45,
          backgroundColor: ['hsl(5, 88, 57)', 'hsl(0, 0, 26)' ],
          scale: 1.0
      },
    }
  
    const variants2 = {
      open: { 
          y: 91, 
          x: 93,
          backgroundColor: ['hsl(0, 0, 26)', 'hsl(5, 88, 57)'],
          scale: 2.2 
      },
      closed: { 
          y: -4, 
          x: 127,
          backgroundColor: ['hsl(5, 88, 57)', 'hsl(0, 0, 26)' ],
          scale: 1.0
      },
    }
  
    const variants3 = {
      open: { 
          y: 91, 
          x: 93,
          backgroundColor: ['hsl(0, 0, 26)', 'hsl(5, 88, 57)'],
          scale: 2.2 
      },
      closed: { 
          y: 59, 
          x: 190,
          backgroundColor: ['hsl(5, 88, 57)', 'hsl(0, 0, 26)' ],
          scale: 1.0
      },
    }
  
    const variants4 = {
      open: { 
          y: 91, 
          x: 93,
          backgroundColor: ['hsl(0, 0, 26)', 'hsl(5, 88, 57)'],
          scale: 2.2 
      },
      closed: { 
          y: 140, 
          x: 195,
          backgroundColor: ['hsl(5, 88, 57)', 'hsl(0, 0, 26)' ],
          scale: 1.0
      },
    }
  
    const [isMotionOpen1, setMotionOpen1] = useState(true)
    const [isMotionOpen2, setMotionOpen2] = useState(false)
    const [isMotionOpen3, setMotionOpen3] = useState(false)
    const [isMotionOpen4, setMotionOpen4] = useState(false)
  
    const prevRef = useRef(null);
    const nextRef = useRef(null);
  
    return (
      <section className={styles.Container}>
          <div className={styles.ProcessContainerTablet}>
              <div className={styles.ProcessContainerTablet}>
                  <div className={styles.RightSide}>
  
                      { isMotionOpen1 ? (
                          <div className={styles.ChangeButton}>
                              <motion.div 
                                  animate={isMotionOpen1 ? "open" : "closed"} 
                                  variants={variants1}
                                  transition= {{ duration: 1.0 }}
                                  className={styles.Caja}
                                  onClick={() => setMotionOpen1(false)}
                              >
                                  <div className={styles.SmallNumber} style={{marginTop: '17px', marginLeft: '12px'}}>#1</div>
                              </motion.div>
                          </div>
                      ) : (
                          <div className={styles.ChangeButton}>
                              <motion.div 
                                  animate={isMotionOpen1 ? "open" : "closed"} 
                                  variants={variants1}
                                  transition= {{ duration: 1.0 }}
                                  className={styles.Caja}
                                  onClick={ () => {setMotionOpen1(true); setMotionOpen2(false); setMotionOpen3(false); setMotionOpen4(false); }}
                              >
                                  <div className={styles.SmallNumber} style={{marginTop: '17px', marginLeft: '12px'}}>#1</div>
                              </motion.div>
                          </div>
                      ) }
  
                      { isMotionOpen2 ? (
                          <div className={styles.ChangeButton}>
                              <motion.div 
                                  animate={isMotionOpen2 ? "open" : "closed"} 
                                  variants={variants2}
                                  transition= {{ duration: 1.0 }}
                                  className={styles.Caja}
                                  onClick={() => setMotionOpen2(false)}
                              >
                                  <div className={styles.SmallNumber} style={{marginTop: '17px', marginLeft: '12px'}}>#2</div>
                              </motion.div>
                          </div>
                      ) : (
                          <div className={styles.ChangeButton}>
                              <motion.div 
                                  animate={isMotionOpen2 ? "open" : "closed"} 
                                  variants={variants2}
                                  transition= {{ duration: 1.0 }}
                                  className={styles.Caja}
                                  onClick={ () => {setMotionOpen2(true); setMotionOpen1(false); setMotionOpen3(false); setMotionOpen4(false); }}
                              >
                                  <div className={styles.SmallNumber} style={{marginTop: '17px', marginLeft: '12px'}}>#2</div>
                              </motion.div>
                          </div>
                      ) }
  
                      { isMotionOpen3 ? (
                          <div className={styles.ChangeButton}>
                              <motion.div 
                                  animate={isMotionOpen3 ? "open" : "closed"} 
                                  variants={variants3}
                                  transition= {{ duration: 1.0 }}
                                  className={styles.Caja}
                                  onClick={() => setMotionOpen3(false)}
                              >
                                  <div className={styles.SmallNumber} style={{marginTop: '17px', marginLeft: '12px'}}>#3</div>
                              </motion.div>
                          </div>
                      ) : (
                          <div className={styles.ChangeButton}>
                              <motion.div 
                                  animate={isMotionOpen3 ? "open" : "closed"} 
                                  variants={variants3}
                                  transition= {{ duration: 1.0 }}
                                  className={styles.Caja}
                                  onClick={ () => {setMotionOpen3(true); setMotionOpen1(false); setMotionOpen2(false); setMotionOpen4(false); }}
                              >
                                  <div className={styles.SmallNumber} style={{marginTop: '17px', marginLeft: '12px'}}>#3</div>
                              </motion.div>
                          </div>
                      ) }
  
                      { isMotionOpen4 ? (
                          <div className={styles.ChangeButton}>
                              <motion.div 
                                  animate={isMotionOpen4 ? "open" : "closed"} 
                                  variants={variants4}
                                  transition= {{ duration: 1.0 }}
                                  className={styles.Caja}
                                  onClick={() => setMotionOpen4(false)}
                              >
                                  <div className={styles.SmallNumber} style={{marginTop: '17px', marginLeft: '12px'}}>#4</div>
                              </motion.div>
                          </div>
                      ) : (
                          <div className={styles.ChangeButton} >
                              <motion.div 
                                  animate={isMotionOpen4 ? "open" : "closed"} 
                                  variants={variants4}
                                  transition= {{ duration: 1.0 }}
                                  className={styles.Caja}
                                  onClick={ () => {setMotionOpen4(true); setMotionOpen1(false); setMotionOpen2(false); setMotionOpen3(false); }}
                              >
                                  <div className={styles.SmallNumber} style={{marginTop: '17px', marginLeft: '12px'}}>#4</div>
                              </motion.div>
                          </div>
                      ) }
                      
                        <img className={styles.Penguin} src={Penguin} />
                    </div>

                    { isMotionOpen1 ? (

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
                
                ) : (
                        null
                    )}

                    { isMotionOpen2 ? (
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
                    ) : (
                        null
                    )}

                    { isMotionOpen3 ? (
                    <div className={styles.LeftSide}>
                            <h4 className={styles.ProcessTitle}>CREATION</h4>
                            <h4 className={styles.ProcessText}>
                                With the client`s feedback, our creative team starts the design, using forefront UX and graphic systems to achieve the goal. We test the products with user types to find issues and solve them.
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
                    ) : (
                        null
                    )}

                    { isMotionOpen4 ? (
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
                    ) : (
                        null
                    )}  
                </div>
            </div>
        </section>
    );
};
  
export default Tablet;  