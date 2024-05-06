import React from "react";
import Image from "next/image";

import { HeaderProps } from "@/types/header";
import { Article } from "@/types/main";
import styles from "./index.module.css";

const Header = ({ setArticle }: HeaderProps) => {
  const handleSwitchArticle = (article: Article) => {
    setArticle(article);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div className={styles.title__logo}>
          <Image src="/images/header/gear.gif" alt="Gear Logo" fill />
        </div>
        <h1 className={styles.title__text} onClick={() => handleSwitchArticle("Home")}>
          HS.K's
        </h1>
      </div>
      <div className={styles.menu}>
        <p className={styles.menu__list} onClick={() => handleSwitchArticle("Home")}>
          Home
        </p>
        <div className={styles.menu__bottom}></div>
        <p className={styles.menu__list} onClick={() => handleSwitchArticle("About")}>
          About
        </p>
        <div className={styles.menu__bottom}></div>
        <p className={styles.menu__list} onClick={() => handleSwitchArticle("Skills")}>
          Skills
        </p>
        <div className={styles.menu__bottom}></div>
        <p className={styles.menu__list} onClick={() => handleSwitchArticle("Project")}>
          Project
        </p>
        <div className={styles.menu__bottom}></div>
      </div>
    </div>
  );
};

export default Header;
