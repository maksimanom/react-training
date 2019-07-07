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



