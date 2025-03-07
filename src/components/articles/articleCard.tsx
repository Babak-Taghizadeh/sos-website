import { ArticlesProps } from "@/types/types";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

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
          fill
          style={{ objectFit: "cover" }}
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
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button
            variant="outlined"
            component={Link}
            href={`/articles/${article.id}`}
          >
            ادامه
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
