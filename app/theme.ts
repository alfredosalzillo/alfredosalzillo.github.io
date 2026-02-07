"use client";

import { Roboto } from "next/font/google";
import NextLink from "next/link";
import { createTheme, responsiveFontSizes } from "@mui/material";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0d1117",
      paper: "#0d1117",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: "2rem",
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "1.75rem",
      lineHeight: 1.2,
    },
    h3: {
      fontSize: "1.5rem",
      lineHeight: 1.2,
    },
    h4: {
      fontSize: "1.25rem",
      lineHeight: 1.2,
    },
    h5: {
      fontSize: "1.1rem",
      lineHeight: 1.2,
    },
    h6: {
      fontSize: "1rem",
      lineHeight: 1.2,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.7,
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: NextLink,
        underline: "hover",
      },
    },
  },
});

export default responsiveFontSizes(theme);
