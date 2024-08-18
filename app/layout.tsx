import type { FC } from 'react';
import React from 'react';
import Script from 'next/script';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Toolbar from '@mui/material/Toolbar';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import config from '@/config';
import theme from './theme';

export const metadata: Metadata = {
  title: config.siteName,
  description: config.siteDescription,
};

export const viewport: Viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1.0,
  userScalable: true,
};

type RootLayoutProps = {
  children: React.ReactNode;
};
const RootLayout: FC<RootLayoutProps> = ({
  children,
}) => (
  <html lang="en">
    <body>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          <Container maxWidth="lg">
            <AppBar position="static" elevation={0}>
              <Toolbar disableGutters>
                <Logo />
              </Toolbar>
            </AppBar>
            {children}
            <Divider sx={{ mt: 4 }} />
            <Footer />
          </Container>
        </ThemeProvider>
      </AppRouterCacheProvider>
      <Script id="gtm-script" async src="https://www.googletagmanager.com/gtag/js?id=G-QZ1DYNJ6KE" />
      <Script id="gtm-init">
        {/* language=javascript */}
        {`
          window.dataLayer = window.dataLayer || [];
    
          function gtag() {
            dataLayer.push(arguments);
          }
    
          gtag('js', new Date());
    
          gtag('config', 'G-QZ1DYNJ6KE');
        `}
      </Script>
    </body>
  </html>
);

export default RootLayout;
