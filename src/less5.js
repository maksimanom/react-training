import React from 'react';

class Lesson5 extends React.Component {
  constructor() {
    super();
    this.state = {
      names: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']
    }
  }
  deleteItem(num){
    this.state.names.splice(num, 1);
    this.setState({names : this.state.names});
  }
  handleClick(event){
    console.log(event);
    const name = event.target.name;
    if(name === "addItem"){
      let text = "item added by pressing a button";
      this.state.names.push(text);
      this.setState({ names: this.state.names });
    }
  };

  render() {
    let list = this.state.names.map((item, index) => {
      return <li key={index}>{item} <button onClick={this.deleteItem.bind(this, index)}>delete me</button></li>
    });
    
    return (
      <div>
        <ul>
          {list}
        </ul>
        <button name="addItem"  onClick={this.handleClick.bind(this)}>Add item with handleClick</button>
        <button name="deleteLastItem" onClick={this.deleteItem.bind(this, this.state.names.length-1)}>Delete last item</button>
      </div>
    );
  }
}

export default Lesson5;