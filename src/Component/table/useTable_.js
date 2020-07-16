import { useState, useMemo, useEffect } from "react";

const useTable = (
  data,
  initialValue = { currentPage: 0, itemsPerPage: 10 }
) => {
  const [state, setState] = useState(initialValue);

  const itemsFrom = state.currentPage * state.itemsPerPage;
  const itemsTo = itemsFrom + state.itemsPerPage;

  const handleFilter = (item) => {
    if (!state.filter) {
      return true;
    }
    const regExp = new RegExp(state.filter.split(/\s+/g).join("|"), "gi");
    return regExp.test(item.name) || regExp.test(item.surname);
  };

  const getSortFunction = () => {
    const { 
      propName: fieldName,
      fieldType = state.sort.sortType,
      isReversed = state.sort.isReversed
    } = state.sort;
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
  };

  const setFilter = (string) => {
    setState({ ...state, filter: string, currentPage: 0 });
  };

  const setCurrentPage = (string) => {
    setState({ ...state, currentPage: Number(string) });
  };

  const setItemsPerPage = (string) => {
    setState({ ...state, itemsPerPage: Number(string) });
  };

  const filteredData = useMemo(() => data.filter(handleFilter), [
    state.filter,
    data,
  ]);

  const sortedData = state.sort
    ? filteredData.sort(getSortFunction())
    : filteredData;

  const result = sortedData.slice(itemsFrom, itemsTo);
  const { currentPage, itemsPerPage,filter } = state;
  const countOfPages = Math.ceil(filteredData.length / itemsPerPage);

  useEffect(() => {
    if (state.currentPage >= countOfPages && data.length) {
      setState((prev) => ({ ...prev, currentPage: countOfPages - 1 }));
    }
  }, [countOfPages, data.length, state.currentPage]);

  return {
    result,
    setSort,
    setFilter,
    setCurrentPage,
    setItemsPerPage,
    countOfPages,
    currentPage,
    itemsPerPage,
    filter,
  };
};

export default useTable;
