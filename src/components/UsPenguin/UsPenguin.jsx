//- Import React
import React, { useState } from 'react';

//- Import Styles
import styles from './UsPenguin.module.css';

// US PENGUIN COMPONENT
// penguin: IMG - Imagen del Pinguino
// name: STRING - Nombre de la persona
// job: STRING - Puesto de trabajo
// left: BOOL - Si está activado, los datos se muestran a la izquierda

const UsPenguin = ({ penguin, name, job, left, className, index, num }) => {
    return (
        <div className={className}>
            <button className={styles.Member}>
                <img src={penguin} className={styles.Penguin} />
                {index == num ? (
                    <div className={styles.Info}>
                    <div className={styles.Line}></div>
                    {left ? (
                        <div>
                            <div className={styles.SecondLineLeft}></div>
                            <div className={styles.CircleLeft}></div>
                            <h2 className={styles.PersonLeft}>{name}</h2>
                            <h3 className={styles.JobLeft}>{job}</h3>
                        </div>
                    ) : (
                        <div>
                            <div className={styles.SecondLine}></div>
                            <div className={styles.Circle}></div>
                            <h2 className={styles.Person}>{name}</h2>
                            <h3 className={styles.Job}>{job}</h3>
                        </div>
                    )}
                    </div>
                ) : (
                    <img src={penguin} className={styles.Filter} />
                )}
                {index == 0 ? ( 
                    <img src={penguin} className={styles.Penguin} />
                ) : (
                    ""
                )}
            </button>
        </div>
        
    );
};

export default UsPenguin;
