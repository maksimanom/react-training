import React, { useEffect } from "react";
import ls from "local-storage";

import Button from "@material-ui/core/Button";
import { AppBar, Toolbar, Grid, Paper, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ListView from "./listView";
import "./table.scss";

let listFromServer = [
  { id: 0, text: "Learn JS", done: true },
  { id: 1, text: "Visit University", done: false },
  { id: 2, text: "Read React docs", done: true }
];
ls.set("listData", JSON.stringify(listFromServer));

const ToDoList = () => {
  const [listData, setList] = React.useState(JSON.parse(ls.get("listData")));

  const handleSetList = list => {
    ls.set("listData", JSON.stringify(list));
    setList(JSON.parse(ls.get("listData")));
  };

  return <ListView listData={listData} setList={list => handleSetList(list)} />;
};

export default ToDoList;
