import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useEffect, useState } from "react";
import Options from "../Options";
import Result from "../Result";

let questionsIds = ["q1", "q2", "q3","q4","q5","q6","q7","q8", "q9", "q10" ];
let AnswerList = ["","","","","","","","","",""];

const Quiz = () => {

  // result showing result page.
  const [result, setResult] = useState(false);
  
  const [questions, setQuestions] = useState([]);
  
  // category: "Science: Computers"
  // correct_answer: "1GB"
  // difficulty: "easy"
  // incorrect_answers: Array(3)
  // 0: "512MB"
  // 1: "5GB"
  // 2: "Unlimited"
  // length: 3
  // [[Prototype]]: Array(0)
  // question: "When Gmail first launched, how much storage did it provide for your email?"
  // type: "multiple"

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = () => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((res) => setQuestions(res.results));
  };
  // console.log(questions);
  var x = 0;
//  Get answer array 

const getValue = (e) => {
    
  //  console.log(e.target.name);    
  for (let i = 0; i < questionsIds.length; i++) {
      if (e.target.name === questionsIds[i]) {
         AnswerList.splice(i,1, e.target.value)
      }
  }
};
 if (result) {

    return (
      <Result answer = {AnswerList} question = {questions} />
    );
 }else{

   return (
     <div className="Quiz-page">

      {questions.map((item) => {
        x++;
        return (
          <div key={x}>
            <h3>
              {x}. {item.question}
            </h3>
            <Options
              inAns={item.incorrect_answers}
              corrAns={item.correct_answer}
              radioName={x}
              getAnswer = {getValue}
              />
          </div>
        );
      })}

      <button
        onClick={()=>setResult(true)}
        >submit</button>
      
    </div>
  );
}
};

export default Quiz;
