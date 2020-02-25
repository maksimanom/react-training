import React from "react";

import classNames from " ./../../node_modules/classnames";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

import { deleteTask, changeTask, changePerform } from "../../../utils";

const useStyles = makeStyles(theme => ({
  root: {
    "& th": {
      backgroundColor: theme.palette.tableHead.secondary
    },
    "& .MuiCheckbox-root": {
      color: theme.palette.primary.main
    },
    "& .Mui-checked": {
      color: theme.palette.secondary.main
    },
    "& .MuiTextField-root": {
      "&$focused": {
        color: theme.palette.primary.main
      }
    }
  },
  textCompleted: {
    textDecoration: "line-through"
  },
  textUnCompleted: {
    fontWeight: "bold"
  },
  taskCompleted: {
    color: theme.palette.secondary.main
  },
  taskUnCompleted: {
    color: theme.palette.primary.main
  }
}));

const CheckBoxChangePerform = ({ name, id, checked, handleChangePerform }) => {
  return (
    <Checkbox
      type="checkbox"
      name={name}
      id={toString(id)}
      checked={checked}
      onChange={handleChangePerform}
    />
  );
};

const TaskView = ({ setList, item }) => {
  const [visibleEditInput, setVisibleEditInput] = React.useState(false);
  const [newTaskText, setNewTaskText] = React.useState("");

  const theme = useTheme();
  const classes = useStyles(theme);

  const handleDeleteTask = () => {
    const modifiedArray = deleteTask(item.id);
    setList(modifiedArray);
  };

  const handleChangeTask = e => {
    if (visibleEditInput && newTaskText !== "" && !item.done) {
      const modifiedArray = changeTask(item.id, newTaskText);
      setList(modifiedArray);
      setNewTaskText("");
    }
    if (item.done && visibleEditInput) {
      setVisibleEditInput(!visibleEditInput);
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
    <TableRow className={classes.root}>
      <TableCell component="th" scope="row" align="center">
        {item.id + 1}
      </TableCell>
      <TableCell
        className={classNames(
          item.done ? classes.textCompleted : classes.textUnCompleted,
          item.done ? classes.taskCompleted : classes.taskUnCompleted
        )}
      >
        {item.text}
      </TableCell>
      <TableCell>
        <CheckBoxChangePerform
          name={item.text}
          id={item.id}
          checked={item.done}
          handleChangePerform={handleChangePerform}
          className={{ color: "red" }}
        />
      </TableCell>
      <TableCell>
        <EditIcon
          name="changeTask"
          onClick={handleChangeTask}
          className={
            item.done ? classes.taskCompleted : classes.taskUnCompleted
          }
        />
        {visibleEditInput ? (
          <TextField
            value={newTaskText}
            label="Change task"
            onChange={e => setNewTaskText(e.target.value)}
            name="editTask"
          />
        ) : null}
      </TableCell>
      <TableCell>
        <DeleteForeverIcon
          onClick={handleDeleteTask}
          name="deleteTask"
          className={
            item.done ? classes.taskCompleted : classes.taskUnCompleted
          }
        />
      </TableCell>
    </TableRow>
  );
};

export default TaskView;
