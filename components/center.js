import Image from "next/image";
import styles from "../styles/Center.module.css";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function Center({ children }) {
  const { data: session } = useSession();
  const [signInTip, setSignInTip] = useState(false);
  const addNew = () => {
    if (session) {
      fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ operation: "new note" }),
      });
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.side_nav}>
        <button
          className={styles.side_nav_link}
          title="Add a new note"
          onClick={addNew}
        >
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
      {signInTip && (
        <div className={styles.sign_in_tip}>sign in to make changes</div>
      )}
    </div>
  );
}
