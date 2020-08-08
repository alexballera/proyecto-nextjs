import React from "react";
import styles from "../../styles/content.module.scss";

const ThirdSectionContent = ({ menuList, IMAGES }) => (
  <section className={styles.container}>
    <div className={styles.anchor} id={menuList[2].anchor.replace("#", "")}></div>
    <h2 className={styles.title}>
      {menuList[2].title}
    </h2>

    <article className={styles.content}>
      <h3 className={styles['sub-title']}>¿Cómo veo los contenidos disponibles?</h3>

      <ol>
        <li>
          En la Biblioteca podrás navegar todas las unidades didácticas
          disponibles. Verás destacados los contenidos relacionados a tu
          asignatura y año. Pero también podrás acceder a contenidos de otras
          asignaturas. Facilitá tu búsqueda con filtros por asignatura, nivel o
          tema.
          <img
            className={styles['info-image']}
            src={IMAGES.TICMAS.TICMAS_IMAGE6}
            alt="Biblioteca"
          />
        </li>
        <li>
          Haciendo click en una unidad didáctica ingresarás a la misma y podrás
          recorrerla.
          <br />
          <br />
          Aquí podrás:
          <ul>
            <li>Ver y descargar la guía para el docente.</li>
            <li>
              Mirar cómo tus estudiantes verán los contenidos en sus
              dispositivos.
            </li>
            <li>
              Ver e ingresar a cada sección que conforma la unidad didáctica.
            </li>
          </ul>
          <img
            className={styles['info-image']}
            src={IMAGES.TICMAS.TICMAS_IMAGE7}
            alt="Previsualización del contenido"
          />
        </li>
        <h3 className={styles['sub-title']}>
          ¿Cómo les asigno a mis estudiantes las unidades didácticas que
          trabajaremos juntos?
        </h3>
        <li>
          En la sección Biblioteca de contenidos, hacé click en{" "}
          <span className={styles.strong}>+</span>
          sobre la unidad didáctica que quieras asignar. Si ingresaste a una
          unidad didáctica, podrás asignarla directamente desde el botón{" "}
          <span className={styles.strong}>asignar contenido</span>.
        </li>
        <img
          className={styles['info-image']}
          src={IMAGES.TICMAS.TICMAS_IMAGE8}
          alt="Biblioteca"
        />
        <li>
          Completá los datos solicitados. Podés asignar la unidad a todo el
          curso o a grupos que hayas creado. También podrás asignar toda la
          unidad o los bloques de contenidos que desees. Establecé la fecha en
          la que trabajarán con este contenido y hacé click en{" "}
          <span className={styles.strong}>Confirmar</span>. ¡Listo! A partir de
          este momento tus estudiantes ya podrán trabajar con la unidad
          didáctica desde sus celulares.
        </li>
        <img
          className={styles['info-image']}
          src={IMAGES.TICMAS.TICMAS_IMAGE9}
          alt="Asignar contenido"
        />

        <h3 className={styles['sub-title']}>
          ¿Puedo subir mis propios contenidos?
        </h3>
        <li>
          ¡Si! Podés subir tus propios contenidos y asociarlos a una unidad
          didáctica. En la pantalla de asignación de contenido deberás hacer
          click en{" "}
          <span className={styles.strong}>Adjuntar un archivo o URL</span>.
          Podrás seleccionar un archivo de tu computadora, una imagen,
          documentos de Drive, insertar un video de YouTube o un link de
          Genially. Agregá Título, descripción y una imagen para identificarlo.
          Click en <span className={styles.strong}>Confirmar</span>.
        </li>
        <img
          className={styles['info-image']}
          src={IMAGES.TICMAS.TICMAS_IMAGE10}
          alt="Asignar contenido"
        />

        <br />

        <img
          className={styles['info-image']}
          src={IMAGES.TICMAS.TICMAS_IMAGE11}
          alt="Adjuntar contenido"
        />
      </ol>
    </article>
  </section>
);
export default ThirdSectionContent;
