"use client";
import { createTheme } from "@mui/material/styles";
import localFont from "next/font/local";


const iranSansXV = localFont({
  src: "./app/fonts/IRANSansXV.woff2",
  variable: "--font-iran-sans",
  weight: "100 900",
});


const theme = createTheme({
  typography: {
    fontFamily: iranSansXV.style.fontFamily,
  },
});

export default theme;
