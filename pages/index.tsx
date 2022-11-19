import { Box, Button, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Box
      sx={{
        padding: "4rem 0",
        backgroundColor: "#000",
        minHeight: "100vh",
        flex: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography sx={{ color: "white" }} variant="h1">
        Bienvenido a Filmotek
      </Typography>
      <Typography sx={{ color: "white" }} variant="body1">
        Tu nueva Filmoteka Virtual
      </Typography>
      <Button variant="contained">Iniciar Sessión</Button>
    </Box>
  );
}
