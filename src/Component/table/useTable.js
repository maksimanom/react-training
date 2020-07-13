import React, { useEffect } from "react";
import usersArray from "../../utils/constants.json";
import * as _ from "lodash";

const useTable = () => {
  const usersNum = 5;
  const [pagesCount, setPagesCount] = React.useState([]);
  const [users, setUsers] = React.useState(usersArray);
  const [sortType, setSortType] = React.useState({ field: "", type: "asc", fieldType: "" });

  const getSortFunction = (fieldName, fieldType) => {
    switch (fieldType) {
      case "string":
        return (a, b) => {
          if (a[fieldName].toLowerCase() > b[fieldName].toLowerCase()) {
            return sortType.type === "asc" ? 1 : -1;
          }
          if (a[fieldName].toLowerCase() < b[fieldName].toLowerCase()) {
            return sortType.type === "asc" ? -1 : 1;
          }
          return 0;
        };
      default:
        return (a, b) => {
          if (a[fieldName] > b[fieldName]) {
            return sortType.type === "asc" ? 1 : -1;
          }
          if (a[fieldName] < b[fieldName]) {
            return sortType.type === "asc" ? -1 : 1;
          }
          return 0;
        };
    }
  };

  const onSortClick = (fieldName, fieldType) => {
    const tmpArray = [...users];
    const sortedArray = tmpArray.sort(getSortFunction(fieldName, fieldType));
    setSortType(prev => ({ ...prev, type: sortType.type === "asc" ? "desc" : "asc", fieldType: fieldType }));
    setUsers(sortedArray);
  };

  useEffect(() => {
    const countOfPages = Math.ceil(users.length / usersNum);
    const arrayOfPages = new Array(countOfPages).fill(null).map((_, index) => index);
    setPagesCount(arrayOfPages);
  }, [users]);

  const handleSearchChange = (e) => {
    const regExp = new RegExp(e.target.value.split(/\s+/g).filter(string => string.length > 1)
      .join('|'), "gi");
    const filteredItems = users
      .filter((user) => regExp.test(user.name) || regExp.test(user.surname))
    if (e.target.value) {
      setUsers(filteredItems);
      return;
    }
    setUsers(usersArray);
    // onSortClick(sortType.field, sortType.fieldType);
  }

  return {
    usersNum,
    users,
    onSortClick,
    pagesCount,
    handleSearchChange
  };
};
export default useTable;
