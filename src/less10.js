import React from 'react';
const users = [
  { name: "Maksym", surname: "Kozoriz", age: 21 },
  { name: "Alex", surname: "Kostenko", age: 20 },
  { name: "Ivan", surname: "Ivanov", age: 20 }
];
const UserView = ({ user, showMessage }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>{user.age}</td>
      <td><button onClick={showMessage(user.name)}>showAlert</button></td>
    </tr>
  )
}
const Task1and2 = () => {
  const showMessage = (msg)=>{
    alert(msg);
  }
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
          <UserView user={item} key={index} showMessage={(msg)=>showMessage(msg)}/>
        ))}
      </tbody>
    </table>
      {showMessage}
    </>
  )
}


const Lesson10 = ()=>{

  return(
    <>
    <Task1and2 />
    </>
  )
}

export default Lesson10;
