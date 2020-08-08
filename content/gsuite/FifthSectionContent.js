import React from "react";
import styles from "../../styles/content.module.scss";

const FifthSectionContent = ({ menuList, IMAGES }) => (
  <section className={styles.container}>
    <div className={styles.anchor} id={menuList[4].anchor.replace("#", "")}></div>
    <h2 className={styles.title}>{menuList[4].title}</h2>

    <article className={styles.content}>
      <p>
        Hay profesores y alumnos de todo el mundo que usan G Suite de manera
        innovadora y significativa. Mira los videos o lee nuestra guía para
        inspirarte sobre cómo usar las herramientas de Google en tu aula.
      </p>

      <p className={styles.comment}>
        <br></br>
        <span className={styles.strong}>
          Bloquea deberes en las fechas de entrega
        </span>{" "}
        <br></br>
        <br></br>Configura un cronómetro para darles a tus alumnos acceso a un
        archivo de Documentos, Hojas de cálculo o Presentaciones durante un
        tiempo limitado.
      </p>

      <img className={styles['info-image']} src={IMAGES.GSUITE.GSUITE_IMAGE4} alt="Chat" />
    </article>
  </section>
);
export default FifthSectionContent;
