import "../styles/globals.css";
import Header from "../components/header";
import Center from "../components/center";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Header />
      <Center>
        <Component {...pageProps} />
      </Center>
    </SessionProvider>
  );
}

export default MyApp;
