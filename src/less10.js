import React from 'react';
const users = [
  { name: "Maksym", surname: "Kozoriz", age: 21 },
  { name: "Alex", surname: "Kostenko", age: 20 },
  { name: "Ivan", surname: "Ivanov", age: 20 }
];
const UserView = ({ user, deleteUser, num }) => {
  const handleClick = ()=>(
    deleteUser(num)
  )
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>{user.age}</td>
      <td><button onClick={handleClick}>Delete User</button></td>
    </tr>
  )
}
const Task1and2and3 = () => {
  const [userArray, setUserArray] = React.useState(users);

  const deleteUser = (numOfUserToDelete)=>{
    console.log(numOfUserToDelete);
    let firstArray = userArray.slice(0, numOfUserToDelete);
    let secondArray = userArray.slice(numOfUserToDelete+1, userArray.length);
    let finishedArray = firstArray.concat(secondArray);
    setUserArray(finishedArray);
  };

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
          <UserView key={index} user={item} deleteUser={(numOfUserToDelete) => deleteUser(numOfUserToDelete)} num={index}/>
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
