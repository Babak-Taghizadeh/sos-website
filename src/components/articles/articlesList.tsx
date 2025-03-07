"use client";
import { useCallback, useState } from "react";
import { Typography, Button, Box, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ArticlesProps } from "@/types/types";
import ArticleCard from "./articleCard";

const ArticlesList = ({ articles }: { articles: ArticlesProps[] }) => {
  const [visibleArticles, setVisibleArticles] = useState<number>(3);

  const handleShowMore = useCallback(() => {
    setVisibleArticles((prev) => prev + 3);
  }, []);

  const isMobile = useMediaQuery("(max-width: 600px)");
  const articlesToShow = isMobile
    ? Math.min(visibleArticles, articles.length)
    : articles.length;

  return (
    <Box sx={{ mx: "auto", p: 3 }}>
      <Typography variant="h6" align="right" fontWeight="bold" mb={2}>
        مقاله‌ها
      </Typography>
      <Grid container component="article" spacing={2}>
        {articles?.slice(0, articlesToShow).map((article) => (
          <Grid
            component="section"
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            key={article.id}
          >
            <ArticleCard article={article} />
          </Grid>
        ))}
      </Grid>
      {isMobile && visibleArticles < articles.length && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button variant="outlined" onClick={handleShowMore} sx={{ px: 4 }}>
            بیشتر
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ArticlesList;
