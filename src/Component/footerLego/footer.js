import React from "react";
import theme from "../../theme.js";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Toolbar, Grid } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: "Lato"
  },
  footer: {
    backgroundColor: "blue",
    color: "#fff",
    "& .footer__item": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center"
    },
    "& .footer__item": {
      "& h3":{
        fontSize: 28
      },
      "& p":{
        fontSize: 16
      }
    }
  },
  logo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexBasis: "auto",
    justifyContent: "center",
    "& img": {
      backgroundImage: "url('logo.svg')",
      backgroundRepeat: "no-repeat",
      width: 80,
      height: 80
    },
    "& p": {
      height: 60,
      display: "flex",
      flexDirection: "column",
      alignItems: "space-between",
      justifyContent: "center",
      letterSpacing: "0.2em",
      marginLeft: 10,
      fontFamily: "Lato",
      textTransform: "uppercase",
      fontWeight: "bold",
      fontSize: 20,
      "& span": {
        fontWeight: "normal"
      }
    }
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.footer}
        >
          <Grid item xs={3} className={classes.logo}>
            <img />
            <p>
              LeGO <br /> ADVeNTUReS
              <span>Rob Smith Blog</span>
            </p>
          </Grid>
          
          <Grid xs={3} item className={classes.footer__item}>
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo
              nec ultrices dui sapien eget mi proin.
            </p>
          </Grid>
          <Grid xs={3} item className={classes.footer__item}>
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo
              nec ultrices dui sapien eget mi proin.
            </p>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};
export default Footer;
