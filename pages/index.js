import Card from "../components/card";
import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  const [notes, setNotes] = useState(null);
  const getNotes = async () => {
    console.log("getting notes");
    let data = await fetch("/api/notes");
    let n = await data.json();
    setNotes(n);
  };
  useEffect(() => {
    getNotes();
  },[]);
  if (!notes) {
    return (
      <div className={styles.container}>
        <Card
          title={"Untitled"}
          subtext={"subtext"}
          time={Date.now()}
          edit={null}
        />
        <Card
          title={"Untitled2"}
          subtext={"subtext2"}
          time={Date.now()}
          edit={null}
        />
        <Card
          title={"Untitled2"}
          subtext={"subtext2"}
          time={Date.now()}
          edit={null}
        />
        <Card
          title={"Untitled2"}
          subtext={"subtext2"}
          time={Date.now()}
          edit={null}
        />
        <Card
          title={"Untitled2"}
          subtext={"subtext2"}
          time={Date.now()}
          edit={null}
        />
        <Card
          title={"Untitled2"}
          subtext={"subtext2"}
          time={Date.now()}
          edit={null}
        />
      </div>
    );
  }
  return (
    <div className={styles.upper_container}>
      <button onClick={() => getNotes()} title="refresh">
        <Image
          src="/assests/refresh.svg"
          alt="refresh"
          className="icon"
          height={24}
          width={24}
        />
      </button>
      <div className={styles.container}>
        {notes.map((item) => {
          return (
            <Card
              id={item.id}
              title={item.title}
              subtext={item.subtext}
              time={item.time}
              key={item.id}
              edit={null}
            />
          );
        })}
      </div>
    </div>
  );
}
