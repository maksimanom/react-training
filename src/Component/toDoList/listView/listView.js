import React, { useEffect } from "react";

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
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";

import TaskView from "../taskView/taskView";
import { TableFooter, TablePagination } from "@material-ui/core";
import { cutListPagination } from "../../../utils";

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
      alignItems: "center",
      color: "currentColor",
      "& .MuiTableSortLabel-icon, .MuiTableSortLabel-root, .MuiTableSortLabel-root.MuiTableSortLabel-active.MuiTableSortLabel-root.MuiTableSortLabel-active .MuiTableSortLabel-icon": {
        color: "currentColor"
      }
    },
    "& .MuiTablePagination-root": {
      overflow: "inherit"
    }
  }
}));

const ListView = ({ listData, setList }) => {
  const [orderBy, setOrderBy] = React.useState(["id", "desc"]);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const [currentListArrayToShow, setCurrentListArrayToShow] = React.useState(
    () => {
      return [...listData].slice(0, rowsPerPage);
    }
  );
  const classes = useStyles();

  const handleSetList = list => {
    setList(list);
  };

  const handleChangeOrderBy = field => {
    const newSortRule = orderBy[1] === "asc" ? "desc" : "asc";
    setOrderBy([field, newSortRule]);
    let newSortedArray = [...listData].concat([]);
    if (newSortRule === "asc") {
      newSortedArray.sort((a, b) => {
        return a[field] - b[field];
      });
    }
    if (newSortRule === "desc") {
      newSortedArray.sort((a, b) => {
        return b[field] - a[field];
      });
    }
    handleSetList(newSortedArray);
  };

  useEffect(() => {
    handleChangeOrderBy("id");
  }, []);

  useEffect(() => {
    handleChangePage(null, page);
  }, [listData, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    const arrayToShow = cutListPagination(rowsPerPage, newPage);
    setCurrentListArrayToShow(arrayToShow);
  };
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    let arrayToShow = [];
    if (rowsPerPage === -1) {
      arrayToShow = [...listData];
    } else {
      arrayToShow = cutListPagination(rowsPerPage, 0);
    }
    setCurrentListArrayToShow(arrayToShow);
  };

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table component="div">
        <TableHead component="div">
          <TableRow component="div">
            <TableCell component="div">
              <div className="svgIconWrapper">
                <TableSortLabel
                  active={orderBy[0] === "id"}
                  direction={orderBy[1]}
                  onClick={() => handleChangeOrderBy("id")}
                  className={classes.sortLabelIcon}
                >
                  <FormatListNumberedIcon />
                </TableSortLabel>
              </div>
            </TableCell>
            <TableCell component="div">
              <div className="svgIconWrapper">
                <TextFormatIcon />
              </div>
            </TableCell>
            <TableCell component="div" className="headButtonChangePerfomance">
              <div className="svgIconWrapper">
                <TableSortLabel
                  active={orderBy[0] === "done"}
                  direction={orderBy[1]}
                  onClick={() => handleChangeOrderBy("done")}
                >
                  <SpellcheckIcon />
                </TableSortLabel>
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
          {currentListArrayToShow.map((item, index) => {
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
      <TablePagination
        component="div"
        colSpan={4}
        rowsPerPageOptions={[1, 3, 5, 10, { label: "All", value: -1 }]}
        count={listData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default ListView;
