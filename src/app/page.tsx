import NotFoundArticle from "@/components/article/notFoundArticle";
import ArticlesList from "@/components/articles/articlesList";
import { fetchAllArticles } from "@/utils/utils";

// WILL REVALIDATE REQUEST EVERYDAY (ISR)
export const revalidate = 86400;

const Home = async () => {
  let articles;

  try {
    articles = await fetchAllArticles();
  } catch (error) {
    console.log("Error fetching article:", error);
    return (
      <NotFoundArticle message="مشکلی پیش آمده.لطفا مجحدا دوباره تلاش کنید" />
    );
  }

  if (!articles || articles.length === 0) {
    return <NotFoundArticle message="مقاله ای پیدا نشد!" />;
  }

  return <ArticlesList articles={articles} />;
};

export default Home;
