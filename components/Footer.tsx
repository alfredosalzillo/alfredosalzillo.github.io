import type { FC } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import config from "@/config";

const Copyright = () => (
  <Typography variant="body2" color="text.secondary" align="center">
    {"Copyright © "}
    <Link color="inherit" href="/">
      {config.siteName}
    </Link>{" "}
    {new Date().getFullYear()}.
  </Typography>
);

const Footer: FC = () => (
  <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
    <Container maxWidth="lg">
      <Copyright />
    </Container>
  </Box>
);
export default Footer;
