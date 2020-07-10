import React from "react";
import usersArray from "../../utils/constants.json";
import * as _ from "lodash";

const useTable = () => {
  const usersNum = 5;
  const [pageNum, setpageNum] = React.useState(0);
  const [users, setUsers] = React.useState(usersArray);
  const [sortType, setSortType] = React.useState("asc");
  // new RegExp(valueFromFilter, "gi");

  const getSortFunction = (fieldName, fieldType) => {
    switch (fieldType) {
      case "string":
        return (a, b) => {
          if (a[fieldName].toLowerCase() > b[fieldName].toLowerCase()) {
            return sortType === "asc" ? 1 : -1;
          }
          if (a[fieldName].toLowerCase() < b[fieldName].toLowerCase()) {
            return sortType === "asc" ? -1 : 1;
          }
          return 0;
        };
      default:
        return (a, b) => {
          if (a[fieldName] > b[fieldName]) {
            return sortType === "asc" ? 1 : -1;
          }
          if (a[fieldName] < b[fieldName]) {
            return sortType === "asc" ? -1 : 1;
          }
          return 0;
        };
    }
  };

  const onSortClick = (fieldName, fieldType) => {
    const tmpArray = [...users];
    const sortedArray = tmpArray.sort(getSortFunction(fieldName, fieldType));
    setSortType(sortType === "asc" ? "desc" : "asc");
    setUsers(sortedArray);
  };

  return {
    users,
    onSortClick,
  };
};
export default useTable;
