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
    id: 2,
    question: "Capital of USA?",
    rightAnswer: 1,
    answersArray: [
      { id: 0, answer: "New York" },
      { id: 1, answer: "Vashington" },
      { id: 2, answer: "Texas" },
    ]
  }
];

const ViewQuestion = ({question, changePage})=>{
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
    group: {
      margin: theme.spacing(1, 0),
    },
  }));
  const classes = useStyles();
  const [value, setValue] = React.useState(-1);

  function handleChange(event) {
    setValue(parseInt(event.target.value)); 
  }
  const handleClick=(num)=>{
    changePage(num)    
  }

  return(
    <Grid container spacing={2}>
      <Grid item>
        <ArrowBack onClick={()=>handleClick(-1)}/>
      </Grid>
      <Grid item>
        <ArrowForward onClick={()=>handleClick(+1)}/>
      </Grid>
      <Grid item xs={12}>
        <h2>{question.question}</h2>
      </Grid>
      <Grid item>
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            aria-label="question"
            name="gender1"
            className={classes.group}
            value={value}
            onChange={handleChange}
          >
            {question.answersArray.map((item, index)=>{
              return (            
                  <FormControlLabel value={item.id} control={<Radio />} label={item.answer} />
              )
            })}
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  )
}

const App3 = ()=> {
  const [qaArray, setQaArray] = React.useState(questionsanswersFromServer);
  const [currentQuestionNum, setCurrentQuestionNum] = React.useState(0);
  
  const changePage = (num)=>{
    
    if ((currentQuestionNum)===(qaArray.length-1) && num===+1){
        setCurrentQuestionNum(0);
        return 0;
    }
    if ((currentQuestionNum+num)===-1) {
      setCurrentQuestionNum(qaArray.length-1);
      return 0;
    }
    setCurrentQuestionNum(currentQuestionNum + num)
  }

  return (
    <>
      {
        <ViewQuestion question={qaArray[currentQuestionNum]} changePage={(num)=>changePage(num)}/>
      }
    </>
  )
}
export default App3
