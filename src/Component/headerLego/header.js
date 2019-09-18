import React from "react";
import theme from "../../theme.js";
import { ThemeProvider } from "@material-ui/styles";
import {
  AppBar,
  Toolbar,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: "Lato"
  },
  appBar: {
    height: 85,
    flexDirection: "column",
    alignItems: "space-between",
    justifyContent: "space-between"
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: "0.2em",
    height: 80,
    width: "inherit"
  },
  logo__text: {
    marginTop: 4,
    height: 60,
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
    justifyContent: "space-between",
    letterSpacing: "0.2em",
    marginLeft: "5px",
    fontFamily: "Lato",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
    "& span": {
      fontWeight: "normal"
    }
  },
  logoImage: {
    backgroundImage: "url('logo.svg')",
    backgroundRepeat: "no-repeat",
    width: 80,
    height: "inherit"
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar
          position="static"
          color={theme.primary}
          className={classes.appBar}
        >
          <Toolbar className={classes.appBar}>
            <Grid container className={classes.logo}>
              <Grid item className={classes.logoImage} />
              <Grid item className={classes.logo__text}>
                  LeGO <br /> ADVeNTUReS
                <span>Rob Smith Blog</span>
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
