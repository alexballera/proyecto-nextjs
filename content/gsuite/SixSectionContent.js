import React from "react";
import styles from "../../styles/content.module.scss";

const SixSectionContent = ({ menuList, IMAGES }) => (
  <section className={styles.container}>
    <div className={styles.anchor} id={menuList[5].anchor.replace("#", "")}></div>
    <h2 className={styles.title}>{menuList[5].title}</h2>

    <article className={styles.content}>
      <p>
        Las herramientas de G Suite for Education tienen funciones de
        accesibilidad integradas para ayudar a alumnos con diversas necesidades
        y estilos de aprendizaje. Estos pueden interactuar con las herramientas
        mediante su voz o un lector de pantalla.
      </p>

      <img className={styles['info-image']} src={IMAGES.GSUITE.GSUITE_IMAGE5} alt="Chat" />
    </article>
  </section>
);
export default SixSectionContent;
