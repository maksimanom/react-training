import axios from "axios";

import { API } from "../utils/API";

export const getAllPosts = () => {
  return axios.get(`${API}/posts`);
};

export const getPost = (postNumber) => {
  return axios.get(`${API}/posts/${postNumber}`);
};

export const changePost = (postData) => {
  return axios.put(`${API}/posts/${postData.id}`, {
    body: JSON.stringify(postData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

export const deletePost = (id) => {
  return axios.delete(`${API}/posts/${id}`);
};
