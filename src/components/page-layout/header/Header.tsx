import { AppBar, Box, Button, Toolbar } from "@mui/material";
import Image from "next/image";
import Logo from "../../../../public/images/sos-logo.png";
import MenuDrawer from "./menuDrawer";
import MenuHeader from "./menuHeader";

const Header = () => {
  return (
    <AppBar
      position="sticky"
      color="secondary"
      sx={{ flexDirection: "row", px: { lg: 4 } }}
    >
      <Toolbar sx={{ width: "100%", justifyContent: "space-between" }}>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <MenuDrawer />
        </Box>
        <Image src={Logo} alt="logo" quality={100} />
        <MenuHeader />
        <Button variant="contained">ورود و فعالسازی</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
