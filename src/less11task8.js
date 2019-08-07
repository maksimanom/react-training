import React from 'react';
import './scss/less11task8.scss';

const Square = ({ value, changeSquare,i})=>{
  const handleClick = ()=>(
    changeSquare(i)
  )

  return(
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  )
}
  
const Board = ()=>{
  const [squares, setSquares] = React.useState([null, null, null, null, null, null, null, null, null]);
  const [xIsNext, setXIsNext] = React.useState(true);

  const changeSquare = (i)=>{
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i]= xIsNext ? "X" : "O";
    setSquares(squares.concat([]));
    setXIsNext(!xIsNext);
  }

  let renderSquare = (i) =>{  
    return <Square
    value={squares[i]} 
    changeSquare={(i) => changeSquare(i)}
    i={i}
    />
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
  return(
    <div>
      <div className="status"> {status} </div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

const App8 = ()=>{

  return(
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div> {/* status */} </div>
        <div> {/* TODO */} </div>
      </div>
    </div>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App8
