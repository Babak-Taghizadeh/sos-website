import NotFoundArticle from "@/components/article/notFoundArticle";
import ArticlesList from "@/components/articles/articlesList";
import { fetchAllArticles } from "@/utils/utils";

// WILL REVALIDATE REQUEST EVERY 3 DAYS (ISR)
export const revalidate = 259200;

const Home = async () => {
  const articles = await fetchAllArticles();

  if (!articles || articles.length === 0) {
    return <NotFoundArticle />;
  }

  return <ArticlesList articles={articles} />;
};

export default Home;
