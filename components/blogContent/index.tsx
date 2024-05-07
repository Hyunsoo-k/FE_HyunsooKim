import Link from "next/link";
import Image from "next/image";

import { BlogContentProps } from "@/types/blogContent";
import styles from "./index.module.css";

const BlogContent = ({ thumbnail, title, content, url }: BlogContentProps) => {
  return (
    <Link href={url} target="_blank" className={styles.wrapper}>
      <div className={styles.thumbnail_wrapper}>
        <Image src={thumbnail} alt="" fill style={{ borderRadius: "12px 12px 0px 0px" }} />
      </div>
      <div className={styles.content_text_wrapper}>
        <p className={styles.content_title}>{title}</p>
        <div className={styles.content_text}>{content}</div>
      </div>
    </Link>
  );
};

export default BlogContent;
