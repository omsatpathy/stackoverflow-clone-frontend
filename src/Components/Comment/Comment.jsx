import React from 'react'
import './Comment.css'

const Comment = ({commentText, commentId, createdAt}) => {
  return (
    <>
    <div className="comment-container">
        {commentText} - <span className='comment-meta'>{createdAt}</span>
    </div>
    </>
  )
}

export default Comment
