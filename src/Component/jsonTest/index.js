import React, { useEffect, Suspense } from "react";

import { Grid, CircularProgress } from "@material-ui/core/";

import {
  getAllPosts,
  changePost,
  deletePost,
} from "../../services/jsonPlaceholderService";
const Post = React.lazy(() => import("./post"));

const Preloader = () => {
  return <h2>Loading</h2>;
};
const Placeholder = ({ isLoading, items }) => {
  if (isLoading) {
    return <CircularProgress />;
  }
  if (!isLoading && !items.length) {
    return <h1>No items in table</h1>;
  }
};

const JsonTest = () => {
  const [allPosts, setAllPosts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAllPosts()
      .then((res) => {
        setIsLoading(false);
        setAllPosts(res.data);
      })
      .catch(setIsLoading(false));
  }, []);

  const changePostData = (newPostData) => {
    changePost(newPostData).then((res) => console.log(res));
    alert("Look status of request in console");
  };

  const handleDeletePost = (id) => {
    alert("Post deleted, check console");
    deletePost(id).then((res) => console.log(res));
  };

  return (
    <Suspense fallback={<Preloader />}>
      <Grid item xs={10}>
        {allPosts.map((post) => (
          <Post
            key={post.id}
            post={post}
            changePostData={(newPostData) => changePostData(newPostData)}
            handleDeletePost={(id) => handleDeletePost(id)}
          ></Post>
        ))}
        {!allPosts.length && (
          <Placeholder items={allPosts} isLoading={isLoading} />
        )}
      </Grid>
    </Suspense>
  );
};
export default JsonTest;
