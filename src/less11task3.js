import React from 'react';
import {Grid, Select, FormControl, InputLabel, MenuItem, OutlinedInput, TextField} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ArrowBack, ArrowForward } from "@material-ui/icons";

const questionsanswersFromServer = [
  { id: 0,
    question: "Capital of Ukraine?",
    rightAnswer: 1,
    answersArray:[
      {id: 0, answer: "Kharkiv"},
      {id: 1, answer: "Kyiv"},
      {id: 2, answer: "Lviv"},
    ]
  },
  { id: 1,
    question: "Capital of Russia?",
    rightAnswer: 0,
    answersArray: [
      { id: 0, answer: "Moscow" },
      { id: 1, answer: "Saint-Peterburg" },
      { id: 2, answer: "Khabarovsk" },
    ]
  },
  { id: 2,
    question: "Capital of Belarus?",
    rightAnswer: 0,
    answersArray: [
      { id: 0, answer: "Minsk" },
      { id: 1, answer: "Brest" },
      { id: 2, answer: "Vitebsk" },
    ]
  },
  {
    id: 3,
    question: "Capital of USA?",
    rightAnswer: 1,
    answersArray: [
      { id: 0, answer: "New York" },
      { id: 1, answer: "Vashington" },
      { id: 2, answer: "Texas" },
    ]
  }
];

const ViewCurrentQuestion = ({id, answer})=>{



  return(
    <>
      <FormControlLabel value={(id)} control={<Radio />} label={answer}/>
    </>
  )
}

const ViewQuestion = ({ questions, saveAnswer})=>{
  const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(3),
    },
    group: {
      margin: theme.spacing(1, 0),
    },
  }));
  const classes = useStyles();
  const [value, setValue] = React.useState(-1);
  const [currentQuestionNum, setCurrentQuestionNum] = React.useState(0);


  const handleChange = (event) => {
    setValue(parseInt(event.target.value));
    saveAnswer(currentQuestionNum, event.target.value);
    
  }
  const handleClick = (num) => {
    changePage(num)
  }
  const changePage = (num) => {
    if ((currentQuestionNum) === (questions.length - 1) && num === +1) {
      setCurrentQuestionNum(0);
      return 0;
    }
    if ((currentQuestionNum + num) === -1) {
      setCurrentQuestionNum(questions.length - 1);
      return 0;
    }
    setCurrentQuestionNum(currentQuestionNum + num)
  }
  

  return(
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h2>{questions[currentQuestionNum].question}</h2>
      </Grid>
      <Grid item>
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            aria-label="question"
            name={questions[currentQuestionNum].question}
            className={classes.group}
            value={(value)}
            onChange={handleChange}
          >
            {questions[currentQuestionNum].answersArray.map((item, index)=>{
              return (            
                <ViewCurrentQuestion id={item.id} answer={item.answer}/>
              )
            })}
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item>
        <ArrowBack onClick={() => handleClick(-1)} />
      </Grid>
      <Grid item>
        <ArrowForward onClick={() => handleClick(+1)} style={{ marginLeft: "50px" }} />
      </Grid>

    </Grid>
  )
}

//Test Results
const ViewCheckedAnswers = ({ qaArray, answersArray })=>{
  // const useStyles = makeStyles(theme => ({
  //   formControl: {
  //     margin: theme.spacing(3),
  //   },
  //   group: {
  //     margin: theme.spacing(1, 0),
  //   },
  // }));
  // const classes = useStyles();
  console.log(
    answersArray.map((item,index)=>{
      return item
    })
  );
  
  return(
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h2>Test done!</h2>
        </Grid>
        <Grid item>
          {qaArray.map((item, index)=>{
            if (item.id === answersArray[index].id){
              if (answersArray[index].answer===true){
                return <div>Test {index+1} Done. Right answer was: {item.answersArray[item.rightAnswer].answer}</div>
              } else {
                return <div>Test {index+1} Missed. Right answer was: {item.answersArray[item.rightAnswer].answer}.</div>
              }
            }
          })}
        </Grid>
      </Grid>
    </>
  )
}

const App3 = ()=> {
  const [qaArray, setQaArray] = React.useState(questionsanswersFromServer);
  const [answersArray, setAnswersArray] = React.useState([]);
  const [showedAnswers, setShowedAnswers] = React.useState(false);

  const saveAnswer = (idOfQuestion, answer)=>{
    let obj = {id: idOfQuestion, answer: parseInt(answer)};
    answersArray[idOfQuestion]=obj;
    setAnswersArray(answersArray.concat([]));
  }

  const handleClick = ()=>{    
    for (let i=0; i<qaArray.length; i++){
      // adding answers, that not passed
      if (answersArray[i]===undefined){
        let tmpObj = {id: i, answer: -1}
        answersArray[i] = tmpObj;
        setAnswersArray(answersArray.concat([]));
      }
      // answers that compared 
      if(qaArray[i].id===answersArray[i].id){
        if (qaArray[i].rightAnswer === answersArray[i].answer){
          let passedObj = {id: i, answer: true}
          answersArray[i] = passedObj;
        } else {
          let passedObj = { id: i, answer: false }
          answersArray[i] = passedObj;
        }
        setAnswersArray(answersArray.concat([]));
      }      
    }
    setShowedAnswers(true);
  }
  console.log(answersArray);
  
  return (
    <>
      { !showedAnswers ?
      <ViewQuestion questions={qaArray} saveAnswer={(idOfQuestion, answer) => saveAnswer(idOfQuestion, answer)}/>
        : <ViewCheckedAnswers qaArray={qaArray} answersArray={answersArray}/>
      }
      <button onClick={handleClick}> Pass the test </button>
    </>
  )
}
export default App3
