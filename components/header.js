import React from "react";
import Link from 'next/link'
import { useRouter } from "next/router";
import { Toolbar } from "@material-ui/core";
import { LOGOS } from "../assets/images";
import styles from "../styles/header.module.scss";

export const menuList = [
  {
    id: "1",
    href: "/",
    text: "Capacitacion Ticmas",
  },
  {
    id: "2",
    href: "/gsuite",
    text: "Capacitacion G Suite",
  },
  {
    id: "3",
    href: "/ticmasgsuite",
    text: "Capacitacion Ticmas + G Suite",
  },
]

export default function Header() {
  const router = useRouter();

  const linkActive = (href) => {
    if (router.pathname === href) {
      return styles['link-active'] + " " + styles.link;
    } else {
      return styles.link;
    }
  };

  return (
    <Toolbar className={styles.toolbar}>
      <div>
        {
          menuList.map(item => (
          <Link
            key={item.id}
            href={item.href}
          >
            <a className={linkActive(item.href)}>
              {item.text}
            </a>
          </Link>
          ))
        }
      </div>
      <nav className={styles['ticmas-logo']}>
        <img src={LOGOS.TICMAS_LOGO}></img>
        <img src={LOGOS.GSUITE_LOGO}></img>
      </nav>
    </Toolbar>
  );
}
