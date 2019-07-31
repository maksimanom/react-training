// Дан массив с работниками.У каждого работника есть имя, фамилия, количество отработанных дней и зарплатная ставка за день.
// Выведите этих работников на экран в виде таблицы.Сделайте так, чтобы в последней колонке автоматически рассчитывалась зарплата
// работника(количество отработанных дней умножить на ставку).Сделайте так, чтобы количество дней и ставка выводились в виде инпутов
// Если поредактировать эти инпуты - зарплата также должна поменяться.Под таблицей также выведите суммарную зарплату всех работников.
import React from "react";
import './scss/style.scss'

const employeeFromServer = [
  {name: "Maksym", surname: "Kozoriz", daysWorked: 0, rate: 0},
  {name: "Alex", surname: "Kostenko", daysWorked: 0, rate: 0},
  {name: "Ivan", surname: "Ivanov", daysWorked: 0, rate: 0},
  {name: "Dmitriy", surname: "Perloviy", daysWorked: 0, rate: 0},
  {name: "Oleg", surname: "Novitsky", daysWorked: 0, rate: 0},
];

const EmployeeView = ({ employee, num, changeEmployeeData})=>{
  const refDaysWorked = React.useRef(0);
  const refRate = React.useRef(0);
  const handleInputChange = ()=>{
    if (refDaysWorked.current.value === 0 || refDaysWorked.current.value === NaN || refDaysWorked.current.value === "") {
      changeEmployeeData(num, 0, parseFloat(refRate.current.value));
      return 0
    }
    if (refRate.current.value === 0 || refRate.current.value === NaN || refRate.current.value === "") {
      changeEmployeeData(num, parseFloat(refDaysWorked.current.value), 0);
      return 0
    }
    changeEmployeeData(num, parseFloat(refDaysWorked.current.value), parseFloat(refRate.current.value));
  }

  return(
    <tr>
      <td>{employee.name}</td>
      <td>{employee.surname}</td>
      <td> 
        <input type="number" name="daysWorked" id={"daysWorked"+employee.name} ref={refDaysWorked} onChange={handleInputChange}/>
      </td>
      <td> <input type="number" name="rate" id={"rate" + employee.name} ref={refRate} onChange={handleInputChange}/> </td>
      <td>{employee.daysWorked*employee.rate}</td>
    </tr>
  )
}

const App1 = ()=>{
  const [employeeArray, setEmployeeArray] = React.useState(employeeFromServer);

  const changeEmployeeData = (num, newDaysWorked, newRate)=>{
    employeeArray[num] = { name: employeeArray[num].name, surname: employeeArray[num].surname, daysWorked: newDaysWorked, rate: newRate};
    setEmployeeArray(employeeArray.concat([]));
  }
  const SumTotal = ()=>{
    // let sum = (acc, curV) => parseFloat(acc.rate) + parseFloat(curV.rate);
    // let sumTotal = employeeArray.reduce(sum);
    let sumTotal=0;
    employeeArray.map((item, index)=>{
      sumTotal+=item.rate*item.daysWorked;
    })
    return sumTotal    
  }

  return(
    <table>
      <thead>
        <tr className="headerTable">
          <td>Name</td>
          <td>Surname</td>
          <td>Days Worked</td>
          <td>Rate</td>
          <td>Total</td>
        </tr>
      </thead>
      <tbody>
        {employeeArray.map((item, index)=>{
          return( <EmployeeView
            key={index}
            employee={item}
            num={index}
            changeEmployeeData={(num, newDaysWorked, newRate) => changeEmployeeData(num, newDaysWorked, newRate)}/>
          )
        })}
      </tbody>
      <tfoot>
        <tr style={{ color: "#dedede"}}>
          <td>Name</td>
          <td>Surname</td>
          <td>Days Worked</td>
          <td>Rate</td>
          <td style={{color: "red"}}> <SumTotal /> </td>
        </tr>
      </tfoot>
    </table>
  )
}
export default App1
