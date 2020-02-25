import { createMuiTheme } from "@material-ui/core/styles";

const primary = "#ff5722";
const secondary = "#9e9e9e";
const tableHeadMain = "#424242";
const tableIdItem = "#f5f5f5";

const theme = createMuiTheme({
  palette: {
    primary: { main: primary },
    secondary: { main: secondary },
    tableHead: {
      primary: tableHeadMain,
      secondary: tableIdItem
    }
  }
});

export default theme;
