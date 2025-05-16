import articlesData from "../../data/articlesData";
import ArticlesListItem from "./ArticlesListItem";
import "../../styles/Articles.scss";

function Articles() {
  const parsedArticles = articlesData.map((article) => (
    <ArticlesListItem key={article.title} article={article} />
  ));
  return (
    <section id="writing">
      <h2 className="highlight">I write stuff too!</h2>
      <ul className="articles-list">{parsedArticles}</ul>;
    </section>
  );
}

export default Articles;
