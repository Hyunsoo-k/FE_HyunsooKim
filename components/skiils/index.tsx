import Image from "next/image";


import styles from "./index.module.css";

const Skills = () => {
  const frontEndThumbnail = [
    "html5",
    "css3",
    "js",
    "ts",
    "react",
    "nextJs",
    "tanstack-query",
    "react-hook-form",
    "react-router-dom",
    "axios",
    "sass",
    "tailwind",
  ];
  return(<div className={styles["wrapper"]}><div className={styles["front-end"]}>
  <h1 className={styles["front-end__title"]}>Front_end</h1>
  <div className={styles["front-end-content"]}>
    {frontEndThumbnail.map((item: any, index: number) => (
      <div className={styles["front-end-content__image"]} key={index}>
        <Image src={`/images/skills/${item}.png`} fill alt="" />
      </div>
    ))}
  </div>
</div>
<div className={styles["ci-cd"]}>
  <div className={styles["version-control"]}>
    <h1 className={styles["version-control__title"]}>Version_control</h1>
    <div className={styles["version-control-content"]}>
      <Image src="/images/skills/git.png" width={80} height={80} alt="" />
      <Image src="/images/skills/gitHub.png" width={80} height={80} alt="" />
    </div>
  </div>
  <div className={styles["deployment"]}>
    <h1 className={styles["deployment__title"]}>Deployment</h1>
    <div className={styles["deployment-content"]}>
      <Image src="/images/skills/vercel.png" width={80} height={80} alt="" />
      <Image src="/images/skills/netlify.png" width={80} height={80} alt="" />
    </div>
  </div>
</div>
<div className={styles["etc"]}>
  <div className={styles["database"]}>
    <h1 className={styles["database__title"]}>Database</h1>
    <div className={styles["database-content"]}>
      <Image src="/images/skills/mysql.png" width={80} height={80} alt="" />
      <Image src="/images/skills/mongoDb.png" width={80} height={80} alt="" />
    </div>
  </div>
  <div className={styles["back-end"]}>
    <h1 className={styles["back-end__title"]}>Back_end</h1>
    <div className={styles["back-end-content"]}>
      <Image src="/images/skills/nodeJs.png" width={80} height={80} alt="" />
    </div>
  </div>
</div></div>)
}

export default Skills;