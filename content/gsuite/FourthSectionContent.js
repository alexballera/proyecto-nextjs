import React from "react";
import styles from "../../styles/content.module.scss";

const FourthSectionContent = ({ menuList, IMAGES }) => (
  <section className={styles.container}>
    <div className={styles.anchor} id={menuList[3].anchor.replace("#", "")}></div>
    <h2 className={styles.title}>{menuList[3].title}</h2>

    <article className={styles.content}>
      <p>
        G Suite Enterprise for Education ofrece herramientas de colaboración y
        comunicación potentes que ayudan a los docentes, alumnos y
        administradores a ser más exitosos. Incluye controles avanzados,
        búsqueda y estadísticas mejoradas, y herramientas de comunicación de
        nivel empresarial.
      </p>
    </article>
  </section>
);
export default FourthSectionContent;
