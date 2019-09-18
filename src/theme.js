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
      }
    }
  },
  palette: {
    primary: {
      light: "#757ce8",
      main: "#38b6ff",
      dark: "#002884",
      contrastText: "#fff",
      buttonsLinksToPost: "#343A40",
    }
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Lato"'
    ].join(",")
  }
});

export default theme
