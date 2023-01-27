import { PencilSimpleLine } from "phosphor-react";

import { Avatar } from "./Avatar";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://source.unsplash.com/random/500x50"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/DanielAbrante.png" />

        <strong>Daniel Abrante</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
