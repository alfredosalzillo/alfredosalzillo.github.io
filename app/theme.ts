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
