import React from "react";
import styles from "../../styles/content.module.scss";

const SecondSectionContent = ({ menuList, IMAGES }) => (
  <section className={styles.container}>
    <div className={styles.anchor} id={menuList[1].anchor.replace("#", "")}></div>
    <h2 className={styles.title}>{menuList[1].title}</h2>

    <article className={styles.content}>
      <ol>
        <li>
          Una vez que hayas recibido el correo electrónico, hacé click en el
          link que te llevará a la plataforma. Ingresá con el usuario y
          contraseña recibidos por mail.
          <img
            className={styles['info-image']}
            src={IMAGES.TICMAS.TICMAS_IMAGE1}
            alt="Registro"
          />
        </li>
        <li>
          Lo primero que deberás hacer es crear tus clases. En la sección
          Inicio, hacé click en Crear Clase.
          <img
            className={styles['info-image']}
            src={IMAGES.TICMAS.TICMAS_IMAGE2}
            alt="Crear clase"
          />
        </li>
        <li>
          Completá los datos solicitados. Si dictás esta clase en más de 1 día y
          horario, ingresá cada día y horario y luego hacé click en{" "}
          <span className={styles.strong}>Confirmar horario</span>.
          <br />
          Elegí un color para luego visualizar más fácilmente cada una de tus
          clases en tu agenda. Click en{" "}
          <span className={styles.strong}>Confirmar</span>.
          <img
            className={styles['info-image']}
            src={IMAGES.TICMAS.TICMAS_IMAGE3}
            alt="Confirmar horario"
          />
        </li>
        <li>
          ¡Listo! Ya tenés tu clase creada.
          <br />
          Ahora deberás compartir con tus estudiantes el{" "}
          <span className={styles.strong}>código</span> de identificación de tu
          clase para que una vez que tengan instalada la aplicación en sus
          dispositivos móviles, se den de alta en tu clase. Si deseás cargar más
          clases deberás repetir este proceso y siempre compartir el código de
          identificación de tus clases con tus estudiantes.
          <img
            className={styles['info-image']}
            src={IMAGES.TICMAS.TICMAS_IMAGE4}
            alt="Compartir código"
          />
        </li>

        <h3 className={styles['sub-title']}>
          ¿Puedo editar los datos de las clases que haya creado?
        </h3>
        <li>
          ¡Si! En la sección Inicio, hacé click sobre el lapiz de la clase que
          quieras editar. Se desplegará una pantalla y desde allí podrás
          modificar el nombre de la clase, los días, horario y color.
        </li>

        <h3 className={styles['sub-title']}>
          ¿Cómo creo grupos de estudiantes en una clase?
        </h3>
        <li>
          Podés asignar contenido a toda tu clase o a grupos específicos que
          hayas creado.
          <br />
          En la sección Inicio, deberás seleccionar la clase. Hacé click en{" "}
          <span className={styles.strong}>Crear grupo</span> y seleccioná a los
          estudiantes que conformarán el grupo. Finalizá haciendo click en{" "}
          <span className={styles.strong}>Confirmar</span>.
          <img
            className={styles['info-image']}
            src={IMAGES.TICMAS.TICMAS_IMAGE5}
            alt="Crear grupo"
          />
        </li>
      </ol>
    </article>
  </section>
);
export default SecondSectionContent;
