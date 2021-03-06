import React from 'react';
const Task1 = (()=>{
  const textDeco = {
    textDecoration: "line-through"
  }
  const [elements, setElements] = React.useState([{ elem: "q", checked: false }, { elem: "w", checked: false }, { elem: "e", checked: false }, { elem: "r", checked: false }, { elem: "t", checked: false }, { elem: "y", checked: false}]);
  const onCheckboxChange = (item)=>{
    item.checked=!item.checked;
    setElements(elements.concat([]))
  }
  return(
    <ul>
      {elements.map((item, index)=>{
        return <li key={index} style={item.checked ? textDeco : {}}> <input type="checkbox" value={index} checked={item.checked} onChange={()=>onCheckboxChange(item)}/> {item.elem}</li>
      })}
    </ul>
  )
})
const Task2 = (() => {
  const [employee, setEmployee] = React.useState([
    {name: "Max", surname: "Kozoriz", rate: 1000, checked: false },
    {name: "KekName", surname: "KekSurname", rate: 2000, checked: false },
    {name: "LolName", surname: "LolSurname", rate: 3000, checked: false },
    {name: "Ivan", surname: "Ivanov", rate: 3500, checked: false }
  ]);
  const [sum, setSum] = React.useState(0);

  const sumCalc = ()=>{
    const rateArray = employee.map((item, index)=>{
      if (item.checked===true){
        return item.rate;
      }else{
        return 0
      }
    });
    const sumOfCheckedElements = rateArray.reduce((a, b) => a + b, 0);
    setSum(sumOfCheckedElements)
  }
  const handleCheckboxChange = (item)=>{
    item.checked = !item.checked;
    setEmployee(employee.concat([]));
    sumCalc();
  }


  return(
    <table>
      <thead>
        <tr>
          <th>Employers info</th>
        </tr>
        <tr>
          <td>Name</td>
          <td>Surname</td>
          <td>Rate</td>
        </tr>
      </thead>
      <tbody>
        {employee.map((item, index) => (
          <tr key={index} >
          <td>
            {item.name}
          </td>
          <td>
            {item.surname}
          </td>
          <td>
            {item.rate}
          </td>
            <td>
              <input type="checkbox" value={item.id} onChange={()=>handleCheckboxChange(item)}/> {item.checked ? "checked" : "no"}
            </td>
        </tr>
         ))}
      </tbody>
      <tfoot>
        <tr style={{textAlign: "right"}}>
          <td colSpan={3}>
            Sum: {sum}
          </td>
        </tr>
      </tfoot>
    </table>
  )
})

