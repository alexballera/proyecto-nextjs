import React from "react";
import styles from "../../styles/content.module.scss";

const FifthSectionContent = ({ menuList }) => (
  <section className={styles.container}>
    <div className={styles.anchor} id={menuList[4].anchor.replace("#", "")}></div>
    <h2 className={styles.title, styles['title-small']}>
      {menuList[4].title}
    </h2>

    <article className={styles.content}>
      <p>
        ¡Si!
        <br/>
        Posá el cursor sobre el contenido, hacé click en el botón derecho del mouse,
        y seleccioná “copiar dirección de enlace”.
        <br/>
        Dirigite a Trabajo en clase, hacé click en Crear y seleccioná la opciones que
        desees: Tarea, Tarea con cuestionario, Pregunta, Material, etc. Completá los datos
        requeridos, seleccioná Agregar , pegá el vínculo, seleccioná la clase, tema y publicá.
        <br/>
        ¡Listo! Los estudiantes ya tendrán el contenido disponible en Trabajo en Clase.
      </p>
    </article>
  </section>
);
export default FifthSectionContent;
