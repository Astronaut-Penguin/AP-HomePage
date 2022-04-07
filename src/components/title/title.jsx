//- Import React
import React from 'react';

//- Import Styles
import styles from './title.module.css';

const Title = ({text}) => {
    return (
        <h1 className={styles.Title}>{text}</h1>
    );
};

export default Title;