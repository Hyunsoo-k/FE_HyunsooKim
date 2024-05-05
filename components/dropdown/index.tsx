import styles from "./index.module.css";

const DropdownMenu = () => {
  return (
    <div className={styles["wrapper"]}>
      <p className={styles["menu-list"]}>Home</p>
      <p className={styles["menu-list"]}>About</p>
      <p className={styles["menu-list"]}>Skills</p>
      <p className={styles["menu-list"]}>Project</p>
    </div>
  );
};

export default DropdownMenu;
