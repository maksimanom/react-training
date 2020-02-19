import React from "react";
import TaskView from "./taskView";

const ListView = ({ listData, setList }) => {
  console.log("ListView listData", listData);  
  return (
    <table>
      <thead>
        <tr>
          <td>#</td>
          <td>Task</td>
          <td>Checked</td>
          <td>Change</td>
          <td>Delete</td>
        </tr>
      </thead>
      <tbody>
        {listData.map((item, index) => {
          return (
            <TaskView
              listData={listData}
              setList={setList}
              item={item}
              key={index}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ListView;
