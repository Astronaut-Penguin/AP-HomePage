//- Import React
import React, { useState } from 'react';

//- Import Expandable Component
import '@blueprintjs/core/lib/css/blueprint.css';
import { Collapse, Button } from "@blueprintjs/core";

//- Import Styles
import styles from './Us.module.css';

//- Import Components
import Title from '../../components/title/title';
import CtaButton from '../../components/Button/CtaButton/CtaButton';

//- Import Images
import Penguin1 from './assets/1.png'
import Penguin2 from './assets/2.png'
import Penguin3 from './assets/3.png'
import Penguin4 from './assets/4.png'
import Penguin5 from './assets/5.png'
import Penguin6 from './assets/6.png'
import Penguin7 from './assets/7.png'
import Arrow from './assets/arrow.png'

const UsSection = () => {
    // const [s, setS] = useState(1);
    const [isOpen, setIsOpen] = React.useState(false)
    const [show, setShow] = React.useState(false)

    return (
        <section className={styles.Container}>
            <div className={styles.UsContainer}>
                <Title text={"Us"} />
            </div>
            <div className={styles.Penguins}>
                <a onClick={() => setShow(!show)}> 
                    <img src={Penguin1} className={styles.Penguin1} />
                    {show ? (
                        <div className={styles.Penguin1}>
                            <div className={styles.Line}></div>
                            <div className={styles.SecondLine}></div>
                            <div className={styles.Circle}></div>
                            <h2 className={styles.Person}>Facu</h2>
                            <h3 className={styles.Job}>FRONT-END DEVELOPER</h3>                
                        </div>
                    ) : (
                        <img src={Penguin1} className={styles.Penguin1} />
                    )}
                </a>
                {/* <img src={Penguin1} className={styles.Penguin1} /> */}
                <img src={Penguin2} className={styles.Penguin2} />
                <img src={Penguin3} className={styles.Penguin3} />
                <img src={Penguin4} className={styles.Penguin4} />
                <img src={Penguin5} className={styles.Penguin5} />
                <img src={Penguin6} className={styles.Penguin6} />
                <img src={Penguin7} className={styles.Penguin7} />
            </div>

            <div className={styles.TextContainer}>
                <h4 className={styles.WeMake}>We make experiences.</h4>
                <h4 className={styles.OurTeam}>Our team is qualified to accomplish your project and make it real.</h4>

                <a onClick={() => setIsOpen(!isOpen)} className={styles.Button}> 
                    {isOpen ? (
                        <img className={styles.ImgOpen} src={Arrow} />
                    ) : (
                        <img className={styles.Img} src={Arrow} />
                    )}
                </a>
                <Collapse isOpen={isOpen} className={styles.OurTeam}>
                    We are a multi-disciplinary team of experts in different areas. With focus on new technologies such as Blockchain, NFTs, Web 3.0 and the ultimate trends on design and digital production systems.
                </Collapse>
            </div>
            
            <div className={styles.ButtonContainer}>
                <CtaButton text={"Contact us"} />                
            </div>
        </section>
    );
}

export default UsSection;