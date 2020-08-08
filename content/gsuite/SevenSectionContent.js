import React from "react";
import styles from "../../styles/content.module.scss";

const SevenSectionContent = ({ menuList, IMAGES }) => (
  <section className={styles.container}>
    <div className={styles.anchor} id={menuList[6].anchor.replace("#", "")}></div>
    <h2 className={styles.title}>{menuList[6].title}</h2>

    <article className={styles.content}>
      <p>
        Crea, analiza y califica trabajos de curso de manera rápida y segura, y
        ayuda a los alumnos a aprender de forma más efectiva.
      </p>

      <img className={styles['info-image']} src={IMAGES.GSUITE.GSUITE_IMAGE6} alt="Chat" />
    </article>
  </section>
);
export default SevenSectionContent;
