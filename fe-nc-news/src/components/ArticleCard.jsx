import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({ allArticles }) => {
  if (allArticles) {
    return allArticles.map(article => {
      return (
        <main key={article.article_id}>
          <hr />
          <h3>
            <Link to={`articles/${article.article_id}`}>{article.title}</Link>
          </h3>
          <h3>
            <Link to={`/topics/${article.topic}`}>{article.topic}</Link>
          </h3>
          <h3>Votes: {article.votes}</h3>
          <hr />
        </main>
      );
    });
  }
};

export default ArticleCard;
