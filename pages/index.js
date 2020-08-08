import Head from "next/head";
import Layout from "../layout/page-layout";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import { menuList } from "../components/header";

// Content
import FirstSectionContent from "../content/ticmas/FirstSectionContent";
import SecondSectionContent from "../content/ticmas/SecondSectionContent";
import ThirdSectionContent from "../content/ticmas/ThirdSectionContent";
import FourthSectionContent from "../content/ticmas/FourthSectionContent";
import FifthSectionContent from "../content/ticmas/FifthSectionContent";
import MENU_LIST from "../content/ticmas/menuList";

// Assets
import * as IMAGES from '../assets/images'
import { QUE_ES_TICMAS } from '../assets/videos';


const Ticmas = () => (
    <Layout
    sidebar={
      <Sidebar list={MENU_LIST}></Sidebar>
    } 
    head={
      <Head>
        <title>{menuList[0].text}</title>
      </Head>
    }
    content={
      <>
        <FirstSectionContent menuList={MENU_LIST} videoSrc={QUE_ES_TICMAS}/>
        <SecondSectionContent menuList={MENU_LIST} IMAGES={IMAGES} />
        <ThirdSectionContent menuList={MENU_LIST} IMAGES={IMAGES} />
        <FourthSectionContent menuList={MENU_LIST} IMAGES={IMAGES} />
        <FifthSectionContent menuList={MENU_LIST} IMAGES={IMAGES} />
      </>
    }
    footer={
      <Footer>
        ¡Ya podés empezar a trabajar
        <br/>
        junto a tus estudiantes!
      </Footer>
    }
    />
);

export default Ticmas
