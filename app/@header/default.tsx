"use client";
import NextLink from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Logo from "@/components/Logo";
import DevIcon from "@/icons/Dev";

const Header = () => {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo />
        <Stack direction="row" gap={0} alignItems="center">
          <Button
            variant="text"
            component={NextLink}
            href="https://alfredosalzillo.me/resume/alfredo-salzillo-resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </Button>
          <IconButton
            component={NextLink}
            href="https://www.linkedin.com/in/alfredosalzillo/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component={NextLink}
            href="https://github.com/alfredosalzillo"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
          <IconButton
            component={NextLink}
            href="https://dev.to/alfredosalzillo"
            target="_blank"
            rel="noreferrer"
          >
            <DevIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
