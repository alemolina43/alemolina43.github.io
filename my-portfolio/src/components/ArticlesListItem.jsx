import "../../styles/Articles.scss";

function ArticlesListItem() {
  return (
    <div className="article-info">
      <a
        href="https://medium.com/@alexmarket43/should-you-learn-ruby-as-a-new-developer-4c3569a098d4"
        target="_blank"
        rel="noreferrer"
      >
        <h4>Should You Learn Ruby as a New Developer?</h4>
      </a>
      <p>
        In this article, I&apos;ll give you my honest take on Ruby, having
        learned it very early in my career, along with some important points to
        consider if you&apos;re thinking about making Ruby your first
        programming language.
      </p>
    </div>
  );
}

export default ArticlesListItem;
