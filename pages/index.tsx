import React, { useState } from "react";

import { Article } from "@/types/main";
import Header from "@/components/header";
import Home from "@/components/home";
import styles from "@/styles/Main.module.css";

const Main = () => {
  const [article, setArticle] = useState<Article>("Home");

  return (
    <div className={styles["wrapper"]}>
      <Header setArticle={setArticle} />
      <div className={styles["section"]}>
        <div className={styles["section__mainImg"]}></div>
        <div className={styles["section__content"]}>
          <Home />
        </div>
      </div>
    </div>
  );
}

export default Main;