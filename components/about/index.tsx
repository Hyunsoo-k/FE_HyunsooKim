import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { contentData } from "@/datas/blogContents";
import BlogContent from "../blogContent";
import styles from "./index.module.css";

const About = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["blog"]}>
        <h1 className={styles["blog__title"]}>Blog</h1>
        <div className={styles["content"]}>
          {contentData.map((item, index) => (
            <BlogContent key={index} thumbnail={item.thumbnail} title={item.title} content={item.content} url={item.url} />
          ))}
        </div>
      </div>
      <div className={styles["etc"]}>
        <div className={styles["linkTree"]}>
          <h1 className={styles["linkTree__title"]}>LinkTree</h1>
          <Link href={"https://linktr.ee/Hyunsoo_kim"} target="_blank" className={styles["linkTree__link"]}>
            <Image src="/images/about/linkTree.png" alt="" fill style={{ borderRadius: "12px" }} />
          </Link>
        </div>
        <div className={styles["gitHub"]}>
          <h1 className={styles["gitHub__title"]}>GitHub</h1>
          <Link href={"https://github.com/Hyunsoo-k"} target="_blank" className={styles["github__link"]}>
            <Image src="/images/about/gitHub.png" alt="" fill style={{ borderRadius: "12px" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
