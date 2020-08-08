import React from "react";
import styles from "../styles/sidebar.module.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Scrollspy from "react-scrollspy";

export default function Sidebar({ list = [] }) {
  return (
    <aside className={styles['sidebar-menu']}>
      <Scrollspy
        items={list.map(item => item.anchor.replace("#", ""))}
        currentClassName={styles['link-active']}
      >
        {
          list.map((item, key) => (
            <li key={key}>
              <AnchorLink
                className={styles.link}
                offset="0"
                href={item.anchor}
              >
                <span>{item.title}</span>
              </AnchorLink>
            </li>
          ))
        }
      </Scrollspy>
    </aside>
  );
}
