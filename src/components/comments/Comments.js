import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentsDetails from '../commentsDetails/CommentsDetails';


const Comments = () => {
        const {postId} = useParams();
        const [comments, setComments] = useState([]);
        useEffect(()=>{
            const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
            fetch(url)
            .then(response => response.json())
            .then(data =>setComments(data))
            .catch(error => console.log(error))
        }, [])
    return (
        <div>
            <h1>Comments Loaded: {comments.length}</h1>
            {
                comments.map(comment =><CommentsDetails comment={comment} key = {comment.id}></CommentsDetails>)
            }
        </div>
    );
};

export default Comments;