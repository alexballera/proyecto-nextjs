import Head from "next/head";
import Layout from "../../layout/page-layout";
import Sidebar from "../../components/sidebar";
import { menuList } from "../../components/header";

// Content
import FirstSectionContent from "../../content/ticmas-gsuite/FirstSectionContent";
import SecondSectionContent from "../../content/ticmas-gsuite/SecondSectionContent";
import ThirdSectionContent from "../../content/ticmas-gsuite/ThirdSectionContent";
import FourthSectionContent from "../../content/ticmas-gsuite/FourthSectionContent";
import FifthSectionContent from "../../content/ticmas-gsuite/FifthSectionContent";
import SixSectionContent from "../../content/ticmas-gsuite/SixSectionContent";
import SevenSectionContent from "../../content/ticmas-gsuite/SevenSectionContent";
import MENU_LIST from "../../content/ticmas-gsuite/menuList";

// Assets
import * as IMAGES from '../../assets/images'

const TicmasGSuite = () => (
  <Layout
    sidebar={
      <Sidebar list={MENU_LIST}></Sidebar>
    } 
    head={
      <Head>
        <title>{menuList[2].text}</title>
      </Head>
    }
    content={
      <>
        <FirstSectionContent menuList={MENU_LIST} IMAGES={IMAGES}/>
        <SecondSectionContent menuList={MENU_LIST} />
        <ThirdSectionContent menuList={MENU_LIST} />
        <FourthSectionContent menuList={MENU_LIST} />
        <FifthSectionContent menuList={MENU_LIST} />
        <SixSectionContent menuList={MENU_LIST} />
        <SevenSectionContent menuList={MENU_LIST} />
      </>
    }
    />
);

export default TicmasGSuite;
