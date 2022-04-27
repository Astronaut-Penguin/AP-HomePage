//- Import React
import React from 'react';

//- Import Styles
import styles from './footer.module.css';

//- Import Images
import APLogo from './assets/apLogo.svg';
import Telegram from './assets/telegramLogo.svg';
import Twitter from './assets/twitterLogo.svg';
import Instagram from './assets/igLogo.svg';
import Discord from './assets/discordLogo.svg';

const FooterSection = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.APContainer}>
                <img className={styles.APLogo} src={APLogo}/>
            </div>
            <div className={styles.SocialContainer}>
                <a
                    title="Telegram"
                    href=""
                    target="_blank"
				>
                    <img src={Telegram} alt="Telegram" className={styles.Social}/>
                </a>
                <a
                    title="Twitter"
                    href=""
                    target="_blank"
                    className={styles.Social}
				>
                    <img src={Twitter} alt="Twitter" className={styles.Social} />
                </a>
                <a
                    title="Instagram"
                    href=""
                    target="_blank"
                    className={styles.Social}
				>
                    <img src={Instagram} alt="Instagram" className={styles.Social} />
                </a>
                <a
                    title="Discord"
                    href=""
                    target="_blank"
                    className={styles.Social}
				>
                    <img src={Discord} alt="Discord" className={styles.Social} />
                </a>
            </div>
        </div>   
    );
}

export default FooterSection;