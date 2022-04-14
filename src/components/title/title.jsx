//- Import React
import React from 'react';

//- Import Styles
import styles from './title.module.css';

const Title = ({text, style}) => {
    return (
        <h1 className={styles.Title} style={style}>{text}</h1>
    );
};

export default Title;