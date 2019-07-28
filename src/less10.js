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
const Task1and2and3and4and5 = () => {
  const [userArray, setUserArray] = React.useState(users);

  const deleteUser = (numOfUserToDelete)=>{
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

const TextsView = ({ textsArray, changeText})=>{ 

  const LineWithText = ({item, index})=>{
    let ref = React.useRef();
    const [isVisibleInput, setIsVisibleInput] = React.useState(false);
    const [isVisibleButton, setIsVisibleButton] = React.useState(true);
    const handleClick = () => (
      setIsVisibleInput(!isVisibleInput),
      setIsVisibleButton(!isVisibleButton)
    )
    const handleBlur = (event) =>(
      setIsVisibleInput(!isVisibleInput),
      setIsVisibleButton(!isVisibleButton),
      console.log(index),
      console.log(ref.current.value),
      changeText(index, ref.current.value)
    )

    return(
      <>
        {item}
        {isVisibleButton ? <button onClick={handleClick}>Change</button> : ""}
        {isVisibleInput ? <input ref={ref} onBlur={handleBlur}/> : ""}
      </>
    )
  }
  return(
    <>
    {textsArray.map((item, index)=>{
      return(
        <li key={index} style={{maxWidth: "250px", display: "flex", justifyContent: "space-between"}}>
            <LineWithText item={item} index={index} />
        </li>
      )
    })}
    </>
  )
}
const texts = ["first", "second", "third", "fourth", "fifth"];

const Task6 = ()=>{
  const [textsArray, setTextsArray] = React.useState(texts);
  const changeText = (num, text)=>{
    textsArray[num] = text;
    setTextsArray(textsArray.concat([]));
  }
  return(
    <ul>
      <TextsView textsArray={textsArray} changeText={(num, text) => changeText(num, text)} />
    </ul>
  )
}

const Lesson10 = ()=>{

  return(
    <>
      <Task1and2and3and4and5 />
      <br />
      <hr />
      <br />
      <Task6 />

    </>
  )
}

export default Lesson10;
