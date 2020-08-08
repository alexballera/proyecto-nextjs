import React from "react";
import styles from "../../styles/content.module.scss";

const FourthSectionContent = ({ menuList, IMAGES }) => (
  <section className={styles.container}>
    <div className={styles.anchor} id={menuList[3].anchor.replace("#", "")}></div>
    <h2 className={styles.title}>
      {menuList[3].title}
    </h2>

    <article className={styles.content}>
      <ol>
        <li>
          En la sección <span className={styles.strong}>clases</span>, ingresá a
          la clase que quieras ver.
          <img className={styles['info-image']} src={IMAGES.TICMAS.TICMAS_IMAGE12} alt="Clases" />
        </li>
        <li>
          Verás el listado de todos tus estudiantes con un porcentaje general de
          avance de las unidades didácticas. Seleccionando un estudiante, se
          desplegará una pantalla con información sobre su progreso general y su
          progreso detallado.
          <img
            className={styles['info-image']}
            src={IMAGES.TICMAS.TICMAS_IMAGE13}
            alt="Datos estudiantes - Producto detallado"
          />
        </li>

        <h3 className={styles['sub-title']}>¿Qué veo en el Progreso detallado?</h3>
        <li>
          Verás las unidades didácticas asignadas.
          <br />
          Porcentaje de avance general.
          <br />
          Última vista.
          <br />
          Detalle de cuántas veces el estudiante visualizó cada sección de la
          secuencia didáctica y cuánto tiempo le dedicó.
        </li>
        <img
          className={styles['info-image']}
          src={IMAGES.TICMAS.TICMAS_IMAGE14}
          alt="Datos estudiantes - Producto detallado"
        />

        <h3 className={styles['sub-title']}>¿Qué veo en el Progreso general?</h3>
        <li>
          Interacción promedio con los contenidos durante los últimos días y
          promedio semanal.
          <br />
          Avance semanal.
          <br />
          Última vista.
        </li>
        <img
          className={styles['info-image']}
          src={IMAGES.TICMAS.TICMAS_IMAGE15}
          alt="Datos estudiantes - Producto general"
        />

        <h3 className={styles['sub-title']}>
          ¿Cómo veo la planificación de los contenidos que asigné a cada clase?
        </h3>
        <li>
          En la sección Inicio, ingresá a la clase que quieras ver.
          <br />
          Hacé click en <span className={styles.strong}>Datos estudiantes</span>
          .
          <br />
          Alli podrás ver los contenidos asignados para toda la clase y para los
          grupos que hayas creado.
        </li>
        <img
          className={styles['info-image']}
          src={IMAGES.TICMAS.TICMAS_IMAGE16}
          alt="Datos estudiantes - Producto detallado"
        />

        <li>
          Si deseas ver otra clase podés hacerlo desde esta misma pantalla,
          desplegando el ícono.
        </li>
        <img
          className={styles['info-image']}
          src={IMAGES.TICMAS.TICMAS_IMAGE17}
          alt="Datos estudiantes - Producto detallado - Selector"
        />
      </ol>
    </article>
  </section>
);
export default FourthSectionContent;
