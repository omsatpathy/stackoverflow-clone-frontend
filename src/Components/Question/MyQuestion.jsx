import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Question from '../Forum/Question';

const MyQuestion = () => {
    const [questions, setQuestions] = useState([]);

    const token = localStorage.getItem("token");

    const fetchQuestions = async () => {
        try {

            const allQuestions = await axios({
              url: "http://127.0.0.1:5000/v1/question",
              method: "get",
              headers: {
                "Access-Control-Allow-Origin": true,
                Authorization: `Bearer ${token}`
              },
              data: {}
            });
            
            const questions = await allQuestions?.data?.data?.questionData
            setQuestions(questions)

            
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

export default MyQuestion;

