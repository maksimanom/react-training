import React from "react";

import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";

import { deleteTask, changeTask, changePerform } from "../../../utils";

const useStyles = makeStyles(theme => ({
  root: {},
  checkedText: {
    textDecoration: "line-through"
  },
  unCheckedText: {
    fontWeight: "bold"
  }
}));

const CheckBoxChangePerform = ({ name, id, checked, handleChangePerform }) => {
  return (
    <Checkbox
      color="default"
      type="checkbox"
      name={toString(name)}
      id={toString(id)}
      checked={checked}
      onChange={handleChangePerform}
    />
  );
};

const TaskView = ({ setList, item }) => {
  const [visibleEditInput, setVisibleEditInput] = React.useState(false);
  const [newTaskText, setNewTaskText] = React.useState("");

  const classes = useStyles();

  const handleDeleteTask = () => {
    const modifiedArray = deleteTask(item.id);
    setList(modifiedArray);
  };

  const handleChangeTask = e => {
    if (visibleEditInput && newTaskText !== "") {
      const modifiedArray = changeTask(item.id, newTaskText);
      setList(modifiedArray);
      setNewTaskText("");
    }
    !item.done
      ? setVisibleEditInput(!visibleEditInput)
      : alert("Change task execution status firstly!");
  };

  const handleChangePerform = () => {
    const modifiedArray = changePerform(item.id);
    setList(modifiedArray);
  };

  return (
    <TableRow>
      <TableCell component="th" scope="row" align="center">
        {item.id}
      </TableCell>
      <TableCell
        className={item.done ? classes.checkedText : classes.unCheckedText}
      >
        {item.text}
      </TableCell>
      <TableCell>
        <CheckBoxChangePerform
          name={item.id}
          id={item.id}
          checked={item.done}
          handleChangePerform={handleChangePerform}
        />
      </TableCell>
      <TableCell>
        <EditIcon name="changeTask" onClick={handleChangeTask} />
        {visibleEditInput ? (
          // <input type="text" name="editTask" ref={editRef} />
          <TextField
            value={newTaskText}
            label="Change task"
            onChange={e => setNewTaskText(e.target.value)}
            name="editTask"
          />
        ) : null}
      </TableCell>
      <TableCell>
        <DeleteForeverIcon onClick={handleDeleteTask} name="deleteTask" />
      </TableCell>
    </TableRow>
  );
};

export default TaskView;
