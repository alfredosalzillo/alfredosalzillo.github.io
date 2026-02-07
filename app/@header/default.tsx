import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "@/components/Logo";
import SocialLinks from "@/components/SocialLinks";

const Header = () => {
  return (
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
  )
}

export default Header;