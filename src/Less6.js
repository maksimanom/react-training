// import React from 'react';

// class Lesson6 extends React.Component {
// 	constructor(){
// 		super();
// 		this.state= {
// 			a: 1
// 		}
// 	}
// 	handleClick(){
// 		this.state.a++;
// 		this.setState({a: this.state.a})
// 	}
// 	render() {
// 	return (
// 		<div onClick={this.handleClick.bind(this)}>
// 			{this.state.a}

// 		</div>
// 	)
// }
// }

// export default Lesson6;
import React from 'react';


const Lesson6 = () => {
	const [items, setItems] = React.useState([1,2,3,4,5]);
	const [value, setValue] = React.useState("");
	const handleClick = (event) => {
		console.log(items);
		return (setItems(items.concat({value})));
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		return (setItems(items.concat({value})));
	};
	const handleChange = (event) => {
		setValue(event.target.value);
		console.log("value = " + value);
	};
	const list = items.map((item,index) => {
		return( <li key={index}> {item} </li> )
	});
	return(
		<>
		<ul>
			{items.map((item,index) => {
				return( <li key={index}> {item} </li> )
			})}
		</ul>
		<form onSubmit={handleSubmit}>
			<input name="textToAdd" onChange={handleChange} />
			<input type="submit"/>
		</form>
		</>
	);
	
}

export default Lesson6;

