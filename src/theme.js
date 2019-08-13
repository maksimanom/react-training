import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  props: {
    MuiTypography: {
      variantMapping: {
        h1: "h2",
        h2: "h2",
        h3: "h2",
        h4: "h2",
        h5: "h2",
        h6: "h2",
        subtitle1: "h2",
        subtitle2: "h2",
        body1: "span",
        body2: "span"
      }
    },
    MuiPaper: {
      root: {
        fontSize: "45px",
        color: "red"
      },
    }
  },
  palette: {
    primary: {
      light: "#757ce8",
      main: "#38b6ff",
      dark: "#002884",
      contrastText: "#fff"
    }
  }
});

export default theme
