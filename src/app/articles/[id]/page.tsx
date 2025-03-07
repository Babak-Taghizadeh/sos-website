import NotFoundArticle from "@/components/article/notFoundArticle";
import ArticleDetails from "@/components/article/articleDetails";
import { fetchAllArticles, fetchArticleById } from "@/utils/utils";
import { Metadata } from "next";

export async function generateStaticParams() {
  const articles = await fetchAllArticles();
  return articles.map((article) => ({
    id: String(article.id),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const data = await fetchArticleById(params.id);
  return {
    title: data.title,
    description: data.description,
  };
}

const Article = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  let article;
  try {
    article = await fetchArticleById(id);
  } catch (error) {
    console.error("Error fetching article:", error);
    return (
      <NotFoundArticle message="مشکلی پیش آمده.لطفا مجحدا دوباره تلاش کنید" />
    );
  }

  if (!article || Object.keys(article).length === 0) {
    return <NotFoundArticle message="مقاله ای پیدا نشد!" />;
  }

  return <ArticleDetails article={article} />;
};

export default Article;
