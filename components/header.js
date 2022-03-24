import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  return (
    <header className={styles.container}>
      <Link href="/">
        <a>
          <h1 className={styles.brand_tag}>Notes</h1>
        </a>
      </Link>
      <div className={styles.link_list}>
        <div className={styles.link} tabIndex="0">
          {session && (
            <>
              <p>{session.user.name}</p>
              <Image
                src={session.user.image}
                alt="profile"
                className={styles.user_icon}
                width={24}
                height={24}
              />
            </>
          )}
          {!session && (
            <>
              <p>Sign in</p>
              <Image
                src="/assests/account_circle.svg"
                alt="profile"
                className="icon"
                width={24}
                height={24}
              />
            </>
          )}
          <div className={styles.sign_in}>
            {!session && <p className={styles.with}>with</p>}
            {session && (
              <button
                onClick={() => signOut()}
                className={styles.sign_in_button}
                title="Google"
              >
                <p className={styles.no_whitespace}>Sign out</p>
              </button>
            )}
            {!session && (
              <button
                onClick={() => signIn("google")}
                className={styles.sign_in_button}
                title="Google"
              >
                <Image
                  src="/assests/google_filled.svg"
                  alt="Google"
                  className="icon"
                  width={24}
                  height={24}
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
