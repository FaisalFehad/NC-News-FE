import React from "react";

const ArticleCard = ({ allArticles }) => {
  if (allArticles) {
    return allArticles.map(article => {
      return (
        <main key={article.article_id}>
          <hr />
          <h3>Title: {article.title}</h3>
          <h3>Topic: {article.topic}</h3>
          <h3>Votes: {article.votes}</h3>
          <hr />
        </main>
      );
    });
  }
};

export default ArticleCard;
