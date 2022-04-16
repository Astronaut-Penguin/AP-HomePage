//- Import React
import React from 'react';

//- Import Styles
import styles from './text.module.css';

const Text = ({text, style}) => {
    return (
        <h1 className={styles.Text} style={style}>{text}</h1>
    );
};

export default Text;