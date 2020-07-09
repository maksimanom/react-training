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
  
  const { users } = useTable();

  return (
    <table className={classes.root}>
      <thead>
        <tr>
          <td className="bigCell">Name</td>
          <td className="bigCell">Surname</td>
          <td>Age</td>
          <td>Working</td>
        </tr>
      </thead>
      <tbody>
        {users.map((item) => {
          return (
            <tr>
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
