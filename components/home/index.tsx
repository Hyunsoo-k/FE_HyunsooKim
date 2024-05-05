import React, { useState, useEffect } from "react";
import styles from "./Index.module.css";

const Home = () => {
  const myName = "Hyunsoo_Kim"; //length: 11
  const [mainText, setMainText] = useState<string>("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (myName.length > index) {
        setMainText((prevText: string) => prevText + myName[index]);
        index++;
        index === 10 && clearInterval(intervalId);
      }
    }, 90);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["content"]}>
        <div className={styles["mainText"]}>
          <h1 className={styles["mainText__text"]}>{mainText}</h1>
          <div className={styles["mainText__blink"]}></div>
        </div>
        <p className={styles["subText"]}>FE_developer</p>
      </div>
    </div>
  );
};

export default Home;