//************************************ */
const texts = ['first', 'second', 'third', 'fourth', 'fifth'];
const Task3 = ({array, handleDelete, editedItem})=>{
 

  const [isVisibleState, setIsVisibleState] = React.useState([
    {id: 0, isVisible1: false},
    {id: 1, isVisible1: false},
    {id: 2, isVisible1: false},
    {id: 3, isVisible1: false},
    {id: 4, isVisible1: false}
  ]);
   const [inputValue, setInputValue] = React.useState("");
  const handleInputChange = (event, item) => {
    console.log(item);
  }
  console.log(isVisibleState);
  const handleCLick = (event, item, index)=>{
    console.log(index);
    if (isVisibleState[index].isVisible1) {
      editedItem(index, inputValue);
      isVisibleState[index].isVisible1 = !isVisibleState[index].isVisible1;
      setIsVisibleState(isVisibleState.concat([]));
      return
    }
    //setInputValue(item);
    isVisibleState[index].isVisible1 =  !isVisibleState[index].isVisible1;
    setIsVisibleState(isVisibleState.concat([]));
  }
  const handleChange = (event)=>{
    setInputValue(event.target.value)
  }
  return(
    <table>
      <tbody>
        {array.map((item, index)=>(
          <tr key={index}>
            <td>
              {item}
            </td>
            <td>
              {isVisibleState[index].id === index && isVisibleState[index].isVisible1===true ? 
              <input type="text" id={index} value={inputValue} onChange={(event) => handleChange(event)} />
              :""
              }
            </td>
            <td>
              <button type="submit" onClick={(event)=>handleCLick(event, item, index)}>Change text</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
//*********************************************************** */
const routes = ['Kyiv-London', 'Kyiv-Vashington', 'Kyiv-Moscow', 'Kyiv-Madagaskar', 'Kyiv-Keln'];
const Task7 = ({routes, showRouteInApp})=>{
  const [selectedRadio, setSelectedRadio] = React.useState();
  const handleCLick= (event)=>(
    setSelectedRadio(event.target.value),
    showRouteInApp(event.target.value)
  )
  return(
    <>
    {routes.map((item, index)=>{
      return <div key={index}> {item} <input type="radio" value={item} name="route" onClick={handleCLick}/> </div>
    })}
    <p>In function: {selectedRadio}</p>
    </>
  )
}
// ****************************
// ****************************
const notes = [
  { id: 1, text: "111111", time: "10:10:10" },
  { id: 2, text: "222222", time: "20:20:20" },
  { id: 3, text: "333333", time: "30:30:30" }
];
const Task8 = ({notes, addNote, changeNote, deleteNote})=>{
  const lastNote = notes[notes.length-1];
  let lastId = 1;
  if (lastNote===undefined){
    lastId = 1;
  }else{
    lastId = lastNote.id;
  }
  const [numberOfNote, setNumberOfNote] = React.useState(lastId+1);
  const ref = React.useRef();
  const handleClick = ()=>{
    setNumberOfNote(numberOfNote+1);
    addNote(numberOfNote, ref.current.value, nowTime());
  }
  const nowTime = ()=>{
    let date = new Date();
    const ss = String(date.getSeconds()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    const hh = date.getHours();
    return hh + ':' + mm + ':' + ss;
  }
  const NotesView = ({item, index})=>{
    const [isVisible, setIsVisible] = React.useState(false);
    const refChange = React.useRef();
    const handleClick = (event)=>{
      const target = event.target;
      if (target.name==="changeButton"){
        setIsVisible(!isVisible)
      }
      if (isVisible && target.name==="changeButton"){
        changeNote(item.id, refChange.current.value, nowTime());
        return 0
      }
      if (target.name==="deleteButton"){
        deleteNote(index);
        return 0
      }
    }
    return(
      <>
        <div key={index}>
          <h2>Заметка {item.id}
            <button name="deleteButton" onClick={handleClick}>Delete</button> |
            <button name="changeButton" onClick={handleClick}>Change</button>
            {isVisible ? <input type="text" ref={refChange}/> : "" }
          </h2>
          <h3>{item.text}</h3>
          <h6>{item.time}</h6>
          <hr />
        </div>       
      </>
    )
  }
  return(
    <>
    <textarea ref={ref}/>
    <input type="hidden" value="User1"/>
    <button onClick={handleClick}>Push</button>
    <br />
    {notes.map((item, index)=>{
      return (
        <NotesView item={item} index={index} key={index}/>
      )
    })}
    </>
  )
}
// APP APP APP APP APP APP APP APP APP APP APP APP APP APP APP APP APP APP
const Task8App = ()=>{
  const [notesArray, setNotesArray] = React.useState(notes);
  const addNote = (id, text, nowTime)=>{
    let obj = {id: id, text: text, time: nowTime};
    notesArray.push(obj);
    setNotesArray(notesArray.concat([]));
  }
  const changeNote = (id, text, nowTime)=>{
    let numInNotesArray = -1;
    notesArray.map((item, index)=>{
      if (item.id===id){
        numInNotesArray = item.id;
        notesArray[index] = {id: id, text: text, time: nowTime};
        console.log(numInNotesArray);
      }
    })
    console.log('numInNotesArray');
    console.log(numInNotesArray);
    //notesArray[numInNotesArray-1]={id: id, text: text, time: nowTime};
    setNotesArray(notesArray.concat([]));
  }
  const deleteNote = (id)=>{
    const firstPart = notesArray.slice(0, id);
    const secondPart = notesArray.slice(id+1, notesArray.length);
    const finishedArray = firstPart.concat(secondPart);
    setNotesArray(finishedArray);
  }

  return(
    <>
      <Task8
        notes={notesArray}
        addNote={(id, text, nowTime) => addNote(id, text, nowTime)}
        changeNote={(id, text, nowTime) => changeNote(id, text, nowTime)}
        deleteNote={(id) => deleteNote(id)}/>
      {console.log(notesArray)}
    </>
  )
}
//********************************* */

// **********************************************************
const Lesson8 = (() => {
  
  return(
    <>
     <Task8App />
    </>
  )
})
export default Lesson8;
