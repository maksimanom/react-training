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

const products = [
  {name: "apple", price: 10, quantity: 5}, 
  {name: "banaba", price: 23, quantity: 7}, 
  {name: "orange", price: 17, quantity: 6}, 
  {name: "meat", price: 99, quantity: 10}, 
  {name: "cheese", price: 45, quantity: 2}, 
];
const styleTd = {
  width: "100px"
};
const ProductsView = ({product, total, num, deleteItem})=>{
  const handleClick = ()=>{
    deleteItem(num);
  }
  return(
    <tr>
      <td style={ styleTd }> {product.name}</td>
      <td style={styleTd}> {product.price}</td>
      <td style={styleTd}> {product.quantity}</td>
      <td style={styleTd}> {total(product.quantity, product.price)}</td>
      <td style={styleTd}> <button onClick={handleClick}>Delete</button> </td>
    </tr>
  )
}
const ProductsSumTotal = ({productsArr1})=>{
  console.log("productsArr1 in ProductsSumTotal:::");
  console.log(productsArr1);
  // let products2 = [{ name: "kek", price: 10 }, { name: "lol", price: 10.5 }, { name: "arbidol", price: 10.25}];
  // let total = products2.reduce((accumulator, currentValue) => {
  //   console.log(accumulator.price);
  //   console.log(currentValue.price);
    
  //   return (parseFloat(accumulator.price) + parseFloat(currentValue.price));
  // });
  let total = 0;
  productsArr1.map((item, index)=>{
    total += item.price*item.quantity;
  })
  return(
    <h3>
      {total}
    </h3>
  )
}
const Task7and8and9 = ()=>{
  const [productsArray, setProductsArray] = React.useState(products);
  const [fieldsAreVisible, setFieldsAreVisible] = React.useState(false);
  const nameRef = React.useRef();
  const priceRef = React.useRef();
  const quantityRef = React.useRef();
  const sumOfEachProduct = (quantity, price)=>{
    return quantity*price
  };
  const deleteItem = (indexofItem)=>{
    let firstArray = productsArray.slice(0, indexofItem);
    let secondArray = productsArray.slice(indexofItem+1, productsArray.length);
    let finishedArray = firstArray.concat(secondArray);
    setProductsArray(finishedArray);
  }
  const addProduct = ()=>{
    setFieldsAreVisible(!fieldsAreVisible);
    if (fieldsAreVisible){
      let obj = {name: nameRef.current.value, price: priceRef.current.value, quantity: quantityRef.current.value};
      setProductsArray(productsArray.concat(obj));
    }
  }
  return(
    <>
    <div>
      <button onClick={addProduct}>Add Product</button>
        {fieldsAreVisible ? <>
        <input ref={nameRef} placeholder="name of product" />
        <input ref={priceRef} placeholder="price" />
        <input ref={quantityRef} placeholder="quantity"/> </> 
        : ""}
    </div>
    <table>
      <thead>
        <tr>
          <td style={styleTd}>Name</td>
          <td style={styleTd}>Price, grn/kg</td>
          <td style={styleTd}>Quantity</td>
          <td style={styleTd}>Sum</td>
        </tr>
      </thead>
      <tbody>
        {productsArray.map((item, index)=>{
          return(
            <ProductsView
              product={item}
              total={(quantity, price) => sumOfEachProduct(quantity, price)}
              num={index}
              deleteItem={deleteItem}
              key={index}/>
          )
        })}
      </tbody>
      <tfoot>
        <tr>
          <td style={styleTd}></td>
          <td style={styleTd}></td>
          <td style={styleTd}></td>
          <td style={styleTd}><ProductsSumTotal productsArr1={productsArray} /></td>
        </tr>
      </tfoot>
    </table>
    </>
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
      <br />
      <hr />
      <br />
      <Task7and8and9 />

    </>
  )
}

export default Lesson10;
