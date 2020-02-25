import React from "react";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { addTask } from "../../../utils";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: "20px",
    display: "flex",
    flexFlow: "row wrap"
  }
}));

const AddTask = ({ handleSetList }) => {
  const [textNewTask, setTextNewTask] = React.useState("");
  const classes = useStyles();

  const handleAddTask = text => {
    const listWithAddedTask = addTask(text);
    if (listWithAddedTask !== 0) {
      handleSetList(listWithAddedTask);
    }
    setTextNewTask("");
  };

  return (
    <div className={classes.root}>
      <TextField
        value={textNewTask}
        label="Enter new task"
        onChange={e => setTextNewTask(e.target.value)}
      />
      <Button variant="contained" onClick={() => handleAddTask(textNewTask)}>
        Add Task
      </Button>
    </div>
  );
};

export default AddTask;
