import React from 'react';
import { Card } from '@material-ui/core';


const Comments = (props) => {
    const postId = props.postId;
    
    // https://jsonplaceholder.typicode.com/comments?postId=3
    return (
        <Card style={{ backgroundColor: '#a29bfe', marginLeft: '100px'}}>
            Please Comments Here.....
        </Card>

    );
};

export default Comments;