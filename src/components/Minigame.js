import { useState, useRef } from "react";
import {motion} from 'motion/react';
import '../pages/stylings/minigame.css';


const Minigame = () => {

    const age = Math.floor((new Date() - new Date('2000-12-07')) / (1000 * 3600 * 24 * 365.25));
    const button1Ref = useRef();
    const button2Ref = useRef();
    const button3Ref = useRef();
    const button4Ref = useRef();

    
    const [personalQuiz, setPersonalQuid] = useState([
        {question: 'How old am I?', answers: [{text: age, isCorrect: true}, {text: '20', isCorrect: false},{text:'25', isCorrect: false},{text: '28', isCorrect: false}]},
        {question: 'Do I know japanese?', answers: [{text: 'Definetely!', isCorrect: false}, {text: 'Not at all', isCorrect: false},{text:'Just the basics', isCorrect: true},{text: 'Like a native', isCorrect: false}]},
        {question: 'What Frontend Framework do I know?', answers: [{text: 'React', isCorrect: true}, {text: 'Vue', isCorrect: false},{text:'Angular', isCorrect: false},{text: 'Ember', isCorrect: false}]},
        {question: 'Where did I studied management?', answers: [{text: 'Bucharest', isCorrect: false}, {text: 'Iasi', isCorrect: false},{text:'Constanta', isCorrect: true},{text: 'Timisoara', isCorrect: false}]},
        {question: 'Am I the perfect candidate?', answers: [{text: 'Yes', isCorrect: true}, {text: 'Yes', isCorrect: true},{text:'Yes', isCorrect: true},{text: 'Yes', isCorrect: true}]}
    ])
    const [webDevQuiz, setWebDevQuiz] = useState([
        {
          question: "What is the Virtual DOM in React?",
          answers: [
            { text: "A virtual version of the DOM used for faster updates", isCorrect: true },
            { text: "A real-time simulation of the DOM", isCorrect: false },
            { text: "A separate browser window that handles the DOM", isCorrect: false },
            { text: "A copy of the real DOM used for debugging", isCorrect: false }
          ]
        },
        {
          question: "What is Redux in a React application?",
          answers: [
            { text: "To manage and centralize application state", isCorrect: true },
            { text: "To handle HTTP requests", isCorrect: false },
            { text: "To render UI components efficiently", isCorrect: false },
            { text: "To handle component lifecycle events", isCorrect: false }
          ]
        },
        {
          question: "What is the primary benefit of semantic HTML?",
          answers: [
            { text: "Improving accessibility and SEO", isCorrect: true },
            { text: "Reducing file size", isCorrect: false },
            { text: "Faster page load times", isCorrect: false },
            { text: "More readable JavaScript", isCorrect: false }
          ]
        },
        {
          question: "What is the main advantage of using Single-Page Applications (SPAs)?",
          answers: [
            { text: "Faster page transitions without full reloads", isCorrect: true },
            { text: "More efficient SEO performance", isCorrect: false },
            { text: "Increased browser compatibility", isCorrect: false },
            { text: "Automatic server-side rendering", isCorrect: false }
          ]
        },
        {
          question: "What is Server-Side Rendering (SSR)?",
          answers: [
            { text: "Rendering HTML on the server and sending it to the client", isCorrect: true },
            { text: "Rendering HTML on the client-side", isCorrect: false },
            { text: "Pre-rendering images for faster load times", isCorrect: false },
            { text: "Dynamically generating routes on the server", isCorrect: false }
          ]
        }
      ]);
      const [quizType, setQuizType] = useState(null);
      const [isStarted, setIsStarted] = useState(false);
      const [correctAnswers, setCorrectAnswers] = useState(0);
      const [wrongAsnwers, setWrongAnswers] = useState(0);
      const [currentQuestion, setCurrentQuestion] = useState(null);
      const [questions, setQuestions] = useState([])
      const [round, setRound] = useState(1);
      const [isFinished, setIsFinished] = useState(false);


      


      const startGame = (type) =>{
        setQuizType(type);
        setIsStarted(true);
        if(type==='personal'){
            setQuestions(personalQuiz);
            setCurrentQuestion(personalQuiz[0]);
        }else if(type==='web-dev'){
            setQuestions(webDevQuiz);
            setCurrentQuestion(webDevQuiz[0]);
        }
        
      }
      const applyButtonEffect = (button, type, index)=>{
        if(index <= 3){

          switch(button){
              case 1:
                  button1Ref?.current.classList.add(type==='wrong' ? 'wrong-answer' : 'correct-answer');
                  setTimeout(()=>{
                    if (button1Ref?.current) {
                    button1Ref.current.classList.remove(
                        type === 'wrong' ? 'wrong-answer' : 'correct-answer'
                    );
                }
              },1000);
                  break;
              case 2:
                  button2Ref?.current.classList.add(type==='wrong' ? 'wrong-answer' : 'correct-answer');
                  setTimeout(()=>{
                    if (button2Ref?.current) {
                    button2Ref.current.classList.remove(
                        type === 'wrong' ? 'wrong-answer' : 'correct-answer'
                    );
                }
              },1000);
                  break;
              case 3:
                  button3Ref?.current.classList.add(type==='wrong' ? 'wrong-answer' : 'correct-answer');
                  setTimeout(()=>{
                    if (button3Ref?.current) {
                    button3Ref.current.classList.remove(
                        type === 'wrong' ? 'wrong-answer' : 'correct-answer'
                    );
                }
              },1000);
                  break;
              case 4:
                  button4Ref?.current.classList.add(type==='wrong' ? 'wrong-answer' : 'correct-answer');
                  setTimeout(()=>{
                    if (button4Ref?.current) {
                    button4Ref.current.classList.remove(
                        type === 'wrong' ? 'wrong-answer' : 'correct-answer'
                    );
                }
              },1000);
                  break;
          }
        }
      }
      const clearEffectsForButtons = () =>{
        button1Ref.current.classList.remove('wrong-answer');
        button1Ref.current.classList.remove('right-answer');
        button2Ref.current.classList.remove('wrong-answer');
        button2Ref.current.classList.remove('right-answer');
        button3Ref.current.classList.remove('wrong-answer');
        button3Ref.current.classList.remove('right-answer');
        button4Ref.current.classList.remove('wrong-answer');
        button4Ref.current.classList.remove('right-answer');
      }
      const handleAnswerPick = (answer, index, buttonNo) =>{
        if(answer.isCorrect){
            setCorrectAnswers((correctAnswers)=>correctAnswers+=1);
            if(index < 4){
                clearEffectsForButtons();
                applyButtonEffect(buttonNo, 'correct', index);
                setCurrentQuestion(questions[index+1]);
            }else{
                finishGame()
            }
        }else if(!answer.isCorrect){
            setWrongAnswers((wrongAsnwers)=>wrongAsnwers+=1);
            if(index < 4){
              clearEffectsForButtons();
                applyButtonEffect(buttonNo, 'wrong', index);
                setCurrentQuestion(questions[index+1]);
            }else{
                finishGame()
            }
        }
      }
      const finishGame = () =>{
        setIsFinished(true);
        setIsStarted(false);
      }
      const restart = () =>{
        setIsStarted(false);
        setIsFinished(false);
        setWrongAnswers(0);
        setCorrectAnswers(0);
        setQuestions(null);
        setCurrentQuestion(null);
        setQuizType('');
      }

    return ( 
        <div className="minigame">
            <div className="header"><h3>QUIZ {quizType === 'personal' ? 'ABOUT ME' : ''}{ quizType === 'web-dev' ? 'ABOUT WEB DEV' : ''}</h3></div>
            <div className="game">
                
                {isFinished ? (
                    <div className="finished-game">
                        <h2>Game Over</h2>
                        <p>You got right {correctAnswers} out of 5 questions!</p>
                        <button className="quiz-button" onClick={restart}>Restart</button>
                    </div>
                ):(
                    !isStarted ? (<div className="start-screen">
                        <h1>Test your knowledge about</h1>
                        <button className="quiz-button" onClick={()=>startGame('personal')}>Me</button>
                        <button className="quiz-button" onClick={()=>startGame('web-dev')}>Web Dev</button>
                    </div>) : (
                        <div className="game-started">
                            <div className="score">
                                <p className="correct-score">{correctAnswers}</p>
                                <p>:</p>
                                <p className="wrong-score">{wrongAsnwers}</p>
                            </div>
                            <motion.div 
                                initial={{ opacity: 0, y: -50 }} 
                                whileInView={{ opacity: 1, y: 0 }}  
                                transition={{ duration: 0.5, ease: "easeOut" }}  
                                className="question-container">
                                <h3>{currentQuestion.question}</h3>
                            </motion.div>
                            <div className="answers-container">
                                <motion.button 
                                    initial={{ opacity: 0, x: -100 }} 
                                    whileInView={{ opacity: 1, x: 0 }}  
                                    transition={{ duration: 0.5, ease: "easeOut" }}  
                                    className="quiz-button" ref={button1Ref} onClick={()=>handleAnswerPick(currentQuestion.answers[0], questions.indexOf(currentQuestion),1)}>{currentQuestion.answers[0].text}</motion.button>
                               <motion.button 
                                    initial={{ opacity: 0, x: 100 }} 
                                    whileInView={{ opacity: 1, x: 0 }}  
                                    exit={{ opacity: 0, x: 100 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}  
                                    className="quiz-button" ref={button2Ref} onClick={()=>handleAnswerPick(currentQuestion.answers[1], questions.indexOf(currentQuestion),2)}>{currentQuestion.answers[1].text}</motion.button>
                                <motion.button 
                                    initial={{ opacity: 0, x: -100 }} 
                                    whileInView={{ opacity: 1, x: 0 }}  
                                    transition={{ duration: 0.5, ease: "easeOut" }}  
                                    className="quiz-button" ref={button3Ref} onClick={()=>handleAnswerPick(currentQuestion.answers[2], questions.indexOf(currentQuestion),3)}>{currentQuestion.answers[2].text}</motion.button>
                                <motion.button 
                                    initial={{ opacity: 0, x: 100 }} 
                                    whileInView={{ opacity: 1, x: 0 }}  
                                    transition={{ duration: 0.5, ease: "easeOut" }}  
                                    className="quiz-button" ref={button4Ref} onClick={()=>handleAnswerPick(currentQuestion.answers[3], questions.indexOf(currentQuestion),4)}>{currentQuestion.answers[3].text}</motion.button>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
     );
}
 
export default Minigame;