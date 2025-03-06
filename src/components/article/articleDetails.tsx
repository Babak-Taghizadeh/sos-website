import { Box, Container, Typography } from "@mui/material";
import BackButton from "./backButton";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Image from "next/image";
import { ArticlesProps } from "@/types/types";

const ArticleDetails = ({ article }: { article: ArticlesProps }) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        pb: 5,
        mt: 4,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <BackButton title="بازگشت" />
      <Typography variant="h4" fontWeight="bold" align="center">
        {article.title}
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
        <AccessTimeIcon color="info" fontSize="small" />
        <Typography variant="body1" color="textSecondary" textAlign="center">
          {article.readTime}
        </Typography>
      </Box>
      <Box sx={{ position: "relative", width: "100%", height: 300 }}>
        <Image
          src={article.image}
          alt={article.title}
          fill
          style={{ objectFit: "cover", borderRadius: "8px" }}
        />
      </Box>

      <Typography
        variant="body1"
        sx={{ lineHeight: 1.8, textAlign: "justify" }}
      >
        {article.description}
      </Typography>
    </Container>
  );
};

export default ArticleDetails;
