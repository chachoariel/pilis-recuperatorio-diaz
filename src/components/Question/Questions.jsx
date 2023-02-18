// import Question from "./Question"
// import './Questions.css'

// const Questions = ({}) =>{
//     return(
//         <div>
//             componente questions
//         </div>
//     )
// }
// export default Questions

import Question from "./Question";
import "./Questions.css"

const Questions = ({ questions }) =>{
    return(
        <div className='grid'>
            {questions.map((question) =>(
                <Question key={question.id} questionn = {question}/>  
            ))}

        </div>
    )
}
export default Questions;