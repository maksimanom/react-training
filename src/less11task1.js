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

const EmployeeView = ({employee, num})=>{

  return(
    <tr>
      <td>{employee.name}</td>
      <td>{employee.surname}</td>
      <td>{employee.daysWorked}</td>
      <td>{employee.rate}</td>
      <td>{employee.daysWorked*employee.rate}</td>
    </tr>
  )
}

const App = ()=>{
  const [employeeArray, setEmployeeArray] = React.useState(employeeFromServer);

  return(
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Surname</td>
          <td>Days Worked</td>
          <td>Rate</td>
          <td>Total</td>
        </tr>
      </thead>
      <tbody>
        {employeeArray.map((item, index)=>{
          return <EmployeeView key={index} employee={item} num={index}/>
        })}
      </tbody>
      <tfoot>
        <tr style={{ color: "#dedede"}}>
          <td>Name</td>
          <td>Surname</td>
          <td>Days Worked</td>
          <td>Rate</td>
          <td>Total</td>
        </tr>
      </tfoot>
    </table>
  )
}
export default App
