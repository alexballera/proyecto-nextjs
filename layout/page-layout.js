import styles from "../styles/page.module.scss";
import { Grid } from "@material-ui/core";

export default function Layout({sidebar, head, content, footer}) {
  return (
    <>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid container item className={styles['sidebar-container']}>
          {sidebar}
        </Grid>
        <Grid container item className={styles['page-container']}>
          <div className={styles.container}>
            
            {head}

            <main className={styles.main}>

              {content}

            </main>

            {footer}

          </div>
        </Grid>
      </Grid>
    </>
  );
}
