import axios from "axios";

const makeApiRequests = url => {
  return axios
    .get(`https://nc-news2020.herokuapp.com/api/${url}`)
    .then(({ data }) => {
      return data;
    });
};

export default makeApiRequests;
