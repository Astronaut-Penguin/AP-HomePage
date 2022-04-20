//- Import React
import React from 'react';
import Countdown from 'react-countdown';

//- Import Styles
import styles from './NewProject.module.css';

//- Import Images
import Penguin from './assets/penguin.png';

//- Import Components
import Title from '../../components/title/title';
import CtaButton from '../../components/Button/CtaButton/CtaButton';

const NewProjectSection = () => {
    return (
        <section className={styles.Container}>
             <div className={styles.Title}>
                <Title text={"New project"}/>
                <h3 className={styles.Soon}>COMING SOON</h3>
            </div>
            <div className={styles.Penguin}>
                <img src={Penguin} />
            </div>

            <Countdown 
                date={Date.now() + 200000000} 
                renderer={props => (
                    <div className={styles.Count}>
                      {props.formatted.days} : {props.formatted.hours} : {props.formatted.minutes}
                    </div>
                  )}
                zeroPadTime={2}
            /> 
            <div className={styles.CountInfo}>
                    <a>DAYS &nbsp; &nbsp;</a> <a>HOURS</a> <a>MINUTES</a>
            </div>

            <div className={styles.Button}>
                <CtaButton text="Start my project" onClick={"/"} large />
            </div>
        </section>
    );
};
    
export default NewProjectSection;