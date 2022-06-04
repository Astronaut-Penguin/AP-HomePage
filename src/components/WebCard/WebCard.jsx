//- Import React
import React from 'react';

//- Import Styles
import styles from './WebCard.module.css';

//- Import Images
import PlayLogo from './assets/play.png';
import Planet from './assets/planet.png';

const WebCard = ({enablePlay, title, site}) => {
    return (
        <a href={site} target="_blank" className={styles.WebWrap}>
            <div className={styles.WebCard}>
                <div className={styles.PlayContainer}>
                <svg width="38" height="44" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles.PlayLogo} ${enablePlay ? styles.Selected : styles.NotSelected}`}>
                    <path d="M36.25 21.5694C36.5833 21.7619 36.5833 22.243 36.25 22.4355L2.50001 41.921C2.16667 42.1135 1.75 41.8729 1.75 41.488L1.75 2.51687C1.75 2.13197 2.16668 1.89141 2.5 2.08386L36.25 21.5694Z" stroke="white" stroke-width="3"/>
                </svg>

                    {/* <img src={PlayLogo} className={`${styles.PlayLogo} ${enablePlay ? styles.Selected : styles.NotSelected}`}/> */}
                </div>
                {/* <a href={site} target="_blank">
                    <img src={Planet} className={styles.Planet} />
                </a>
                
                <a href={site} target="_blank">
                    <h3 className={styles.CardTitle}>{title}</h3>
                </a> */}
                <img src={Planet} className={styles.Planet} />
                <h3 className={styles.CardTitle}>{title}</h3>
            </div>
        </a>
    );
}

export default WebCard;