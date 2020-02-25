import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import TextFormatIcon from "@material-ui/icons/TextFormat";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import ListAltIcon from "@material-ui/icons/ListAlt";
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
    width: "100%",
    "& tr": {
      textAlign: "center"
    },
    "& thead": {
      fontWeight: "bold"
    },
    "& 	.MuiTableCell-head": {
      backgroundColor: theme.palette.tableHead.primary,
      color: "#ffffff",
      textAlign: "center"
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
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <FormatListNumberedIcon />
            </TableCell>
            <TableCell>
              <TextFormatIcon />
            </TableCell>
            <TableCell>
              <SpellcheckIcon />
            </TableCell>
            <TableCell>
              <ListAltIcon />
            </TableCell>
            <TableCell>
              <DeleteSweepIcon />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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
    // <table className={classes.listTable}>
    //   <thead>
    //     <tr>
    //       <td>
    //         <FormatListNumberedIcon />
    //       </td>
    //       <td>
    //         <TextFormatIcon />
    //       </td>
    //       <td>
    //         <SpellcheckIcon />
    //       </td>
    //       <td>
    //         <ListAltIcon />
    //       </td>
    //       <td>
    //         <DeleteSweepIcon />
    //       </td>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {listData.map((item, index) => {
    //       return (
    //         <TaskView
    //           setList={list => handleSetList(list)}
    //           item={item}
    //           key={index}
    //         />
    //       );
    //     })}
    //   </tbody>
    // </table>
  );
};

export default ListView;
