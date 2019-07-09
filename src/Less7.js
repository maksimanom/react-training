import React from 'react';

const Task1 = (()=>{
    const [value, setValue] = React.useState();
    const handleTextareaChange = ((event)=>{
        setValue(event.target.value);
    })
    return(
        <>
        <textarea onChange={handleTextareaChange}></textarea>
        <p>{value}</p>
        </>
    )
})
const Task2 = (()=>{
    const [checked, setChecked] = React.useState(false);
    const handleCheckboxChange = (()=>{
        setChecked(!checked);
    })
    return(
        <>
        <input type="checkbox" name="input1" onChange={handleCheckboxChange}/>
        <p>{checked ? "checked" : "not cheked"}</p>
        </>
    )
})
const Task3 = (()=>{
  const [checked, setChecked] = React.useState(false);
  const handleCheckboxChange = (()=>{
      setChecked(!checked);

  });

  return(
      <>
      <input type="checkbox" name="input1" onChange={handleCheckboxChange}/>
      <p id="par" style={{display: checked ? "block" : "none"}}>Text is showed</p>
      </>
  )
})
const Task4 = (()=>{

  return(
    <>

    </>
  )
})

const Lesson7 = (()=>{
    return (
        <>
        <Task1/>
        <hr></hr>
        <Task2/>
        <hr></hr>
        <Task3/>
        <hr></hr>
        <Task4/>
        </>
    )
});

export default Lesson7;