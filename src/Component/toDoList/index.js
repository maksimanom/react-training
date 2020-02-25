import React from "react";
import ls from "local-storage";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ListView from "./listView/listView";
import AddTask from "./addTask/addTask";

let listFromServer = [
  { id: 0, text: "Learn JS", done: true },
  { id: 1, text: "Visit University", done: false },
  { id: 2, text: "Read React docs", done: true }
];
ls.set("listData", JSON.stringify(listFromServer));

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: "Roboto"
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
    <Grid
      container
      alignContent="center"
      direction="column"
      justify="center"
      className={classes.root}
    >
      <Grid item xs={12}>
        <ListView listData={listData} setList={list => handleSetList(list)} />
      </Grid>
      <Grid item xs={12}>
        <AddTask handleSetList={list => handleSetList(list)} />
      </Grid>
    </Grid>
  );
};

export default ToDoList;
