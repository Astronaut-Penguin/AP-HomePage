//- Import React
import React from 'react';

//- Import Styles
import styles from './text.module.css';

const Text = ({text}) => {
    return (
        <h1 className={styles.Text}>{text}</h1>
    );
};

export default Text;