import React from 'react';
import ReactDOM from 'react-dom';

class Lesson5 extends React.Component{
    constructor() {
		super();
		this.state = {items: [1, 2, 3, 4, 5]};
    }
    
    addItem(){
        this.state.items.push("+1 punkt");
        this.setState({items: this.state.items});
    }
    deleteItem(){
        this.state.items.splice(3, 1);
        this.setState({items: this.state.items});
    }

	render() {
		const list = this.state.items.map((item, index) => {
			return <li key={index}>{item}</li>;
		});

		return (
			<div>
				<ul>
                    <button onClick={this.addItem.bind(this)}>Add</button>
                    <button onClick={this.deleteItem.bind(this)}>Delete Item</button>
					{list}
				</ul>
			</div>
		);
	}
}

export default Lesson5;

ReactDOM.render(
    <Lesson5/>,
    document.getElementById('root')
);
