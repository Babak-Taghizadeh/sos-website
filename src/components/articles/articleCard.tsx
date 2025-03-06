import { ArticlesProps } from "@/types/types";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleCard = ({ article }: { article: ArticlesProps }) => {
  const maxDescriptionLength = 100;
  const limitedDescription =
    article.description.length > maxDescriptionLength
      ? article.description.slice(0, maxDescriptionLength) + "..."
      : article.description;
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
      <CardMedia sx={{ height: 160, width: "100%", position: "relative" }}>
        <Image
          src={article.image}
          alt={article.title}
          layout="fill"
          objectFit="cover"
        />
      </CardMedia>
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold">
          {article.title}
        </Typography>
        <Typography
          variant="caption"
          color="textSecondary"
          display="block"
          mb={1}
        >
          ⏱ {article.readTime}
        </Typography>
        <Typography variant="body2" color="textSecondary" mb={2}>
          {limitedDescription}
        </Typography>
        <Button
          variant="outlined"
          component={Link}
          href={`/articles/${article.id}`}
        >
          ادامه
        </Button>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
