"use client";

import React from "react";
import { Roboto } from "next/font/google";
import NextLink from "next/link";
import createTheme from "@mui/material/styles/createTheme";
import responsiveFontSizes from "@mui/material/styles/responsiveFontSizes";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const Link = React.forwardRef((props, ref) =>
  React.createElement(NextLink, {
    // @ts-expect-error
    ref,
    ...props,
  }),
);

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
        component: Link,
        underline: "hover",
      },
    },
  },
});

export default responsiveFontSizes(theme);
