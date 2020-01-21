import axios from "axios";

export const updateArticleVoteReq = (article_id, inc_votes) => {
  console.log(inc_votes, "passed votes<<<<<<<<<");
  return (
    axios
      // /api/articles/1

      .patch(`https://nc-news2020.herokuapp.com/api/articles/${article_id}`, {
        inc_votes
      })
      .then(({ data }) => {
        return data;
      })
  );
};

export default updateArticleVoteReq;
