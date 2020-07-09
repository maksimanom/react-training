import React from "react";
import { users as usersArray } from "../../utils/constants";

const useTable = () => {
  const usersNum = 5;
  const [pageNum, setpageNum] = React.useState(0);
  const [users, setUsers] = React.useState(usersArray);

  

  return {
    users,
  };
};
export default useTable;
