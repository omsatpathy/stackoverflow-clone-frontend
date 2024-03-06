import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Answer from '../Forum/Answer'
import { useSearchParams, useLocation } from 'react-router-dom'
import Question from '../Forum/Question'

const QuestionsAnswer = () => {
    const [answers, setAnswers] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation();
    const state = location.state;

    const id = searchParams.get("id");

    const fetchAnswers = async (questionId) => {
        try {
            const allAnswers = await axios({
                url: `http://127.0.0.1:5000/v1/answer/ques-ans/${id}`,
                method: "get",
                headers: {
                  "Access-Control-Allow-Origin": true,
                },
                data: {}
              });
            const answers = allAnswers?.data?.data?.answerData;
            setAnswers(answers);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAnswers();
    }, [])

    return (
        <>
            <Question
            questionTitle={state.questionTitle}
            questionDescription={state.questionDescription}
            createdAt={state.createdAt}
            className="question-in-answers-page"
            />
            {
                answers.map((answer) => {
                    return (
                        <Answer 
                        answerText={answer.answerText}
                        createdAt={answer.createdAt}
                        answerId={answer.answerId}
                        />
                    );
                })
            }
        </>
    )
}

export default QuestionsAnswer;

