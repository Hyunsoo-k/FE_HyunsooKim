import ProjectContent from "../projectContent";
import styles from "./index.module.css";

const Project = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["project"]}>
        <ProjectContent imageSrc="synamon" title="Synamon" url="https://synamon.vercel.app/"/>
        <ProjectContent imageSrc="rolling" title="Rolling" url="https://resonant-chimera-6a5866.netlify.app/" />
      </div>
    </div>
  );
};

export default Project;
