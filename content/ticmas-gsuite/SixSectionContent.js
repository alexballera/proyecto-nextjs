import React from "react";
import styles from "../../styles/content.module.scss";

const SixthSectionContent = ({ menuList }) => (
  <section className={styles.container}>
    <div className={styles.anchor} id={menuList[5].anchor.replace("#", "")}></div>
    <h2 className={styles.title, styles['title-small']}>
      {menuList[5].title}
    </h2>

    <article className={styles.content}>
      <ul className={styles['list-styletype-hyphen']}>
        <li>
          Además de navegar por el mismo y completar las actividades allí presentes podrá:
        </li>
        <li>
          Acceder a la página principal en la cual se le mostrarán todos los contenidos que tiene asignados.
        </li>
        <li>
          Acceder al contenido marcado como favorito.
        </li>
        <li>
          Ver la lista de clases de las cuales forma parte.      
        </li>
      </ul>
    </article>
  </section>
);
export default SixthSectionContent;
