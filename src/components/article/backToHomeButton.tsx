import React from "react";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";

const BackToHomeButton = ({ title }: { title: string }) => {
  return (
    <Button
      component={Link}
      href="/"
      variant="outlined"
      startIcon={<ArrowForwardIosIcon />}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        width: "fit-content",
        pr: 0,
      }}
    >
      {title}
    </Button>
  );
};

export default BackToHomeButton;
