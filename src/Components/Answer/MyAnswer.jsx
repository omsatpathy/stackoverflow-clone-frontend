import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Answer from '../Forum/Answer'

const MyAnswer = () => {
    const [answers, setAnswers] = useState([]);

    const token = localStorage.getItem("token");

    const fetchAnswers = async (questionId) => {
        try {

            const allAnswers = await axios({
                url: "http://127.0.0.1:5000/v1/answer",
                method: "get",
                headers: {
                  "Access-Control-Allow-Origin": true,
                  Authorization: `Bearer ${token}`
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

export default MyAnswer;

