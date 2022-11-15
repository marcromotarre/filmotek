import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";

export default function SignIn() {
  return (
    <>
      <FormControl>
        <InputLabel htmlFor="email-input">Tu dirección de correo</InputLabel>
        <Input id="email-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          Nunca ja,ás compartiremos tu email con terceros
        </FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password-input">Escribe una contraseña</InputLabel>
        <Input id="password-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          Asegurate de que sea segura
        </FormHelperText>
      </FormControl>
    </>
  );
}
