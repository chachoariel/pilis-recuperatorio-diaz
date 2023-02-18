import { useEffect, useState } from 'react';
import './App.css';
import Questions from './components/Question/Questions';
import { getQuestions } from './service';


function App() {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    getQuestions()
      .then((data) => setQuestions(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    
     <div className="App">
        <header>
          <h1>Trivia de preguntas</h1>
        </header>
        <div className='main-conteiner'>
          <Questions questions = {questions}/>
        </div>
      </div>
   
  );
}


export default App;
