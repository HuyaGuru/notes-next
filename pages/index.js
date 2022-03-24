import Card from "../components/card";
import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className={styles.container}>
      <Card title={"title #1"} subtext={"subtext #1"} date={"5 mins ago"} />
    </div>
  );
}
