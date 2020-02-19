import React from "react";

import { deleteTask, changeTask, changePerform } from "../../utils";

const CheckBoxChangePerform = ({ name, id, checked, handleChangePerform }) => {
  return (
    <input
      type="checkbox"
      name={name}
      id={id}
      defaultChecked={checked}
      onClick={handleChangePerform}
    />
  );
};

const TaskView = ({ listData, setList, item }) => {
  const [visibleEditInput, setVisibleEditInput] = React.useState(false);
  const editRef = React.useRef("");

  const handleDeleteTask = () => {
    const modifiedArray = deleteTask(listData, item.id);
    setList(modifiedArray);
  };

  const handleChangeTask = (e) => {
    if (visibleEditInput && editRef.current.value !== "") {
      const modifiedArray = changeTask(
        listData,
        item.id,
        editRef.current.value
      );
      setList(modifiedArray);
    }
    setVisibleEditInput(!visibleEditInput);
  };

  const handleChangePerform = () => {
    const modifiedArray = changePerform(listData, item.id);
    setList(modifiedArray);
  };

  return (
    <tr>
      <td>{item.id}</td>
      <td
        style={
          item.done
            ? { textDecoration: "line-through" }
            : { fontWeight: "bold" }
        }
      >
        {item.text}
      </td>
      <td>
        <CheckBoxChangePerform
          name={item.id}
          id={item.id}
          checked={item.done}
          handleChangePerform={handleChangePerform}
        />
      </td>
      <td>
        <button name="changeTask" onClick={handleChangeTask}>
          Change
        </button>
        {visibleEditInput ? (
          <input type="text" name="editTask" ref={editRef} />
        ) : null}
      </td>
      <td>
        <button onClick={handleDeleteTask} name="deleteTask">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TaskView;
