import React, { useState, useEffect } from 'react'
import Questions from "../Questions"
import { Card, Button, Typography } from '@mui/material'
import "./Main.css"


const Main = () => {

    //This state is having the question from de QUESTIONS component
    //NOTE: In the span is printing de number actualQuestion + 1 because
    //starting from 0(cero) is a little bit weird.
    const [actualQuestion, setActualQuestion] = useState(0);

    //This state is saving the user answer's score;
    const [score, setScore] = useState(0);


    const [finished, setFinished] = useState(false);


    function handleAnswerSubmit(isCorrect, e) {

        //Adding score
        if (isCorrect) setScore(score + 1);

        //Adding question's style => Changing the color when it's correct or incorrect.
        e.target.classList.add(isCorrect ? "correct" : "incorrect")

        //Moving to the next question.
        if(actualQuestion === Questions.length - 1){
            setFinished(true);
        } else {
            setActualQuestion(actualQuestion + 1);
        }
    }


    return (
        <main>
            <Card className='principalCard' sx={{
                width: 600,
                height: 270,
                backgroundColor: '#ede0d4',
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            }}>
                <div className='leftSide'>
                    <div className='questionNumber'>
                        <span>Pregunta {actualQuestion + 1} de </span>{Questions.length}
                    </div>
                    <div className='questionTitle'>
                        {Questions[actualQuestion].title}
                    </div>
                </div>
                <div className='rightSide'>
                    {Questions[actualQuestion].options.map((ans) => (
                        <button
                            className='ansButton'
                            variant="outlined"
                            sx={{
                                width: 250,
                                height: 30
                            }}
                            key={ans.responseText}
                            onClick={(e) => handleAnswerSubmit(ans.isCorrect, e)}
                        >
                            {ans.responseText}
                        </button>
                    ))}
                </div>
            </Card>
        </main>
    )
}

export default Main