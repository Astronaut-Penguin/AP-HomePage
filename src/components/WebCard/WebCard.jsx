//- Import React
import React from 'react';

//- Import Styles
import styles from './WebCard.module.css';

//- Import Images
import PlayLogo from './assets/play.png';
import Planet from './assets/planet.png';

const WebCard = ({enablePlay, title, site}) => {
    return (
        <div className={styles.WebWrap}>
            <div className={styles.WebCard}>
                <div className={styles.PlayContainer}>
                    <img src={PlayLogo} className={`${styles.PlayLogo} ${enablePlay ? styles.Selected : styles.NotSelected}`}/>
                </div>
                <a href={site} target="_blank">
                    <img src={Planet} className={styles.Planet} />
                </a>
                <a href={site} target="_blank">
                    <h3 className={styles.CardTitle}>{title}</h3>
                </a>
            </div>
        </div>
    );
}

export default WebCard;