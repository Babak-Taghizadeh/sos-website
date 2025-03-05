import { AppBar, Button, Toolbar } from "@mui/material";
import Image from "next/image";
import Logo from "@/public/images/sos-logo.png";
import MenuDrawer from "./menuDrawer";

const Header = () => {
  return (
    <AppBar position="sticky" color="secondary" sx={{ flexDirection: "row" }}>
      <Toolbar sx={{ width: "100%", justifyContent: "space-between" }}>
        <MenuDrawer />
        <Image src={Logo} alt="logo" quality={100} />
        <Button variant="contained">ورود و فعالسازی</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
