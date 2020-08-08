import React from "react";
import styles from "../../styles/content.module.scss";

const FourthSectionContent = ({ menuList }) => (
  <section className={styles.container}>
    <div className={styles.anchor} id={menuList[3].anchor.replace("#", "")}></div>
    <h2 className={styles.title, styles['title-small']}>
      {menuList[3].title}
    </h2>

    <article className={styles.content}>
      <p>
        En la sección Novedades podrás ver el contenido asignado.
      </p>
    </article>
  </section>
);
export default FourthSectionContent;
