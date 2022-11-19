import "../styles/globals.css";
import "../styles/Home.module.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { useEffect } from "react";
import axios from "axios";
import Common from "../src/components/common"
import { Box } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {


    
  return (
    <RecoilRoot>
      <Common />
      <Component {...pageProps} />
      <Box sx={{  backgroundColor: "#3d3d3d", height: "150px", width: "100%" }}></Box>

    </RecoilRoot>
  );
}

// open -na Google\ Chrome --args --user-data-dir=/tmp/temporary-chrome-profile-dir --disable-web-security --disable-site-isolation-trials
