import ArticlesList from "@/components/articles/articlesList";
import { fetchAllArticles } from "@/utils/utils";

// WILL REVALIDATE REQUEST EVERY 3 DAYS (ISR)
export const revalidate = 259200;

const Home = async () => {
  const articles = await fetchAllArticles();
  return <ArticlesList articles={articles} />;
};

export default Home;
