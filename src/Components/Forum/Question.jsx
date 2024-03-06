import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Forum.css'
import { useNavigate } from 'react-router-dom'

const Question = ({questionTitle, questionDescription, createdAt, questionId, className}) => {

    const navigate = useNavigate();

    const goToAnswerPage = async () => {
        navigate(`/answers/id/?id=${questionId}`, {
            state: {questionTitle, questionDescription, createdAt, questionId}
        })
    }

    return (
        <>
            <div className="question-container">
                <div 
                className={`question-title ${className}`}
                onClick={questionId ? goToAnswerPage : () => {}}
                >
                {questionTitle}
                </div>
                <div className={`question-description`}>{questionDescription}</div>
                <div className="question-meta">
                    <span>Asked on : {createdAt}</span>
                </div>
            </div>
        </>
    )
}

export default Question;
