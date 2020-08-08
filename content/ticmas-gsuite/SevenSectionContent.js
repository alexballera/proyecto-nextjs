import React from "react";
import styles from "../../styles/content.module.scss";

const SeventhSectionContent = ({ menuList }) => (
  <section className={styles.container}>
    <div className={styles.anchor} id={menuList[6].anchor.replace("#", "")}></div>
    <h2 className={styles.title, styles['title-small']}>
      {menuList[6].title}
    </h2>

    <article className={styles.content}>
      <p>
      Como docente podrás ver al instante cada vez que tus estudiantes ingresan
       y recorren un contenido de la biblioteca Ticmas. 
      <br/>
      En la sección Inicio, ingresá a la clase que quieras ver.
      <br/>
      Verás el listado de todos tus estudiantes con un porcentaje general de avance
       de las unidades didácticas.
      <br/>
      Seleccionando un estudiante, se desplegará una pantalla con información sobre
       su progreso general y su progreso detallado.

      </p>

      <ul className={styles['list-styletype-hyphen']}>
        Podrás ver:
        <li>
          las unidades didácticas asignadas
        </li>
        <li>
          Porcentaje de avance general.
        </li>
        <li>
          Última vista
        </li>
        <li>
          Detalle de cuántas veces el estudiante visualizó cada sección de la
          secuencia didáctica y cuánto tiempo le dedicó.
        </li>
        <li>
          Interacción promedio con los contenidos durante los últimos días y promedio semanal.
        </li>
        <li>
          Avance semanal.
        </li>
        <li>
          Última vista
        </li>
      </ul>



    </article>
  </section>
);
export default SeventhSectionContent;
