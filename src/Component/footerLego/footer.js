import React from "react";
import theme from "../../theme.js";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Toolbar, Grid } from "@material-ui/core";
import useStyles from "./styles"

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
            <div />
            <p>
              LeGO <br /> ADVeNTUReS
              <span>Rob Smith Blog</span>
            </p>
          </Grid>
          
          <Grid xs={3} item className={classes.footer__item}>
            <h3 className="footer__title">
              About
            </h3>
            <p className="footer_text">
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
