import React from "react";
import "./header.scss";
import theme from "../../theme.js";
import { ThemeProvider } from "@material-ui/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Avatar,
  SvgIcon
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import classnames from 'classnames';
import cn from "classnames";

const classNames = cn;
const useStyles = makeStyles(theme => ({
  root: {
    "& .logo": {
      backgroundImage: `url("img/logo1.svg")`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

const Header = () => {
  const [values, setValues] = React.useState({
    age: "",
    name: "hai"
  });
  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
    <ThemeProvider theme={theme}>
      <AppBar position="static" color={theme.primary}>
        <Toolbar>
          <Grid container>
            <Grid item xs={3} className="logo">
              <div />
            </Grid>
            <Grid item xs={3}>
              <div className="logo" />
            </Grid>
          </Grid>
          <Grid />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
    </>
  );
};
export default Header;
