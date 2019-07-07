import React from 'react';
import ReactDOM from 'react-dom';

class Lesson5 extends React.Component {
  constructor() {
    super();
    this.state = {
      names: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']
    }
  }

  addItem() {
    let text = "item added by pressing a button";
    this.state.names.push(text);
    this.setState({ names: this.state.names });
  }
  deleteItem(num){
    this.state.names.splice(num, 1);
    this.setState({names : this.state.names});
  }

  render() {
    let list = this.state.names.map((item, index) => {
      return <li key={index}>{item} <button onClick={this.deleteItem.bind(this, index)}>delete me</button></li>
    });
    return (
      <div>
        <ul>
          {list}
        </ul>
        <button onClick={this.addItem.bind(this)}>Add item</button>
        <button onClick={this.deleteItem.bind(this, this.state.names.length-1)}>Delete last item</button>
      </div>
    );
  }
}

export default Lesson5;