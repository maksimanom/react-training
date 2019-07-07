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
	const list = items.map((item,index) => {
		return( <li key={index}> {item} </li> )
	});
	const handleClick = (event) => {
		setItems(items.push("kek"));
	};
	return(
		<>
		<ul>
			{list}
		</ul>
		<button name="addItemFromInput" onClick={handleClick}>Add item</button>
		</>
	);
	
}

export default Lesson6;

