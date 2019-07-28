import React from 'react';
const users = [
  { name: "Maksym", surname: "Kozoriz", age: 21 },
  { name: "Alex", surname: "Kostenko", age: 20 },
  { name: "Ivan", surname: "Ivanov", age: 20 }
];
const UserView = ({ user, showMessage1, num }) => {
  const handleClick = ()=>(
    showMessage1(num+1)
  )
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>{user.age}</td>
      <td><button onClick={handleClick}>showAlert</button></td>
    </tr>
  )
}
const Task1and2and3 = () => {
  const showMessage = (msg)=>{
    alert(msg);
  };
  const [userArray, setUserArray] = React.useState(users);
  return (
    <>
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>SurName</td>
          <td>Age</td>
        </tr>
      </thead>
      <tbody>
        {userArray.map((item, index) => (
          <UserView key={index} user={item} showMessage1={(msg) =>showMessage(msg)} num={index}/>
        ))}
      </tbody>
    </table>
    </>
  )
}


const Lesson10 = ()=>{

  return(
    <>
      <Task1and2and3 />
    </>
  )
}

export default Lesson10;
