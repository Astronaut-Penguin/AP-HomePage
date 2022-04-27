// REACT
import React from "react";

// STYLE
import styles from "./CtaButton.module.css";

const CtaButton = ({ text, onClick }) => {
  return (
    <button
      className={styles.Container}
      onClick={() => {
        onClick();
      }}
    >
      {text}{" "}
      <i
        className="fas fa-arrow-right"
        style={{ marginLeft: "2px", fontSize: "12px", color: "white" }}
      ></i>
    </button>
  );
};

export default CtaButton;
