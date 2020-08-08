import React from "react";
import styles from "../../styles/content.module.scss";

const FirstSectionContent = ({ menuList, IMAGES }) => (
  <section className={styles.container}>
    <div className={styles.anchor} id={menuList[0].anchor.replace("#", "")}></div>
    <h2 className={styles.title, styles['title-small']}>
      {menuList[0].title}
    </h2>

    <article className={styles.content}>
      <p>
         {/* TODO reemplazar el siguiente enlace */}
        Para acceder a la plataforma deberás ingresar <a className="link-color" href="https://www.google.com/" target="_blank" rel="noopener noreferrer">aquí</a> con la misma cuenta de email
        con la que accedes a Google Classroom. En la sección inicio verás las mismas
        clases que tienes en Google Classroom.
      </p>
      <img
        className={styles['info-image']}
        src={IMAGES.TICMAS_GSUITE.TICMAS_GSUITE_IMAGE1}
        alt="Login"
      />
    </article>
  </section>
);
export default FirstSectionContent;
