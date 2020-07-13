import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

import usersArray from "../../utils/constants.json";
import useTable from "./useTable_";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 20,
    textAlign: "center",
    "& thead": {
      color: "red"
    },
  },
}));

const Table = () => {
  const classes = useStyles();

  const { result, setFilter } = useTable(usersArray);

  const headerData = [
    { label: "Name", propType: "string", propName: "name" },
    { label: "Surname", propType: "string", propName: "surname" },
    { label: "Age", propType: "number", propName: "age" },
    { label: "Currently working", propType: "boolean", propName: "working" },
  ];

  const handleSearchChange = ({ target: { value } }) => setFilter(value);

  return (
    <>
      <table className={classes.root}>
        <thead>
          <tr>
            <td colSpan={headerData.length / 2}>
              <TextField fullWidth onChange={(e) => handleSearchChange(e)} />
            </td>
          </tr>
          <tr>
            {headerData.map((item, index) => (
              <td
                key={index}
              >
                {item.label}
              </td>
            )
            )}
          </tr>
        </thead>
        <tbody>
          {result.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.age}</td>
                <td>{item.working ? "yes" : "no"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default Table;
