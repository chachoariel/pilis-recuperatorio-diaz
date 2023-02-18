
import './Questions.css'


const Question = ({ questionn}) => {


    const {id,category, question, difficulty,questions, correctAnswer, incorrectAnswers} = questionn;



    return (
        <div className='palette-container'>
          <div className='question'>
            <h2>{question}</h2>
            <h3>{correctAnswer}</h3>
            <div>
            {incorrectAnswers.map((quest) => {
              return (
                <div
                  key={quest}
                  className='color'
                  style={{ backgroundColor: quest }}
                >
                  <span>{quest}</span>
                </div>
              );
            })
            
            }
            </div>
          </div>
          
        </div>
      );
}
export default Question;