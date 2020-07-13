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

  // TODO add pagination here
  const result = filteredData
    .sort((a, b) => 0)
    .slice(itemsFrom, itemsTo);

  console.log("state", state);
  return {
    result,
    setSort,
    setFilter,
    setCurrentPage,
    setItemsPerPage,
  };
};

export default useTable;
