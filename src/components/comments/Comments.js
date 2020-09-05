import React, { useState, useEffect } from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';
import { useParams } from 'react-router-dom';


const Comments = () => {
        const {postId} = useParams();
        const [comments, setComments] = useState({});
        useEffect(()=>{
            const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
            fetch(url)
            .then(response => response.json())
            .then(data =>setComments(data[0]))
            .catch(error => console.log(error))
        }, [])
        const {id, name, email, body} = comments;
    return (
        <Card style={{ backgroundColor: '#a29bfe', marginLeft: '100px'}}>
           <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {id}. {name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {email}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    {body}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Comments;