import Head from "next/head";
import Layout from "../../layout/page-layout";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import { menuList } from "../../components/header";

// Content
import FirstSectionContent from "../../content/gsuite/FirstSectionContent";
import SecondSectionContent from "../../content/gsuite/SecondSectionContent";
import ThirdSectionContent from "../../content/gsuite/ThirdSectionContent";
import FourthSectionContent from "../../content/gsuite/FourthSectionContent";
import FifthSectionContent from "../../content/gsuite/FifthSectionContent";
import SixSectionContent from "../../content/gsuite/SixSectionContent";
import SevenSectionContent from "../../content/gsuite/SevenSectionContent";
import MENU_LIST from "../../content/gsuite/menuList";


// Assets
import * as IMAGES from "../../assets/images";

const GSuite = () => (
  <Layout
    sidebar={<Sidebar list={MENU_LIST}></Sidebar>}
    head={
      <Head>
        <title>{menuList[1].text}</title>
      </Head>
    }
    content={
      <>
        <FirstSectionContent menuList={MENU_LIST} IMAGES={IMAGES} />
        <SecondSectionContent menuList={MENU_LIST} IMAGES={IMAGES} />
        <ThirdSectionContent menuList={MENU_LIST} IMAGES={IMAGES} />
        <FourthSectionContent menuList={MENU_LIST} IMAGES={IMAGES} />
        <FifthSectionContent menuList={MENU_LIST} IMAGES={IMAGES} />
        <SixSectionContent menuList={MENU_LIST} IMAGES={IMAGES} />
        <SevenSectionContent menuList={MENU_LIST} IMAGES={IMAGES} />
      </>
    }
    footer={
      <Footer>
        <p>
          Si quieres acceder a cursos en línea y en español accede a{" "}
          <a
            href="https://teachercenter.withgoogle.com/training"
            target="_blank"
          >
            Teacher Center
          </a>
        </p>
      </Footer>
    }
  />
);

export default GSuite;
