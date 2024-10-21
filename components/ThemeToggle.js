import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import styles from "../styles/ThemeToggle.module.css";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className={styles.themeToggle}>
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
