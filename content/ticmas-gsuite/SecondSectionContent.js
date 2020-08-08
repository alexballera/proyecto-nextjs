import React from "react";
import styles from "../../styles/content.module.scss";

const SecondSectionContent = ({ menuList }) => (
  <section className={styles.container}>
    <div className={styles.anchor} id={menuList[1].anchor.replace("#", "")}></div>
    <h2 className={styles.title, styles['title-small']}>
      {menuList[1].title}
    </h2>

    <article className={styles.content}>
      <p>
        En la Biblioteca podrás navegar todas las unidades didácticas disponibles.
        Verás destacados los contenidos relacionados a tu asignatura y año.
        Pero también podrás acceder a contenidos de otras asignaturas.
        Facilitá tu búsqueda con filtros por asignatura, nivel o tema.
      </p>
    </article>
  </section>
);
export default SecondSectionContent;
