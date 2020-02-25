import ls from "local-storage";

export const deleteTask = (id) => {
  const listData = JSON.parse(ls.get("listData"));
  const firstPart = listData.slice(0, id);
  const secondPart = listData.slice(id + 1, listData.length);
  const finishedArray = firstPart.concat(secondPart);
  finishedArray.map((item, index) => {
    item.id = index;
  });
  return finishedArray;
};

export const changeTask = (id, text) => {
  let listData = JSON.parse(ls.get("listData"));
  listData.map(item => {
    if (item.id === id) {
      item.text = text;
    }
  });
  return listData;
};

export const changePerform = (id) => {
  let listData = JSON.parse(ls.get("listData"));
  listData.map(item => {
    if (item.id === id) {
      item.done = !item.done;
    }
  });
  return listData;
};

export const addTask = newTaskText => {
  if (newTaskText !== "") {
    let listData = JSON.parse(ls.get("listData"));
    const id = listData[listData.length - 1].id + 1;
    const newTaskObj = { id: id, text: newTaskText, done: false };
    listData.push(newTaskObj);
    return listData;
  }
  return 0;
};
