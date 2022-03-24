import Image from "next/image";
import styles from "../styles/Center.module.css";

export default function Center({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.side_nav}>
        <button className={styles.side_nav_link} title="Add a new note">
          <Image
            src="/assests/note_add_neutral_variant80.svg"
            alt="add"
            className="icon"
            width={24}
            height={24}
          />
          <p>New note </p>
        </button>
      </div>
      {children}
    </div>
  );
}
