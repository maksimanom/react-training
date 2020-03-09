import React from "react";

import classNames from " ./../../node_modules/classnames";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
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
    "@media (max-width: 1280px)": {
      "& .itemChangePerformButton, .itemDeleteButton": {
        display: "none"
      },
      "& .textOfItem": {
        textOverflow: "ellipsis",
        wordWrap: "break-word",
        wordBreak: "break-all"
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
  const [newTaskText, setNewTaskText] = React.useState("");
  // for Popper (change task)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const theme = useTheme();
  const classes = useStyles(theme);

  const handleDeleteTask = () => {
    const modifiedArray = deleteTask(item.id);
    setList(modifiedArray);
  };

  const handleChangeTask = e => {
    if (!item.done) {
      setAnchorEl(e.currentTarget);
      setOpen(prev => placement !== "top" || !prev);
      setPlacement("top");
      if (open && newTaskText !== "" && !item.done) {
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
    <TableRow className={classes.root}>
      <TableCell component="th" scope="row" align="center">
        {item.id + 1}
      </TableCell>
      <TableCell
        className={classNames(
          item.done ? classes.textCompleted : classes.textUnCompleted,
          item.done ? classes.taskCompleted : classes.taskUnCompleted,
          "textOfItem"
        )}
      >
        {item.text}
      </TableCell>
      <TableCell className="itemChangePerformButton">
        <CheckBoxChangePerform
          name={item.text}
          id={item.id}
          checked={item.done}
          handleChangePerform={handleChangePerform}
        />
      </TableCell>
      <TableCell className="itemChangeTextButton">
        <EditIcon
          name="changeTask"
          onClick={handleChangeTask}
          className={
            item.done ? classes.taskCompleted : classes.taskUnCompleted
          }
        />
        <Popper
          open={open}
          anchorEl={anchorEl}
          placement={placement}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <form action="get" onSubmit={handleChangeTask}>
                  <Typography className={classes.typography}>
                    <TextField
                      value={newTaskText}
                      label="Change task"
                      onChange={e => setNewTaskText(e.target.value)}
                      name="editTask"
                    />
                  </Typography>
                </form>
              </Paper>
            </Fade>
          )}
        </Popper>
      </TableCell>
      <TableCell className="itemDeleteButton">
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
