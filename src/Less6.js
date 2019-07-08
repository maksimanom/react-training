import React from 'react';
// THAT WAS TRAINING UNDER (COMMITED), THIS IS TASKS:
const Lesson62 = () => {
	const [value, setValue] = React.useState("");
	const handleChange = (event) => {
		setValue(event.target.value.toUpperCase());
	}
	return(
		<>
			<form>
				<input onChange={handleChange} name="text"/>
			</form>
			<div>
				{value}
			</div>
		</>
	)
}
const Lesson63 = () => {
	const [value, setValue] = React.useState("");
	const todayYear = new Date().getFullYear();
	const handleChange = (event) => {
		setValue(event.target.value);
	}
	return(
		<>
			<form>
				<input onChange={handleChange} name="text" type="number"/>
			</form>
			<div>
				{todayYear - value}
			</div>
		</>
	)
}
const Lesson64 = () => {
	const [values, setValues] = React.useState([]);
	const handleChange = ((event) => {
		setValues(event.target.value.split(/\s+/));
		console.log(values);
	});
	const names = values.splice(0, 3);
	while (names.length < 3) {
    names.push('');
  }
	return(
		<>
			<input name="text" onChange={handleChange}/>
			{names.map((name, index) => <p key={index}>{name}</p>)}
		</>
	)
}
const Lesson65 = () => {
	const [value, setValue] = React.useState("");
	const [stolenText, setStolenText] = React.useState("");
	const handleClick = (event) => {
		setStolenText(value);
		event.preventDefault();
	}
	const handleChange = (event) => {
		return (setValue(event.target.value));
	}	
	return(
		<>
			<form>
				<input name="text" onChange={handleChange}/>
				<button type="submit" onClick={handleClick}>Submit</button>
			</form>
			{stolenText}
		</>
	);
}
const Lesson66 = () => {
	const [number, setNumber] = React.useState([0,0]);
	const [inputSum, setInputSum] = React.useState(0);
	const handleClick = (event) => {
		setInputSum(number[0] + number[1]);
	}
	const handleChange = (event) => {
		if (event.target.name==="firstNum"){
			setNumber(number[0]=parseFloat(event.target.value));
		}
		if (event.target.name==="secondNum"){
			setNumber(number[1]=parseFloat(event.target.value));
		}
	}	
	return(
		<>
			<form>
				<input type="number" name="firstNum" onChange={handleChange} value='0' />
				<input type="number" name="secondNum" onChange={handleChange} value='0'/>
				<br></br>
				<button type="submit" onClick={handleClick}>Check Sum</button>
			</form>
			{inputSum}
		</>
	);
}

const Lesson6 = () => {
	return(
		<>
		{/* LEsson 6, task 1 + task 2 : */}
		<Lesson62/>
		<hr></hr>
		{/* LEsson 6, task 3 : */}
		<Lesson63/> 
		<hr></hr>
		{/* LEsson 6, task 4 : */}
		<Lesson64/> 
		<hr></hr>
		{/* LEsson 6, task 5 : */}
		<Lesson65/> 
		<hr></hr>
		{/* LEsson 6, task 6 : */}
		<Lesson66/> 
		</>
	)
}

export default Lesson6;


// const Lesson6 = () => {
// 	const [items, setItems] = React.useState([1,2,3,4,5]);
// 	const [value, setValue] = React.useState("");
// 	const handleClick = (event) => {
// 		console.log(items);
// 		return (setItems(items.concat({value})));
// 	};
// 	const handleSubmit = (event) => {
// 		event.preventDefault();
// 		return (setItems(items.concat(value)));
// 	};
// 	const handleChange = (event) => {
// 		setValue(event.target.value);
// 		console.log("value = " + value);
// 	};
// 	const list = items.map((item,index) => {
// 		return( <li key={index}> {item} </li> )
// 	});
// 	return(
// 		<>
// 		<ul>
// 			{items.map((item,index) => {
// 				return( <li key={index}> {item} </li> )
// 			})}
// 		</ul>
// 		<form onSubmit={handleSubmit}>
// 			<input name="textToAdd" onChange={handleChange} />
// 			<input type="submit"/>
// 		</form>
// 		</>
// 	);
	
// }



