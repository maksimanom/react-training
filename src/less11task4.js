import React from "react";
import './scss/style.scss';

let listFromServer = [
  {id: 0, text: "Learn JS", done: false},
  {id: 1, text: "Visit University", done: false},
  {id: 2, text: "Read React docs", done: false},
];
const styleDoneTask = {
  textDecoration: "line-through"
}

const ViewList = ({ listArray, changeDoneTask, deleteTask})=>{

  const handleClick = (event, id)=>{
    if (event.target.name ==='changeDone'){
     changeDoneTask(event.target.id);
     return 0
    }
    if (event.target.name === 'deleteTask') {
      deleteTask(id);
      return 0
    }
  }

  return(
    <table>
      <tbody>
        {listArray.map((item, index) => {
          return(
          <tr key={index}>
            <td>
              {item.id+1}
            </td>
            <td>
              {/* { item.done ?
                <span>item.text</span>
                : <span >item.text</span>
              } */}
                <span style={!item.done ? {fontWeight: "bold"} : styleDoneTask}>{item.text}</span>
            </td>
            <td>
              <input type="checkbox" name="changeDone" id={item.id} onClick={handleClick}/>
            </td>
            <td>
              <button name="deleteTask" onClick={(event)=>handleClick(event, item.id)}>Delete</button>
            </td>
          </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const App4 = ()=>{
  const [toDoList, setToDoList]=React.useState(listFromServer);
  const addTaskInputkRef = React.useRef();

  const handleClick = ()=>{
    let id = toDoList[toDoList.length-1].id+1;
    let text = addTaskInputkRef.current.value;
    let tmpObj={id: id, text: text, done: false};
    toDoList.push(tmpObj);
    setToDoList(toDoList.concat([]));
  }

  const changeDoneTask = (id)=>{    
    toDoList.map((item, index)=>{      
      if (item.id===parseInt(id)){        
        item.done=!item.done;
        setToDoList(toDoList.concat([]));
        return 0
      }
    })
  }

  const deleteTask = (id) =>{
    let num = -1;
    toDoList.map((item, index)=>{
      if(item.id===id){        
        num=index;
        return 0
      }
    })
    const firstPart = toDoList.slice(0,num);
    const secondPart = toDoList.slice(num+1,toDoList.length);
    const finishedArray = firstPart.concat(secondPart);
    finishedArray.map((item, index) =>{
      item.id=index
    });
    setToDoList(finishedArray);
  }
  console.log(toDoList);
  
  return(
    <>
      <ViewList
        listArray={toDoList}
        changeDoneTask={(id, done) => changeDoneTask(id, done)}
        deleteTask={(id) => deleteTask(id)}
      />
      <input type="text" ref={addTaskInputkRef} style={{marginTop: "30px"}}/><button onClick={handleClick}>Add task</button>
    </>
  )
}
export default App4
