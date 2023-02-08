// 3. After the quiz has been finished show the amount of correctly and wrongly attempted questions.
// 4. Also show the percentage obtained along with proper grade.
// I.e 90+ = A, 80+ =B under 50 fail etc
// 5. Attempt quiz again option.
const Result = ({answer, question}) => {
    // console.log(answer, question);
    let score = 0, per = 0, grade;
    const calculateResult = ()=> {
        // console.log(question[0].correct_answer);
        for (let i = 0; i < answer.length; i++) { 
            if (answer[i] === question[i].correct_answer) {
                score++;
            }
        }
        per = (score/10)*100;
        console.log(score, per);
        if (per >= 90) {
            grade = "A";
        }else
        if (per >= 80) {
            grade = "B";
        }else
        if (per >= 50) {
            grade = "C";
        }else{
            grade = "Fail";
        }
    }
    calculateResult()
    return (
    <div>
      <h1>Score {score}/10</h1>
      <br />
      <h2>Percentage: {per}%</h2>
      <h3> Grade {grade}</h3>

    </div>
  )
}

export default Result
