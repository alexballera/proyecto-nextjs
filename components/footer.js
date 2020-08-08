import React from "react";
import styles from "../styles/footer.module.scss";

const Footer = ({children}) => (
  <footer className={styles.footer}>
    {children}
  </footer>
)
export default Footer
