import styles from "../styles/Card.module.css";
import Image from "next/image";

export default function Card({ title, subtext, date }) {
  return (
    <div className={styles.container} tabIndex="0">
      <div className={styles.center}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.sub_text}>{subtext}</p>
      </div>
      <div className={styles.footer}>
        <p className={styles.date}>{date}</p>
        <div className={styles.options}>
          <button title="Edit" className={styles.button}>
            <Image
              src="/assests/edit.svg"
              alt="edit"
              className="icon"
              height={24}
              width={24}
            />
          </button>
          <button title="Delete" className={styles.button}>
            <Image
              src="/assests/delete.svg"
              alt="delete"
              className="icon"
              height={24}
              width={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
