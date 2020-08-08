import React from "react";
import styles from "../../styles/content.module.scss";

const ThirdSectionContent = ({ menuList }) => (
  <section className={styles.container}>
    <div className={styles.anchor} id={menuList[2].anchor.replace("#", "")}></div>
    <h2 className={styles.title, styles['title-small']}>
      {menuList[2].title}
    </h2>

    <article className={styles.content}>
      <p>
      En la sección Biblioteca de contenidos, hacé click en <span className={styles.strong}>+</span>
      sobre la unidad didáctica que quieras asignar. Si ingresaste a una
      unidad didáctica, podrás asignarla directamente desde el botón asignar contenido.
      <br/>
      Podés asignar la unidad a todo el curso o a grupos que hayas creado.
      <br/>
      También podrás asignar toda la unidad o los bloques de contenidos que desees.
      <br/>
      Establecé la fecha en la que trabajarán con este contenido y hacé click en <span className={styles.strong}>Confirmar</span>.
      <br/>
      ¡Listo! A partir de este momento tus estudiantes ya podrán trabajar con la unidad
      didáctica desde sus celulares.
      
      </p>
    </article>
  </section>
);
export default ThirdSectionContent;
