import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "0 auto",
    fontFamily: "Lato",
    width: 1200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  paper: {
    boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)!important",
    marginTop: 24,
    borderRadius: "0 4px 4px 0"
  },
  post: {
    boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)!important",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: "0 4px 4px 0"
  },
  postImage: {
    height: 250
  },
  postContent: {
    "& h3": {
      fontWeight: "bold",
      fontSize: 28
    },
    "& p": {
      fontSize: 16
    },
    "& Button": {
      textTransform: "capitalize",
      marginTop: 90
    }
  },
  authorInfo: {
    marginTop: 24,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "8px",
    "& h2": {
      fontSize: 32,
      fontWeight: "bold"
    },
    "& img": {
      marginTop: 8,
      width: 150,
      borderRadius: "50%"
    },
    "& h4": {
      fontSize: 24,
      fontWeight: "bold"
    },
    "& p": {
      marginTop: 8,
      lineHeight: "1.5rem"
    }
  }
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xl={9} lg={9} md={9} sm={6} xs={3}>
          <Paper className={classes.paper}>
            <Card className={classes.post}>
              <img
                src="spm.png"
                alt="Lego Spider-Man"
                className={classes.postImage}
              />
              <CardContent className={classes.postContent}>
                <h3>Lego Spider-Man</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis commodo odio aenean sed.
                </p>
                <Button variant="outlined" color="inherit">
                  Read more
                </Button>
              </CardContent>
            </Card>
          </Paper>

          <Paper className={classes.paper}>
            <Card className={classes.post}>
              <img
                src="bat.png"
                alt="Lego Spider-Man"
                className={classes.postImage}
              />
              <CardContent className={classes.postContent}>
                <h3>Lego Batman</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis commodo odio aenean sed.
                </p>
                <Button variant="outlined" color="inherit">
                  Read more
                </Button>
              </CardContent>
            </Card>
          </Paper>

          <Paper className={classes.paper}>
            <Card className={classes.post}>
              <img
                src="blp.png"
                alt="Lego Spider-Man"
                className={classes.postImage}
              />
              <CardContent className={classes.postContent}>
                <h3>Lego Black Panther</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis commodo odio aenean sed.
                </p>
                <Button variant="outlined" color="inherit">
                  Read more
                </Button>
              </CardContent>
            </Card>
          </Paper>
        </Grid>

        <Grid item xl={3} lg={3} md={6} sm={6} xs={3}>
          <Paper className={classes.authorInfo}>
            <h2>About</h2>
            <img src="avatar.png" alt="Author image" />
            <h4>Rob Smith</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              a imperdiet diam. In id nibh varius, interdum mauris eu,
              sollicitudin nunc. Ut pretium tellus metus, at efficitur elit
              venenatis sed.
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
