import React from 'react';

const questionsAnswersFromServer = [
  {id: 0, question: "Capital of Ukraine?", answer: "Kyiv"},
  {id: 1, question: "Capital of Russia?", answer: "Moscow"},
  {id: 2, question: "Capital of Belarus?", answer: "Minsk"},
  {id: 3, question: "Capital of Great Britain?", answer: "London"},
  {id: 4, question: "Capital of France?", answer: "Paris"}
];

const QuestionTable = ({ question, num, changeAnswerArray})=>{
  const answRef = React.useRef();

  const handleChange = ()=>{
    changeAnswerArray(num, answRef.current.value);
  }

  return(
    <tr>
      <td>{question}</td>
      <td> <input type="text" name={question} id={num} ref={answRef} onChange={handleChange}/> </td>
    </tr>
  )
}
const AnswerTable = ({ answersArray, questionArray})=>{
  console.log(questionArray);
  const [trueAnswer, setTrueAnswer] = React.useState(false);
  
  return(
    <>
      {questionArray.map((item, index)=>{
      return (
        <tr key={index}>
          <td>
            {item.question}
          </td>
          <td>
            {item.answer===answersArray[index] ? 
              <span style={{ color: "green" }}>{answersArray[index]}</span>
              :
              <span style={{ color: "red" }}>Wrong answer, true answer is : {item.answer}</span>
            }
          </td>
        </tr>
      )
    })}
    </>
  )
}

const App2 = ()=>{
  const [qaArray, setQaArray] = React.useState(questionsAnswersFromServer);
  const [answArray, setAnswArray] = React.useState([]);
  const [showedAnswers, setShowedAnswers] = React.useState(false);
  
  const changeAnswerArray = (num, answer)=>{
    answArray[num]=answer;
    setAnswArray(answArray.concat([]));
    
  } 
  const handleClick = ()=>{
    setShowedAnswers(true);
  }
  return(
    <table>
      <thead>
        <tr>
          <td>Question</td>
          <td>Answer</td>
        </tr>
      </thead>
      <tbody>
        { !showedAnswers ? 
          qaArray.map((item, index) => {
          return (
            <QuestionTable
            key={index}
            question={item.question}
            num={item.id}
            changeAnswerArray={(num, answer)=>changeAnswerArray(num, answer)} />
          )})
          : <AnswerTable answersArray={answArray} questionArray={qaArray}/>
        }
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td> <button onClick={handleClick}>Pass the test</button> </td>
        </tr>
      </tfoot>
    </table>
  )
}
export default App2
