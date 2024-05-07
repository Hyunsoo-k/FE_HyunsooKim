import Image from "next/image";
import { GoDotFill } from "react-icons/go";

import { ProjectContentProps } from "@/types/projectContent";
import styles from "./index.module.css";
import Link from "next/link";

const ProjectContent = ({ imageSrc, title, url }: ProjectContentProps) => {
  return (
    <Link href={url} target="_blank" className={styles["wrapper"]}>
      <div className={styles["thumbnail"]}>
        <Image src={`/images/projectContent/${imageSrc}.png`} fill alt="" style={{ borderRadius: "8px 8px 0 0" }} />
      </div>
      <div className={styles["discription"]}>
        <p className={styles["discription__title"]}>{title}</p>
        <div className={styles["dots"]}>
          <GoDotFill color="rgb(212, 74, 74)" className={styles["dots__item"]} />
          <GoDotFill color="rgb(226, 200, 83)" className={styles["dots__item"]} />
          <GoDotFill color="rgb(71, 196, 66)" className={styles["dots__item"]} />
        </div>
      </div>
    </Link>
  );
};

export default ProjectContent;
