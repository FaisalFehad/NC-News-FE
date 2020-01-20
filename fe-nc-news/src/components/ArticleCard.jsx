import React from "react";

const ArticleCard = ({ allArticles }) => {
  if (allArticles) {
    console.log(allArticles[0]);

    return allArticles.map(article => {
      return (
        <div>
          <hr />
          <h3>Title: {article.title}</h3>
          <h3>Topic: {article.topic}</h3>
          <h3>Votes: {article.votes}</h3>
          <hr />
        </div>
      );
    });
  }
};

export default ArticleCard;
