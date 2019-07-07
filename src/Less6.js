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
	const [value, setValue] = React.useState("PRIVET");
	const handleChange = (event) => {
		setValue(event.target.value);
	}
	return(
		<div>
			<input onChange={handleChange} value={value}/>
		</div>
	);
	
}

export default Lesson6;

