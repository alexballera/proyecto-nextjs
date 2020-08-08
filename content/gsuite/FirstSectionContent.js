import React from "react";
import styles from "../../styles/content.module.scss";

const FirstSectionContent = ({ menuList, IMAGES }) => (
  <section className={styles.container}>
    <div className={styles.anchor} id={menuList[0].anchor.replace("#", "")}></div>
    <h2 className={styles.title}>{menuList[0].title}</h2>

    <article className={styles.content}>
      <p>
        Paquete de herramientas diseñadas para permitir que los educadores y los
        alumnos innoven y aprendan juntos. Registra a tu institución para
        conseguir G Suite for Education.
      </p>
      <img
        className={styles['info-image']}
        src={IMAGES.GSUITE.GSUITE_IMAGE1}
        alt="Datos estudiantes - Producto general"
      />
    </article>
  </section>
);
export default FirstSectionContent;
