import "../../styles/Articles.scss";

function ArticlesListItem({ article }) {
  const { title, link, thumbNail } = article;

  return (
    <li className="article-container">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={thumbNail} alt={title} className="article-thumbnail" />
      </a>
      <div className="article-info">
        <a href={link} target="_blank" rel="noreferrer">
          <h3>{title}</h3>
        </a>
      </div>
    </li>
  );
}

export default ArticlesListItem;
