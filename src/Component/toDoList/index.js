import React, { useEffect } from "react";
import ls from "local-storage";

import { AppBar, Toolbar, Grid, Paper, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ListView from "./listView";
import AddTask from "./addTask";
import "./table.scss";

let listFromServer = [
  { id: 0, text: "Learn JS", done: true },
  { id: 1, text: "Visit University", done: false },
  { id: 2, text: "Read React docs", done: true }
];
ls.set("listData", JSON.stringify(listFromServer));

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  newTaskContainer: {
    marginTop: "20px",
    display: "flex",
    flexFlow: "row wrap"
  }
}));

const ToDoList = () => {
  const [listData, setList] = React.useState(JSON.parse(ls.get("listData")));
  const classes = useStyles();

  const handleSetList = list => {
    ls.set("listData", JSON.stringify(list));
    setList(JSON.parse(ls.get("listData")));
  };

  return (
    <>
      <ListView listData={listData} setList={list => handleSetList(list)} />
      <AddTask classes={classes} handleSetList={(list)=>handleSetList(list)}/>
    </>
  );
};

export default ToDoList;
