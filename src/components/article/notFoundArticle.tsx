import { Container, Typography } from "@mui/material";
import React from "react";
import BackButton from "./backButton";

const NotFoundArticle = ({ message }: { message: string }) => {
  return (
    <Container
      sx={{
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        justifyContent: "center",
        mt: 4,
      }}
    >
      <Typography variant="h5" textAlign="center" mt={5}>
        {message}
      </Typography>
      <BackButton title="بازگشت به صفحه اصلی" />
    </Container>
  );
};

export default NotFoundArticle;
