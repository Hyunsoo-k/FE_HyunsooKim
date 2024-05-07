import { DropdownProps } from "@/types/dropdown";
import { Article } from "@/types/main";
import styles from "./index.module.css";

const Dropdown = ({ setArticle }: DropdownProps) => {
  const handleSwitchArticle = (article: Article) => {
    setArticle(article);
  };

  return (
    <div className={styles["wrapper"]}>
      <p onClick={() => {handleSwitchArticle("Home");}} className={styles["menu-list"]}>
        Home
      </p>
      <p
        onClick={() => {
          handleSwitchArticle("About");
        }}
        className={styles["menu-list"]}
      >
        About
      </p>
      <p
        onClick={() => {
          handleSwitchArticle("Skills");
        }}
        className={styles["menu-list"]}
      >
        Skills
      </p>
      <p
        onClick={() => {
          handleSwitchArticle("Project");
        }}
        className={styles["menu-list"]}
      >
        Project
      </p>
    </div>
  );
};

export default Dropdown;
