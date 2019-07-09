import React from 'react';

const Lesson7Theory = (()=> {
    const [option, setOption] = React.useState();
    const handleRadioChange = ((event)=>{
        setOption(event.target.value);
    });
    return(
        <>
        <p>Your choise: {option}</p>
        <input type="radio" value="option1" checked={option=="option1"} onChange={handleRadioChange} />
        <input type="radio" value="option2" checked={option=="option2"} onChange={handleRadioChange} />
        </>
    )
});


const Lesson7 = (()=>{
    return (
        <Lesson7Theory/>
    )
});

export default Lesson7;