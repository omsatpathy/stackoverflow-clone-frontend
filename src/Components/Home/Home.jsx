import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Question from '../Forum/Question';

const Home = () => {
    const [questions, setQuestions] = useState([]);

    const fetchQuestions = async () => {
        try {

            const allQuestions = await axios.get(
                "http://127.0.0.1:5000/v1/question/all", {},
                {
                    headers: {
                        "Access-Control-Allow-Origin": true,
                    },
                }

            );
            const questions = await allQuestions?.data?.data?.questionData
            setQuestions(questions)

            console.log(questions)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchQuestions();
    }, [])

    return (
        <>
            {
                questions.map((question) => {
                    return (
                        <Question 
                        questionTitle={question.questionTitle}
                        questionDescription={question.questionDescription}
                        createdAt={question.createdAt}
                        questionId={question.questionId}
                        />
                    );
                })
            }
        </>
    )
}

export default Home;
