import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

import ToDoList from "./Component/toDoList";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ToDoList />
  </ThemeProvider>,
  document.getElementById("root")
);
