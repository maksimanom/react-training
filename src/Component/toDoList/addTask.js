import React, { useState } from "react";

import {addTask} from "../../utils";

const AddTask = ({ classes, handleSetList }) => {
  const [textNewTask, setTextNewTask] = React.useState("");

  const handleAddTask = (text)=>{
    const listWithAddedTask = addTask(text);
    handleSetList(listWithAddedTask);
  }

  return (
    <div className={classes.newTaskContainer}>
      <p>Add new task: </p>
      <input
        type="text"
        value={textNewTask}
        onChange={event => setTextNewTask(event.target.value)}
      />
      <button onClick={()=>handleAddTask(textNewTask)}>add task</button>
    </div>
  );
};

export default AddTask
