import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import TextFormatIcon from "@material-ui/icons/TextFormat";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import TaskView from "../taskView/taskView";

const useStyles = makeStyles(theme => ({
  root: {
    "& 	.MuiTableCell-head": {
      backgroundColor: theme.palette.tableHead.primary,
      color: "#ffffff",
      textAlign: "center"
    },
    "& .MuiTableCell-alignCenter": {
      width: "10%",
      "@media (max-width: 600px)": {
        padding: "16px 10px"
      }
    },
    "& .svgIconWrapper ": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }
}));

const ListView = ({ listData, setList }) => {
  const classes = useStyles();

  const handleSetList = list => {
    setList(list);
  };

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table component="div">
        <TableHead component="div">
          <TableRow component="div">
            <TableCell component="div">
              <div className="svgIconWrapper">
                <FormatListNumberedIcon />
              </div>
            </TableCell>
            <TableCell component="div">
              <div className="svgIconWrapper">
                <TextFormatIcon />
              </div>
            </TableCell>
            <TableCell component="div" className="headButtonChangePerfomance">
              <div className="svgIconWrapper">
                <SpellcheckIcon />
              </div>
            </TableCell>
            <TableCell component="div" className="headButtonDelete">
              <div className="svgIconWrapper">
                <DeleteSweepIcon />
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody component="div">
          {listData.map((item, index) => {
            return (
              <TaskView
                setList={list => handleSetList(list)}
                item={item}
                key={index}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListView;
