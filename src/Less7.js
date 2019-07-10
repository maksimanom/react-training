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
  const [valueSelect, setValueSelect] = React.useState("Che");
  const handleSelectChange = ((event)=>{
    return(setValueSelect(event.target.value))
  });

  return(
    <>
    <select onChange={handleSelectChange} value={valueSelect}>
      <option value="Che">Che</option>
      <option value="Kyiv">Kyiv</option>
      <option value="Lviv">Lviv</option>
      <option value="Odessa">Odessa</option>
    </select>
    <p>{valueSelect}</p>
    </>
  )
})
const Task5 = (()=>{
  const [citys, setCitys] = React.useState(['Che','Kyiv','Lviv','Odessa']);
  const [valueSelect, setValueSelect] = React.useState("Che");
  const handleSelectChange = ((event)=>{
    setValueSelect(event.target.value)
  })
  const select = ((citys)=>{
    const option = (citys.map((item, index)=>{
      return <option key={index} name={item}>{item}</option>
    }))
    return <select onChange={handleSelectChange} value={valueSelect}>
      {option}
    </select>
  })
  return(
    <>
    {select(citys)}
    <p>{valueSelect}</p>
    </>
  )
})
const Task6 = (()=>{
  const [selectedValue, setSelectedValue] = React.useState();
  const handleRadioChange = ((event)=>{
    setSelectedValue(event.target.value)
  })
  return(
    <>
    <input name="lorem" type="radio" value="1" onChange={handleRadioChange}/>
    <input name="lorem" type="radio" value="2" onChange={handleRadioChange}/>
    <input name="lorem" type="radio" value="3" onChange={handleRadioChange}/>
    <p>{selectedValue}</p>
    </>
  )
})
const Task7 = (()=>{
  const [texts, setTexts] = React.useState(["1", "2"]);
  const [enteredText, setEnteredText] = React.useState();
  const handleTextareaChange = ((event)=>{
    setEnteredText(event.target.value);
  })
  const handleClick = ((event)=>{
    const text = enteredText;
    const arrayOfTexts = texts.slice(0);
    arrayOfTexts.push(text);
    setTexts(arrayOfTexts);
  })
  return(
    <>
    <textarea name="text" onChange={handleTextareaChange}></textarea>
    <button onClick={handleClick}>Add text</button>
    {texts.map((item, index)=>{
      return <p key={index}>{item}</p>
    })}
    </>
  )
})
const Task8 = (()=>{
  const [colors, setColors] = React.useState(['red','blue','green','grey']);
  const [valueSelect, setValueSelect] = React.useState("red");
  const handleSelectChange = ((event)=>{
    setValueSelect(event.target.value)
  })
  const select = (()=>{
    const options = colors.map((item, index)=>{
      return <option key={index} value={item}>{item}</option>
    })
    return(
      <select value={valueSelect} onChange={handleSelectChange}>
        {options}
      </select>
    )
  })
  return(
    <>
      {select(colors)}
      <p style={{color: valueSelect}}>Some text</p>
    </>
  )
})
const Task9 = (()=>{
  const [checked, setChecked] = React.useState("Marked");
  const handleSelectChange = ((event)=>{
    const value=event.target.value;
    if (value==="Marked") return setChecked("Marked");
    else return setChecked("NotMarked");
  })
  return(
    <>
    <select name="checkedOrNot" value={checked} onChange={handleSelectChange}>
      <option value="Marked">Отмечено</option>
      <option value="NotMarked">Не отмечено</option>
    </select>
    <input type="checkbox" checked={checked==="Marked"}></input>
    </>
  )
})
const Task10 = (()=>{
  const [countrySelected, setCountrySelected] = React.useState("Ukraine");
  const handleSelectChange = ((event)=>{
    setCountrySelected(event.target.value);
  })
  return(
    <>
    <select value={countrySelected} onChange={handleSelectChange}>
      <option value="Ukraine">Ukraine</option>
      <option value="GreatBritain">Great Britain</option>
      <option value="USA">USA</option>
    </select>
    <p style={{display: countrySelected==="Ukraine"? "block" : "none"}}>Kyiv</p>
    <p style={{display: countrySelected==="GreatBritain"? "block" : "none"}}>London</p>
    <p style={{display: countrySelected==="USA"? "block" : "none"}}>Washington</p>
    </>
  )
})
const Task11 = (()=>{
  const [options, setOptions] = React.useState(['kek', 'lol', 'validol']);
  const [inputValue, setInputValue] = React.useState();
  const optionsList = ((options)=>{
    const opt =  options.map((item, index)=>{
      return <option key={index} value={item}>{item}</option>
    })
    return opt 
  })
  const handleClick = (()=>{
    let tmpArray = options.slice(0);
    let lastArray = tmpArray.concat(inputValue);
    setOptions(lastArray);
  })
  const handleInputChange = ((event)=>{
    setInputValue(event.target.value);
  })
  return(
    <>
    <input name="textOfInput" onChange={handleInputChange}></input>
    <button onClick={handleClick}>Add to end of List</button>
    <select>
      {optionsList(options)}
    </select>
    </>
  )
})
const Task12 = (()=>{
  const [isChecked, setIsChecked] = React.useState(false);
  const handleCheckboxChange = ((event)=>{
    setIsChecked(!isChecked);
  })  

  return(
    <>
    <input type="checkbox" onChange={handleCheckboxChange} checked={isChecked}/>
    <input disabled={!isChecked}></input>
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
        <hr></hr>
        <Task5/>
        <hr></hr>
        <Task6/>
        <hr></hr>
        <Task7/>
        <hr></hr>
        <Task8/>
        <hr></hr>
        <Task9/>
        <hr></hr>
        <Task10/>
        <hr></hr>
        <Task11/>        
        <hr></hr>
        <Task12/>
        </>
    )
});

export default Lesson7;