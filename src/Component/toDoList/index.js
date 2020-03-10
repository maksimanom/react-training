import React from "react";
import ls from "local-storage";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ListView from "./listView/listView";
import AddTask from "./addTask/addTask";

// checking list items in local storage, if NO founded => setting default data
if (
  JSON.parse(ls.get("listData")) === null ||
  JSON.parse(ls.get("listData")) === undefined ||
  JSON.parse(ls.get("listData")).length === 0
) {
  ls.set(
    "listData",
    JSON.stringify([
      { id: 0, text: "Learn JS", done: true },
      { id: 1, text: "Visit University", done: false },
      { id: 2, text: "Read React docs", done: true }
    ])
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: "Roboto",
    overflow: "hidden",
    "& .listTable": {
      width: "100%"
    },
    "& .newTaskContainer": {
      margin: "20px 0",
      display: "flex",
      flexFlow: "row nowrap"
    }
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
    <Grid
      container
      alignContent="center"
      direction="column"
      justify="center"
      className={classes.root}
    >
      <Grid item xs={11} sm={9} className="listTable">
        <ListView listData={listData} setList={list => handleSetList(list)} />
      </Grid>
      <Grid item xs={11} sm={9} className="newTaskContainer">
        <AddTask handleSetList={list => handleSetList(list)} />
      </Grid>
    </Grid>
  );
};

export default ToDoList;
