import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Box, Paper } from "@material-ui/core/";

const useStyles = makeStyles(() => ({
  root: {
		width: "100%",
		marginBottom: 10
  },
}));

const Post = ({ post, changePostData, handleDeletePost }) => {
  const classes = useStyles();
  const [postState, setPostState] = React.useState({
    title: post.title,
    body: post.body,
  });

  const onInputChange = ({ target: { name, value } }) => {
    setPostState((prev) => ({ ...prev, [name]: value }));
  };

  const onInputBlur = () => {
    changePostData({
      id: post.id,
      userId: post.userId,
      title: postState.title,
      body: postState.body,
    });
  };

  return (
    <Box component={Paper} className={classes.root}>
      <TextField
        onBlur={onInputBlur}
        name="title"
        onChange={onInputChange}
        InputProps={{ disableUnderline: true }}
        fullWidth
        value={postState.title}
      />
      <TextField
        onBlur={onInputBlur}
        name="body"
        onChange={onInputChange}
        InputProps={{ disableUnderline: true }}
        fullWidth
        value={postState.body}
      />
      <Button variant="contained" onClick={() => handleDeletePost(post.id)}>
        DELETE
      </Button>
    </Box>
  );
};
export default Post;
