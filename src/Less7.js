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

const Lesson7 = (()=>{
    return (
        <>
        <Task1/>
        <hr></hr>
        <Task2/>
        </>
    )
});

export default Lesson7;