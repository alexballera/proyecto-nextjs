import React from "react";
import styles from "../../styles/content.module.scss";

const FifthSectionContent = ({ menuList, IMAGES }) => (
  <section className={styles.container}>
    <div className={styles.anchor} id={menuList[4].anchor.replace("#", "")}></div>
    <h2 className={styles.title}>{menuList[4].title}</h2>

    <article className={styles.content}>
      <h3 className={styles['sub-title']}>¿Cómo veo mi agenda semanal?</h3>

      <p>
        En la sección Agenda podrás ver los días y horas en que dictás tus
        clases y el contenido distribuido para esos días, según la asignación
        que hayas hecho de los mismos.
      </p>
      <img
        className={styles['info-image']}
        src={IMAGES.TICMAS.TICMAS_IMAGE18}
        alt="Calendario"
      />

      <h3 className={styles['sub-title']}>Chat</h3>

      <p>
        A través de esta herramienta, podrás comunicarte con toda la clase.
        <br />
        Los estudiantes podrán ver los mensajes y responder desde su aplicación.
        <br />
        El Chat es grupal.
      </p>
      <img className={styles['info-image']} src={IMAGES.TICMAS.TICMAS_IMAGE19} alt="Chat" />

      <h3 className={styles['sub-title']}>Mi perfil</h3>

      <p>
        En la sección Mi Perfil podrás agregar una{" "}
        <span className={styles.strong}>
          imagen de avatar, modificar la contraseña, modificar email y cerrar
          sesión
        </span>
        .
        <br />
        En esta sección también podrás encontrar las{" "}
        <span className={styles.strong}>Preguntas Frecuentes</span>.
      </p>
      <img className={styles['info-image']} src={IMAGES.TICMAS.TICMAS_IMAGE20} alt="Perfil" />
    </article>
  </section>
);
export default FifthSectionContent;
