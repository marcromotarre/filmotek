import "../styles/globals.css";
import "../styles/Home.module.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { useEffect } from "react";
import axios from "axios";
import Common from "../src/components/common"

export default function App({ Component, pageProps }: AppProps) {


    
  return (
    <RecoilRoot>
      <Common />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

// open -na Google\ Chrome --args --user-data-dir=/tmp/temporary-chrome-profile-dir --disable-web-security --disable-site-isolation-trials
