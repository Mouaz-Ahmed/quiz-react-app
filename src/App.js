
import './App.css';
import {useState}  from 'react';
import Quiz from './components/Quiz';


function App() {
  const [quiz, setQuiz] = useState(false);
 
  if(quiz === false){
    return (
      <div className="App">
       
        <h1 className='h1'>Computer Science Quiz</h1>
        <button onClick={()=>setQuiz(true)} className="btn" >Start the Quiz</button>
      </div>
    )
  }
  if(quiz){
   return <Quiz />
  }
  
}


export default App;
