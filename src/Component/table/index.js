import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import useTable from "./useTable";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 20,
    textAlign: "center",
    "& thead": {
      backgroundColor: "#c4c4c4",
      "& .bigCell": {
        width: 200,
      },
    },
  },
}));

const Table = () => {
  const classes = useStyles();

  const { users, onSortClick } = useTable();
  const headerData = [
    { label: "Name", propType: "string", propName: "name" },
    { label: "Surname", propType: "string", propName: "surname" },
    { label: "Age", propType: "number", propName: "age" },
    { label: "Currently working", propType: "boolean", propName: "working" },
  ];

  return (
    <table className={classes.root}>
      <thead>
        <tr>
          {headerData.map((item, index) => {
            return (
              <td
                key={index}
                onClick={() => onSortClick(item.propName, item.propType)}
              >
                {item.label}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {users.map((item, index) => {
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
  );
};
export default Table;
