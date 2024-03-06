import React, { useEffect, useState } from 'react'
import './Forum.css'
import axios from 'axios';
import Comment from '../Comment/Comment';


const Answer = ({ answerText, answerId, createdAt, updatedAt }) => {

    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        try {

            const allComments = await axios({
              url: `http://127.0.0.1:5000/v1/comment/ans-comment/${answerId}`,
              method: "get",
              headers: {
                "Access-Control-Allow-Origin": true,
              },
              data: {}
            });
            console.log(allComments)
            const comments = await allComments?.data?.data?.commentData
            setComments(comments)

            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchComments();
    }, [])

    // console.log(comments)

    return (
        <>
            <div className="answer-container">
                <div className="answer-text">{answerText}</div>
                <div className="question-meta">
                    <span>Answered on : {createdAt}</span>
                </div>
                <div className='comments-container'>
                    {
                        comments.map((comment) => {
                            return (
                                <Comment
                                commentText={comment.commentText}
                                createdAt={comment.createdAt}
                                />
                            );
                        })
                    }
                </div>
            </div>            
        </>
    );
}

export default Answer
