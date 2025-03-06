import ArticlesList from "@/components/articles/articlesList";
import { ArticlesProps } from "@/types/types";

// WILL REVALIDATE REQUEST EVERY 3 DAYS (ISR)
export const revalidate = 259200;

const Home = async () => {
  const articles: ArticlesProps[] = await fetch(
    "http://localhost:4000/articles"
  ).then((res) => res.json());
  return <ArticlesList articles={articles} />;
};

export default Home;
