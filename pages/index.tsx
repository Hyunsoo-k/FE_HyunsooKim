import React, { useState, useEffect } from "react";

import { Article } from "@/types/main";
import Image from "next/image";

import styles from "@/styles/Main.module.css";

const Main = () => {
  const [article, setArticle] = useState<Article>("Home");

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["section"]}>
        <div className={styles["section__mainImg"]}></div>
        <div className={styles["section__content"]}></div>
      </div>
    </div>
  );
}

export default Main;