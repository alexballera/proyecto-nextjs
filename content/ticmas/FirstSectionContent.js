import React from "react";
import styles from "../../styles/content.module.scss";

const FirstSectionContent = ({ menuList, videoSrc }) => (
  <section className={styles.container}>
    <div className={styles.anchor} id={menuList[0].anchor.replace("#", "")}></div>
    <h2 className={styles.title}>
      {menuList[0].title}
    </h2>

    <article className={styles.content}>
      <p>
        Ticmas es una herramienta educativa que permite la continuidad del
        aprendizaje más allá del espacio presencial del aula. Incluye todos los
        contenidos curriculares para la escuela secundaria. En su biblioteca
        digital se encuentran más de 50000 recursos digitales y miles de
        secuencias didácticas con ejercicios, audios, videos y guías para
        docentes con propuestas para su abordaje.
      </p>
      <p>
        Como docente podrás distribuir los contenidos que desees a tus
        estudiantes para que ellos los trabajen en forma autónoma desde Google
        Classroom. Además podrás hacer un seguimiento del proceso de aprendizaje
        a través de reportes con información detallada de cada uno de tus
        estudiantes.
      </p>
      <div className={styles['video-container']}>
        <video controls>
          <source src={videoSrc} type="video/mp4" />
          El navegador no soporta este formato de video
        </video>
      </div>
    </article>

    <article className={styles.content}>
      <h3 className={styles['sub-title']}>Contenidos</h3>

      <p>
        Los contenidos de la biblioteca de Ticmas cubren todas las asignaturas
        de la currícula oficial. Todas las unidades están estructuradas como
        secuencias didácticas y se basan en los Núcleos de Aprendizaje
        Prioritarios, como así también en los distintos diseños curriculares de
        diferentes jurisdicciones. El ciclo básico y la formación general del
        ciclo orientado están cubiertos en su totalidad. También están cubiertas
        diversas orientaciones específicas.
      </p>

      <p>
        <span className={styles.strong}>
          Todas las unidades didácticas presentan la siguiente estructura:
        </span>
        <br />
        <span className={styles.strong}>Introducción:</span> fundamentación y
        contextualización. A través de diferentes disparadores se motiva a
        iniciar el recorrido.
        <br />
        <br />
        <span className={styles.strong}>Hoja de ruta:</span> recurso audiovisual
        que muestra al estudiante el recorrido de los contenidos de la unidad y
        las relaciones que pueden establecerse entre ellos, destacando palabras
        y conceptos clave.
        <br />
        <br />
        <span className={styles.strong}>Objetivos:</span> responden tanto a la
        adquisición de los contenidos curriculares como al desarrollo de
        diferentes capacidades.
        <br />
        <br />
        <span className={styles.strong}>Desarrollo:</span> explicaciones a
        través de diferentes tipos de recursos interactivos y audiovisuales.
        <br />
        <br />
        <span className={styles.strong}>Resumen:</span> repaso de toda la
        unidad.
        <br />
        <br />
        <span className={styles.strong}>Actividades integradoras:</span> con el
        objetivo de vincular los contenidos trabajados y comprender mejor de qué
        manera se relacionan entre sí.
      </p>
    </article>

    <article className={styles.content}>
      <h3 className={styles['sub-title']}>
        Seguimiento del progreso del aprendizaje
      </h3>

      <p>
        Los docentes pueden tener una mirada cabal sobre el trabajo de sus
        estudiantes, conocer la manera en que progresan, los temas que les
        resultaron más complicados, proponer actividades de refuerzo o de
        profundización, e, incluso, determinar un contenido propio para sumar a
        los contenidos propuestos en Ticmas.
      </p>
    </article>

    <article className={styles.content}>
      <h3 className={styles['sub-title']}>Ticmas permite:</h3>
      <ul>
        <li>
          Visualización de la progresión en los avances de cada estudiante en
          forma personalizada.
        </li>
        <li>
          Análisis de las dificultades que se le presentan a los estudiantes en
          la realización de las tareas, pudiendo intervenir en el proceso.
        </li>
        <li>
          Definición de criterios personalizados y grupales de dificultades
          frecuentes orientados a intervenir en cada instancia de modo
          eficiente.
        </li>
      </ul>
    </article>
  </section>
);
export default FirstSectionContent;
