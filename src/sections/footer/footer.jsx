//- Import React
import React from 'react';

//- Import Styles
import styles from './footer.module.css';

//- Import Images
import APLogo from './assets/apLogo.png';
import Telegram from './assets/telegramLogo.png';
import Twitter from './assets/twLogo.png';
import Instagram from './assets/igLogo.png';

const FooterSection = () => {
    return (
        <div className={styles.Container}>
            <div>
                <img className={styles.APLogo} src={APLogo}/>
            </div>
            <div className={styles.SocialContainer}>
                <a
                    title="Telegram"
                    href=""
                    target="_blank"
                    className={styles.Social}
				>
                    <img src={Telegram} alt="Telegram" />
                </a>
                <a
                    title="Twitter"
                    href=""
                    target="_blank"
                    className={styles.Social}
				>
                    <img src={Twitter} alt="Twitter" />
                </a>
                <a
                    title="Instagram"
                    href=""
                    target="_blank"
                    className={styles.Social}
				>
                    <img src={Instagram} alt="Instagram" />
                </a>
            </div>
        </div>   
    );
}

export default FooterSection;