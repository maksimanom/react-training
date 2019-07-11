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
    {name: "LolName", surname: "LolSurname", rate: 3000, checked: false }
  ]);
  const [sum, setSum] = React.useState(0);

  const sumCalc = ()=>{
    const rateArray = employee.map((item, index)=>{
      if (item.checked===true){
        console.log("element taked: " + item.rate);
        return item.rate;
      }
    });
    console.log(rateArray);
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

const Lesson8 = (()=>{
  return(
    <>
      <Task1 />
      <hr></hr>
      <Task2 />
      <hr></hr>
    </>
  )
})
export default Lesson8;
