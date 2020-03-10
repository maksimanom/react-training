import React from "react";

import classNames from " ./../../node_modules/classnames";
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
    "& .MuiCheckbox-root": {
      color: theme.palette.primary.main
    },
    "& .Mui-checked": {
      color: theme.palette.secondary.main
    },
    "& .MuiTextField-root": {
      "& .MuiInput-underline:before": {
        borderBottom: "none"
      }
    },
    "& .MuiInputBase-root":{
      color: "inherit"
    }
  },
  taskCompleted: {
    color: theme.palette.secondary.main,
    textDecoration: "line-through"
  },
  taskUnCompleted: {
    color: theme.palette.primary.main,
    fontWeight: "bold"
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
  const [newTaskText, setNewTaskText] = React.useState("");

  const theme = useTheme();
  const classes = useStyles(theme);

  const handleDeleteTask = () => {
    const modifiedArray = deleteTask(item.id);
    setList(modifiedArray);
  };

  const handleChangeTask = e => {
    if (!item.done) {
      if (newTaskText !== "" && !item.done) {
        e.preventDefault();
        const modifiedArray = changeTask(item.id, newTaskText);
        setList(modifiedArray);
        setNewTaskText("");
      }
    } else {
      alert("Change task execution status firstly!");
    }
  };

  const handleChangePerform = () => {
    const modifiedArray = changePerform(item.id);
    setList(modifiedArray);
  };

  return (
    <TableRow component="div" className={classes.root}>
      <TableCell component="div" align="center">
        {item.id + 1}
      </TableCell>
      <TableCell component="div">
        <TextField
          fullWidth
          multiline
          disabled={item.done}
          defaultValue={item.text}
          onChange={e => setNewTaskText(e.target.value)}
          onBlur={e => handleChangeTask(e)}
          className={classNames(
            item.done ? classes.taskCompleted : classes.taskUnCompleted
          )}
        />
      </TableCell>
      <TableCell
        component="div"
        className="itemChangePerformButton"
        align="center"
      >
        <CheckBoxChangePerform
          name={item.text}
          id={item.id}
          checked={item.done}
          handleChangePerform={handleChangePerform}
        />
      </TableCell>
      <TableCell component="div" className="itemDeleteButton" align="center">
        <DeleteForeverIcon
          onClick={handleDeleteTask}
          name="deleteTask"
          className={classNames(
            item.done ? classes.taskCompleted : classes.taskUnCompleted
          )}
        />
      </TableCell>
    </TableRow>
  );
};

export default TaskView;
