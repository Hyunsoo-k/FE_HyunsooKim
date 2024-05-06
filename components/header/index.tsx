import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";

import { HeaderProps, Viewport, DropdownState } from "@/types/header";
import { Article } from "@/types/main";
import Dropdown from "../dropdown";
import styles from "./index.module.css";

const Header = ({ setArticle }: HeaderProps) => {
  const [viewport, setViewport] = useState<Viewport>("");

  const [dropdownState, setDropdownState] = useState<DropdownState>({
    initialState: true,
    open: false,
  });

  const handleSwitchArticle = (article: Article) => {
    setArticle(article);
  };

  const handleDropdownClick = () => {
    setDropdownState((prev: DropdownState) => ({ ...prev, initialState: false, open: !dropdownState.open }));
  };

  useEffect(() => {
    const handleResizing = () => {
      window.innerWidth < 768 ? setViewport("mobile") : setViewport("not mobile");
    };

    window.addEventListener("resize", handleResizing);
    handleResizing();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles["title"]}>
          <div className={styles["title__logo"]}>
            <Image src="/images/header/gear.gif" alt="logo" fill />
          </div>
          <h1 className={styles["title__text"]}>HS.K's</h1>
        </div>
        {viewport === "mobile" ? (
          <div onClick={handleDropdownClick}>
            <CiMenuBurger size={40} className={styles["menu-button"]} />
          </div>
        ) : (
          <div className={styles["menu"]}>
            <p className={styles["menu__list"]} onClick={() => handleSwitchArticle("Home")}>
              Home
            </p>
            <p className={styles["menu__list"]} onClick={() => handleSwitchArticle("About")}>
              About
            </p>
            <p className={styles["menu__list"]} onClick={() => handleSwitchArticle("Skills")}>
              Skills
            </p>
            <p className={styles["menu__list"]} onClick={() => handleSwitchArticle("Project")}>
              Project
            </p>
          </div>
        )}
      </div>
      <div
        className={
          dropdownState.initialState
            ? styles["dropdown-default"]
            : dropdownState.open
            ? styles["dropdown-on"]
            : !dropdownState.open
            ? styles["dropdown-off"]
            : undefined
        }
      >
        <Dropdown setArticle={setArticle} />
      </div>
    </>
  );
};

export default Header;