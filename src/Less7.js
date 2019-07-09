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


const Lesson7 = (()=>{
    return (
        <Task1/>

    )
});

export default Lesson7;