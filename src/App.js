import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, CssBaseline, AppBar, Toolbar, List } from "@material-ui/core/";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Modal from "./Component/modal";
import Form from "./Component/form";
import Table from "./Component/table";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    "& .MuiPaper-root, .MuiToolbar-root": {
      justifyContent: "space-evenly",
    },
    "& a": {
      textDecoration: "none",
      color: "inherit",
      "&:hover": {
        color: "#c4c4c4",
      },
    },
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <Grid container className={classes.root}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar variant="dense">
            <Link to="/modal">Modal</Link>
            <Link to="/form">Form</Link>
            <Link to="/table">Table</Link>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/modal" component={Modal} />
          <Route path="/form" component={Form} />
          <Route path="/table" component={Table} />
        </Switch>
      </Grid>
    </Router>
  );
};
export default App;
