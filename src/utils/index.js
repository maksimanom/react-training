import ls from "local-storage";

export const deleteTask = id => {
  const listData = JSON.parse(ls.get("listData"));
  const finishedArray = listData.filter(item => {
    if (item.id !== id) {
      return item;
    }
  });
  return finishedArray;
};

export const changeTask = (id, text) => {
  let listData = JSON.parse(ls.get("listData"));
  listData.map(item => {
    if (item.id === id) {
      item.text = text;
    }
    return null;
  });
  return listData;
};

export const changePerform = id => {
  let listData = JSON.parse(ls.get("listData"));
  listData.map(item => {
    if (item.id === id) {
      item.done = !item.done;
    }
    return null;
  });
  return listData;
};

export const addTask = newTaskText => {
  if (newTaskText !== "") {
    let listData = JSON.parse(ls.get("listData"));
    let id = 0;
    if (listData !== undefined && listData !== null && listData.length >= 1) {
      id = listData[listData.length - 1].id + 1;
    }
    const newTaskObj = { id: id, text: newTaskText, done: false };
    listData.push(newTaskObj);
    return listData;
  }
  return null;
};
