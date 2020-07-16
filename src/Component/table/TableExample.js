import React, { useState } from "react";

import Table from "./index";

const TableExample = () => {
  const [usersArray, setUsersArray] = useState([]);

  const headerData = [
    { label: "Name", propType: "string", propName: "name" },
    { label: "Surname", propType: "string", propName: "surname" },
    { label: "Age", propType: "number", propName: "age" },
    { label: "Currently working", propType: "boolean", propName: "working" },
  ];

  return (
    <Table
      usersArray={usersArray}
      headerData={headerData}
      setUsersArray={setUsersArray}
    />
  );
};
export default TableExample;
