import { useState, useMemo } from "react";
import * as _ from "lodash";

const useTable = (data, initialValue = { currentPage: 0, itemsPerPage: 10 }) => {
  const [state, setState] = useState(initialValue);

  const itemsFrom = state.currentPage * state.itemsPerPage;
  const itemsTo = itemsFrom + state.itemsPerPage;

  const handleFilter = (item) => {
    if (!state.filter) {
      return true;
    }
    const regExp = new RegExp(state.filter.split(/\s+/g)
      .filter(string => string.length > 1)
      .join('|'), "gi");
    return regExp.test(item.name) || regExp.test(item.surname)
  }

  const getSortFunction = (fieldName = state.sort.propName, fieldType = state.sort.sortType, isReversed = state.sort.isReversed) => {
    switch (fieldType) {
      case "string":
        return (a, b) => {
          if (a[fieldName].toLowerCase() > b[fieldName].toLowerCase()) {
            return isReversed === false ? 1 : -1;
          }
          if (a[fieldName].toLowerCase() < b[fieldName].toLowerCase()) {
            return isReversed === false ? -1 : 1;
          }
          return 0;
        };
      default:
        return (a, b) => {
          if (a[fieldName] > b[fieldName]) {
            return isReversed === false ? 1 : -1;
          }
          if (a[fieldName] < b[fieldName]) {
            return isReversed === false ? -1 : 1;
          }
          return 0;
        };
    }
  };

  const setSort = (propName, sortType, isReversed) => {
    setState({ ...state, sort: { propName, sortType, isReversed } });
  }

  const setFilter = (string) => {
    setState({ ...state, filter: string });
  }

  const setCurrentPage = (string) => {
    setState({ ...state, currentPage: Number(string) });
  }

  const setItemsPerPage = (string) => {
    setState({ ...state, itemsPerPage: Number(string) });
  }

  const filteredData = useMemo(() => data.filter(handleFilter), [state.filter, data]);
  // const sortedData = filteredData.sort()

  const countOfPages = Math.ceil(filteredData.length / state.itemsPerPage);
  const arrayOfPages = new Array(countOfPages).fill(null).map((_, index) => index);

  // TODO add pagination here
  const result = filteredData
    .sort(state.sort ? getSortFunction() : (a, b) => 0)
    .slice(itemsFrom, itemsTo);

  console.log("state", state);
  return {
    result,
    setSort,
    setFilter,
    setCurrentPage,
    setItemsPerPage,
    arrayOfPages
  };
};

export default useTable;
