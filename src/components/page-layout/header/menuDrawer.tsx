"use client";
import { Box, Button, Drawer, IconButton, List, ListItem } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/headerLinks";
import { usePathname } from "next/navigation";

const MenuDrawer = () => {
  const pathName = usePathname();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = (newOpen: boolean) => setIsOpen(newOpen);
  return (
    <div>
      <IconButton
        onClick={() => toggleDrawer(true)}
        size="large"
        edge="start"
        color="inherit"
      >
        <MenuIcon sx={{ color: "#1158A7" }} />
      </IconButton>
      <Drawer anchor="right" open={isOpen} onClose={() => toggleDrawer(false)} >
        <Box sx={{ width: 250 }} onClick={() => toggleDrawer(false)}>
          <List>
            {NAV_LINKS.map((item) => (
              <ListItem
                key={item.id}
                sx={{
                  color: pathName === item.href ? "primary.main" : "inherit",
                  borderBottom: "1px solid black",
                }}
              >
                <Button component={Link} href={item.href}>{item.label}</Button>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
