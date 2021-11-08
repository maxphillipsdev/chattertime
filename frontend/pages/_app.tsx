import "../styles/globals.scss";
import type { AppProps } from "next/app";
import GunContext from "../contexts/GunContext";

import GUN from "gun";
import "gun/sea";
import "gun/axe";

function MyApp({ Component, pageProps }: AppProps) {
  const db = GUN("ws://localhost:5000/gun");

  return (
    <>
      <GunContext.Provider value={{ db }}>
        <Component {...pageProps} />
      </GunContext.Provider>
    </>
  );
}

export default MyApp;
