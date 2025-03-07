"use client";
import { NAV_LINKS } from "@/constants/headerLinks";
import { Button, List, ListItem } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuHeader = () => {
  const pathName = usePathname();

  return (
    <List
      sx={{
        display: { xs: "none", md: "flex" },
        flexDirection: "row",
        justifyContent: "space-between",
        flexGrow: 1,
        mx: { md: 4, lg: 8, xl: 12 },
      }}
      disablePadding
    >
      {NAV_LINKS.map((item) => (
        <ListItem
          key={item.id}
          disablePadding
          sx={{
            width: "auto",
            color: pathName === item.href ? "primary.main" : "inherit",
          }}
        >
          <Button
            sx={(theme) => ({
              borderBottom:
                pathName === item.href
                  ? `1px solid ${theme.palette.primary.main}`
                  : "none",
            })}
            component={Link}
            href={item.href}
          >
            {item.label}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default MenuHeader;
