import React from "react";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { addTask } from "../../../utils";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    "& .MuiButton-root ": {
      backgroundColor: theme.palette.primary.main,
      color: "#ffffff"
    }
  }
}));

const AddTask = ({ handleSetList }) => {
  const [textNewTask, setTextNewTask] = React.useState("");
  const theme = useTheme();
  const classes = useStyles(theme);

  const handleAddTask = text => {
    const listWithAddedTask = addTask(text);
    if (listWithAddedTask !== 0) {
      handleSetList(listWithAddedTask);
    }
    setTextNewTask("");
  };

  return (
    <Box className={classes.root} component="div">
      <TextField
        size="small"
        multiline
        value={textNewTask}
        label="Enter new task"
        onChange={e => setTextNewTask(e.target.value)}
      />
      <Button variant="contained" onClick={() => handleAddTask(textNewTask)}>
        Add Task
      </Button>
    </Box>
  );
};

export default AddTask;
