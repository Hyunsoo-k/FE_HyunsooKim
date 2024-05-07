import React, { useState, useEffect } from "react";
import styles from "./index.module.css";

const Home = () => {
  const myName = "Hyunsoo_Kim"; //length: 11
  const [mainText, setMainText] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (count < 11) {
      const typingInterval = setInterval(() => {
        setMainText((prev: string) => {
          let result = prev ? prev + myName[count] : myName[0];
          setCount(count + 1);

          if (count === 10) {
            clearInterval(typingInterval);
          }

          return result;
        });
      }, 90);

      return () => {
        clearInterval(typingInterval);
      };
    }
  });

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
