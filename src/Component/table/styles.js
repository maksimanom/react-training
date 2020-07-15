import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 20,
    textAlign: "center",
    borderCollapse: "collapse",
    "& thead": {
      color: "red",
      "&:hover": {
        cursor: "pointer",
      },
    },
    "& tbody tr": {
      borderBottom: "1px dotted black",
      borderCollapse: "collapse",
    },
  },
  editColumn: {
    paddingLeft: 50,
  },
  editIcon: {
    cursor: "pointer",
  },
  portalModal: {
    padding: 10,
    borderRadius: 3,
    backgroundColor: "#FF7355",
    textAlign: "center",
    zIndex: 1200,
    position: "fixed",
  },
}));
