'use client';

import { Roboto } from 'next/font/google';
import createTheme from '@mui/material/styles/createTheme';
import responsiveFontSizes from '@mui/material/styles/responsiveFontSizes';
import NextLink from 'next/link';
import React from 'react';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const Link = React
  .forwardRef((props, ref) => React
    .createElement(NextLink, {
      // @ts-ignore
      ref,
      ...props,
    }));

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0d1117',
      paper: '#0d1117',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: Link,
        underline: 'hover',
      },
    },
  },
});

export default responsiveFontSizes(theme);
