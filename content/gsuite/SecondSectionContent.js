import React from "react";
import styles from "../../styles/content.module.scss";

const SecondSectionContent = ({ menuList, IMAGES }) => (
  <section className={styles.container}>
    <div className={styles.anchor} id={menuList[1].anchor.replace("#", "")}></div>
    <h2 className={styles.title}>{menuList[1].title}</h2>

    <article className={styles.content}>
      <p>
        Con G Suite for Education, los profesores pueden generar oportunidades
        de aprendizaje, agilizar las tareas administrativas y desafiar a sus
        alumnos a pensar de manera crítica; todo sin interrumpir los flujos de
        trabajo actuales. Las herramientas de G Suite for Education son potentes
        por sí mismas, pero juntas funcionan aún mejor.
      </p>

      <h3 className={styles['sub-title']}>
        La última tecnología a un precio que las escuelas pueden permitirse
      </h3>
      <p>
        G Suite for Education es un paquete de apps gratis de Google adaptadas
        específicamente para las escuelas. Ofrece el valor de la seguridad
        integrada de varias capas y asistencia las 24 horas, todos los días, sin
        costo adicional.
      </p>

      <h3 className={styles['sub-title']}>
        Marca la diferencia dentro y fuera del aula
      </h3>
      <p>
        Los educadores pueden proporcionar comentarios instantáneos y llevar un
        registro del progreso de un alumno para mejorar el rendimiento. Con
        herramientas potentes como Classroom, los instructores pueden
        administrar programas, deberes y calificaciones desde un solo lugar.
      </p>

      <h3 className={styles['sub-title']}>
        Herramientas para ayudar a los profesores a comenzar
      </h3>
      <p>
        Las herramientas de G Suite están basadas en la nube y escalan
        fácilmente en las aulas. En el Centro de profesores, hay recursos como
        instructivos y capacitaciones para empezar a usar los productos con
        facilidad.
      </p>

      <h3 className={styles['sub-title']}>Ayuda y conéctate con cada alumno</h3>
      <p>
        Trabaja en línea o sin conexión, en cualquier momento y dispositivo con
        G Suite for Education. Usa estas herramientas para fomentar la
        colaboración, la creatividad y el pensamiento crítico, y trabaja de
        forma individual o con la clase completa.
      </p>
      <br></br>

      <p className={styles.comment}>
        "Google agiliza los comentarios y facilita la colaboración al editar un
        documento. Si otro alumno me está ayudando a revisar un artículo en
        Documentos de Google, puedo ver los cambios mientras los hace. El
        resultado es un sistema de aprendizaje más productivo". <br></br>
        <br></br>
        Christian Rourk, Alumno, Universidad de Michigan
      </p>
      <br></br>
      <br></br>
      <img
        className={styles['info-image']}
        src={IMAGES.GSUITE.GSUITE_IMAGE2}
        alt="Datos estudiantes - Producto general"
      />
    </article>
  </section>
);
export default SecondSectionContent;
