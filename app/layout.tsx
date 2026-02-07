import type React from "react";
import type { FC } from "react";
import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import theme from "./theme";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import SocialLinks from "@/components/SocialLinks";
import config from "@/config";

export const metadata: Metadata = {
  title: config.siteName,
  description: config.siteDescription,
};

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1.0,
  userScalable: true,
};

type RootLayoutProps = {
  children: React.ReactNode;
};
const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          <Container maxWidth="lg">
            <AppBar position="static" elevation={0}>
              <Toolbar
                disableGutters
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Logo />
                <SocialLinks />
              </Toolbar>
            </AppBar>
            {children}
            <Divider sx={{ mt: 4 }} />
            <Footer />
          </Container>
        </ThemeProvider>
      </AppRouterCacheProvider>
      <GoogleAnalytics gaId="G-QZ1DYNJ6KE" />
    </body>
  </html>
);

export default RootLayout;
