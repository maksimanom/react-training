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

const Lesson8 = (()=>{
  return(
    <>
      <Task1 />
      <hr></hr>
    </>
  )
})
export default Lesson8;
