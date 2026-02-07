"use client";

import NextImage from "next/image";
import NextLink from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "@/app/logo.png";
import config from "@/config";

const Logo = () => (
  <Box display="flex" alignItems="center">
    <Box
      sx={{ display: "flex", alignItems: "center", borderRadius: 10, mr: 0 }}
    >
      <NextImage
        src={logo.src}
        blurDataURL={logo.blurDataURL}
        alt={config.siteName}
        width={30}
        height={30}
      />
    </Box>
    <Typography
      variant="h6"
      noWrap
      component={NextLink}
      href="/"
      sx={{
        display: "flex",
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: "-0.1rem",
        color: "inherit",
        textDecoration: "none",
        textTransform: "uppercase",
      }}
    >
      {config.siteName}
    </Typography>
  </Box>
);

export default Logo;
