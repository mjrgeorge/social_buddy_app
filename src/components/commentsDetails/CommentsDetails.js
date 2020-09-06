import React from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';

const CommentsDetails = (props) => {
    const {id, name, email, body} = props.comment;
    return (
        <div>
            <Card style={{ backgroundColor: '#a29bfe', margin: '10px 100px'}}>
           <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    Name: {name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    Email: {email}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    Comment: {body}
                </Typography>
            </CardContent>
        </Card>
        </div>
    );
};

export default CommentsDetails;