import React from 'react';
import Lesson5 from './less5';
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
	const numOfInputs = 2;
	const elements = new Array(numOfInputs); // создает массив на количевство элементов numOfInputs
  	const elements2 = elements.fill(null); //заполняет массив пустыми елементами
  	const elements3 = elements2.map((value, index) => index); // заполняет массив index-ми
	const [number, setNumber] = React.useState([]);
	const [inputSum, setInputSum] = React.useState(0);
	const handleClick = (event) => {
		let summ = number.reduce((accumulator, currentValue) => {
			return parseFloat(accumulator) + parseFloat(currentValue);
		});
		setInputSum(summ);
	}
	const handleChange = (event) => {
		let value = event.target.value;
		let indexOfElem = event.target.name;
		let newArray = number.slice(0);
		newArray[indexOfElem] = value;
		setNumber(newArray);
	}	
	return(
		<>
			{elements3.map( (index) => {
				return (<input key={index} name={index} onChange={handleChange} type="text"/>)
			})}
			<br></br>
			<input type="submit" onClick={handleClick}/>
			{inputSum}
		</>
	);
}
const Lesson67 = () => {
	const numOfInputs = 3;
	const elements = new Array(numOfInputs); // создает массив на количевство элементов numOfInputs
  	const elements2 = elements.fill(null); //заполняет массив пустыми елементами
  	const elements3 = elements2.map((value, index) => index); // заполняет массив index-ми
	const [number, setNumber] = React.useState([]);
	const [inputSum, setInputSum] = React.useState(0);
	const handleClick = (event) => {
		let summ = number.join(" ");
		setInputSum(summ);
	}
	const handleChange = (event) => {
		let value = event.target.value;
		let indexOfElem = event.target.name;
		let newArray = number.slice(0);
		newArray[indexOfElem] = value;
		setNumber(newArray);
	}	
	return(
		<>
			{elements3.map( (index) => {
				return (<input key={index} name={index} onChange={handleChange} type="text"/>)
			})}
			<br></br>
			<input type="submit" onClick={handleClick}/>
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
		<hr></hr>
		{/* LEsson 6, task 6 : */}
		<Lesson67/> 		
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



