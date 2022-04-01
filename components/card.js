import styles from "../styles/Card.module.css";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { getTime } from "../lib/helper";

export default function Card({ id, title, subtext, time, edit }) {
  const [editMode, setEditMode] = useState(edit);
  const [nTitle, setTitle] = useState(title);
  const [nSubtext, setSubtext] = useState(subtext);
  const [nTime, setTime] = useState(time);
  const ref = useRef(null);
  let containerClass;
  if (editMode === null) {
    containerClass = styles.container;
  } else if (editMode) {
    containerClass = `${styles.edit_container} ${styles.cardgrow}`;
  } else {
    containerClass = `${styles.container} ${styles.cardshrink}`;
  }
  const updateTitle = async () => {
    const updateDoc = { $set: {} };
    fetch(`/api/notes/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    });
  };
  // const deleteNote = async () => {
  //   fetch;
  // };
  return (
    <div className={containerClass} tabIndex="0">
      <div className={styles.center}>
        <input
          className={styles.title}
          type="text"
          value={nTitle}
          ref={ref}
          readOnly={editMode ? false : true}
          title={nTitle}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className={styles.sub_text}
          type="text"
          value={nSubtext}
          readOnly={editMode ? false : true}
          onChange={(e) => {
            setSubtext(e.target.value);
          }}
        />
      </div>
      <div className={styles.footer}>
        <p className={styles.date}>{getTime(nTime)}</p>
        <div className={styles.options}>
          {editMode && (
            <>
              <button
                onClick={() => {
                  setEditMode(false);

                  setTime(Date.now());
                }}
                className={styles.button}
                title="Done"
              >
                <Image
                  src="/assests/done.svg"
                  alt="done"
                  className="icon"
                  height={24}
                  width={24}
                />
              </button>
              <button
                onClick={() => {
                  setEditMode(false);
                  setTitle(title);
                  setSubtext(subtext);
                }}
                title="Cancel"
                className={styles.button}
              >
                <Image
                  src="/assests/cancel.svg"
                  alt="cancel"
                  className="icon"
                  height={24}
                  width={24}
                />
              </button>
            </>
          )}
          {!editMode && (
            <>
              <button
                onClick={() => {
                  setEditMode(true);
                  ref.current.focus();
                }}
                className={styles.button}
                title="Edit"
              >
                <Image
                  src="/assests/edit.svg"
                  alt="edit"
                  className="icon"
                  height={24}
                  width={24}
                />
              </button>
              <button
                onClick={() => {
                  fetch("/api/notes", {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({ operation: "delete", id }),
                  });
                }}
                title="Delete"
                className={styles.button}
              >
                <Image
                  src="/assests/delete.svg"
                  alt="delete"
                  className="icon"
                  height={24}
                  width={24}
                />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
