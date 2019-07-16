import React from 'react';

const TableWithTexts = ({arrayOfTexts, editItem})=>{
  
  const Trs = ({ index, value, editItem }) => {
    const [inputValue, setInputValue] = React.useState(value);
    const [isVisible, setIsVisible] = React.useState(false);

    const handleInputChange = (event) => (
      setInputValue(event.target.value)
    )
    const handleCLick = (event, index, value) => {
      setIsVisible(!isVisible);
      if(isVisible){       
        editItem(index, inputValue);
      }
    }

    return (
      <tr key={index}>
        <td>{value}</td>
        <td>{isVisible ? <input type="text" value={inputValue} onChange={handleInputChange} /> : ""}</td>
        <td><button onClick={(event) => handleCLick(event, index, value)}>Change</button></td>
      </tr>
    )
  }

  return(
    <table>
      <thead>

      </thead>
      <tbody>        
        {arrayOfTexts.map((item, index)=>{
        return (
          <Trs key={index} index={index} value={item} editItem={editItem}></Trs>
          )
        })}
      </tbody>
    </table>
  )
}

const texts = ['first', 'second', 'third', 'fourth', 'fifth'];
const App=()=>{
  const [textState, setTextState] = React.useState(texts);
  const setEdited = (index, item)=>{
    textState[index] = item;
    setTextState(textState.concat([]));
  }
  return(
    <>
     {/* <TableWithTexts arrayOfTexts={textState} editItem={(index, item)=>setEdited(index, item)}/> */}
    <TableWithTexts arrayOfTexts={textState} editItem={(index, item) => setEdited(index, item)}/>
    </>
  )
}

export default App;
