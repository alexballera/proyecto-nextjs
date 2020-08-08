import Head from "next/head";
import { AppBar, CssBaseline, Container } from "@material-ui/core";
import Header from "../components/header";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar position="fixed" color="default" elevation={0} className="app-bar">
        <Container className="toolbar-container" maxWidth="xl">
          <Header {...pageProps}></Header>
        </Container>
      </AppBar>
      <Container component="main" className="main-container" maxWidth="xl">
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
