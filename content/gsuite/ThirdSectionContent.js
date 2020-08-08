import React from "react";
import styles from "../../styles/content.module.scss";

const ThirdSectionContent = ({ menuList, IMAGES }) => (
  <section className={styles.container}>
    <div className={styles.anchor} id={menuList[2].anchor.replace("#", "")}></div>
    <h2 className={styles.title}>{menuList[2].title}</h2>

    <article className={styles.content}>
      <h3 className={styles['sub-title']}>¿Cómo veo los contenidos disponibles?</h3>

      <p>
        Los servicios principales de G Suite no contienen publicidad ni usan la
        información que tienen con fines publicitarios. Además, todos los
        servicios principales de G Suite for Education son compatibles con el
        cumplimiento de la COPPA y la FERPA.
      </p>

      <img
        className={styles['info-image']}
        src={IMAGES.GSUITE.GSUITE_IMAGE3}
        alt="Datos estudiantes - Producto general"
      />

      <h3 className={styles['sub-title']}>Gmail</h3>
      <p>
        Configura un sistema de correo electrónico para toda la escuela o
        universidad. O usa Gmail para intercambiar correos electrónicos seguros
        con tus clases.
      </p>
      <h3 className={styles['sub-title']}>Drive</h3>
      <p>
        Almacena y organiza deberes, documentos o el programa de la clase de
        forma segura y accede a ellos desde cualquier dispositivo.
      </p>
      <h3 className={styles['sub-title']}>Calendario</h3>
      <p>
        Comparte calendarios o crea un calendario conjunto con miembros de tu
        clase o institución para hacer un seguimiento de los horarios
        fácilmente.
      </p>
      <h3 className={styles['sub-title']}>
        Documentos, Hojas de cálculo y Presentaciones
      </h3>
      <p>
        Colabora, comparte comentarios y trabaja con tus alumnos en tiempo real
        con documentos, hojas de cálculo y presentaciones.
      </p>
      <h3 className={styles['sub-title']}>Formularios</h3>
      <p>
        Crea formularios, cuestionarios y encuestas para recopilar respuestas y
        analizarlas con la ayuda del aprendizaje automático.
      </p>
      <h3 className={styles['sub-title']}>Jamboard</h3>
      <p>
        Dibuja y colabora en un lienzo interactivo con Jamboard, la pizarra
        inteligente basada en la nube de Google, en tu computadora, teléfono o
        tablet.
      </p>
      <h3 className={styles['sub-title']}>Sites</h3>
      <p>
        Generador de sitios web fácil de usar para crear sitios, alojar el
        programa del curso, adquirir habilidades de desarrollo y dar rienda
        suelta a la creatividad de los alumnos.
      </p>
      <h3 className={styles['sub-title']}>Google Meet</h3>
      <p>
        Conéctate con los alumnos virtualmente a través de videollamadas y
        mensajes seguros para que sigan aprendiendo fuera de la escuela.
      </p>
      <h3 className={styles['sub-title']}>Grupos</h3>
      <p>
        Crea y participa en foros de clase para fomentar la comunicación y el
        diálogo.
      </p>
      <h3 className={styles['sub-title']}>Vault</h3>
      <p>
        Agrega alumnos, administra dispositivos y define la seguridad y la
        configuración para que tus datos estén siempre protegidos.
      </p>
      <h3 className={styles['sub-title']}>Classroom</h3>
      <p>
        Crea deberes, comunícate con los alumnos y envía comentarios desde un
        solo lugar.
      </p>
    </article>
  </section>
);
export default ThirdSectionContent;
