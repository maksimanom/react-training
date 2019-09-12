import React from 'react';
const users = [
  {name: "Maksym", surname: "Kozoriz", age: 21},
  {name: "Alex", surname: "Kostenko", age: 20},
  {name: "Ivan", surname: "Ivanov", age: 20}
];
const UserView = ({user})=>{  
  return(
    <tr>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>{user.age}</td>
    </tr>
  )
}
const Lesson9 = ()=>{
  const [userArray, setUserArray] = React.useState(users);
  return(
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
          <UserView user={item} key={index} />
        ))}
      </tbody>
    </table>
  )
}
export default Lesson9;
