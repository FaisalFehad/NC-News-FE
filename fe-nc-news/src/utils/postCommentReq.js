import axios from "axios";

export const postComment = (article_id, body) => {
  return axios
    .post(
      `https://nc-news2020.herokuapp.com/api/articles/${article_id}/comments`,
      {
        username: "butter_bridge",
        body
      }
    )
    .then(({ data: comment }) => {
      return comment;
    });
};

export default postComment;
