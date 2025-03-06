import NotFoundArticle from "@/components/article/notFoundArticle";
import ArticleDetails from "@/components/article/articleDetails";
import { fetchAllArticles, fetchArticleById } from "@/utils/utils";

export async function generateStaticParams() {
  const articles = await fetchAllArticles();
  return articles.map((article) => ({
    id: String(article.id),
  }));
}

const Article = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const article = await fetchArticleById(id);

  if (!article || Object.keys(article).length === 0) {
    return <NotFoundArticle />;
  }

  return <ArticleDetails article={article} />;
};

export default Article;
