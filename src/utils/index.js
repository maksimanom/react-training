export const deleteTask = (listData, id) => {
  const firstPart = listData.slice(0, id);
  const secondPart = listData.slice(id + 1, listData.length);
  const finishedArray = firstPart.concat(secondPart);
  finishedArray.map((item, index) => {
    item.id = index;
  });
  return finishedArray;
};

export const changeTask = (listData, id, text) => {  
  listData.map((item)=>{
    if (item.id===id){
      item.text = text;
    }
  })
  return listData;
};

export const changePerform = (listData, id) =>{ 
  listData.map((item) => {
    if (item.id === id) {
      item.done = !item.done;
    }
  }); 
  return listData;
}
