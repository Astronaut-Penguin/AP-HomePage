//- Import React
import React from 'react';

//- Import Styles
import styles from './clientCard.module.css';

//- Import Logo
import ContractLogo from './assets/contractLogo.png'

// CLIENT CARD COMPONENT
// logo: STRING - URL del logo
// title: STRING - Titulo del cliente
// text: STRING - Texto descriptivo del proyecto
// textStyle: Style - Cualquier corrección para el estilo del texto, en caso de no tener descripciones abajo tipo Profit o Market
// leftTitle: STRING - Titulo del lado izquierdo en el Market
// leftNum: STRING - Precio o referencia en numero del lado izquierdo
// enableWeek: BOOLEAN - Habilita el texto debajo del numero izquierdo
// footNum: STRING - Texto debajo del numero izquierdo
// rightTitle / rightNum: STRING - Idem a sus contrapartes
// footText: STRING - Texto que define el lado inferior derecho, por ejemplo "Contract" o "View Post"
// enableLine: BOOLEAN - Esta llamada activa la linea intermedia
// enableSite: BOOLEAN - Esta llamada activa el lado inferior izquierdo, que se usa para el "Go To Site"
// siteLink: STRING - URL de la Web del cliente
// contractLink: STRING - URL del contrato del cliente  

const ClientCard = ({ logo, title, text, textStyle, leftTitle, leftNum, enableWeek, footNum, rightTitle, rightNum, enableLine, footText, enableSite, siteLink, contractLink, s, index, enableSoon, enableFoot }) => {
    return (
        <div className={`${styles.ClientWrap} ${s == index ? styles.Selected : styles.NotSelected}`}>
            <div className={styles.ClientCard}>
                <img src={logo} className={styles.CardLogo} />
                <h3 className={styles.CardTitle}>{title}</h3>
                <h4 className={styles.CardText} style={textStyle}>{text}</h4>
                <div className={styles.MarketContainer}>
                    <div className={styles.LeftSide}>
                        <h3 className={styles.MarketTitle}>{leftTitle}</h3>
                        <h2 className={styles.MarketNum}>{leftNum}</h2>
                        <h5 className={`${styles.PerWeek}
                            ${enableWeek ? styles.PerWeek : styles.NoneWeek}`}>{footNum}</h5>
                    </div>
                    <div className={`${styles.Line}
                        ${enableLine ? styles.Line : styles.NoneLine}`}>
                        <div className={styles.Square}></div>
                        <div className={styles.VerticalLine}></div>
                        <div className={styles.Square}></div>
                    </div>
                    <div className={styles.LeftSide}>
                        <h3 className={styles.MarketTitle}>{rightTitle}</h3>
                        <h2 className={styles.MarketNum}>{rightNum}</h2>
                    </div>
                    <h2 className={`${styles.Soon}
                        ${enableSoon ? styles.Soon : styles.NoneSoon}`}>
                    COMING SOON
                    </h2>
                </div>
                <div className={`${styles.CardFoot}
                        ${enableFoot ? styles.CardFoot : styles.NoneFoot}`}>
                    <a href={siteLink} className={`${styles.Site}
                        ${enableSite ? styles.Site : styles.NoneSite}`} target="_blank">
                        Go to site
                    </a>
                    <a href={contractLink} target="_blank">
                        <div className={styles.Contract}>
                            {footText}
                            <img className={styles.ContractLogo} src={ContractLogo}></img>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ClientCard;
