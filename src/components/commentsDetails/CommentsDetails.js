import React from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';

const CommentsDetails = (props) => {
    const {name, email, body} = props.comment;

    return (
        <div>
            <Card style={{ backgroundColor: '#c7ecee', margin: '5px 150px'}}>
           <CardContent>
                <Typography variant="h5">
                    Name: {name}
                </Typography>
                <Typography variant="body2">
                    Email: {email}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    {body}
                </Typography>
            </CardContent>
        </Card>
        </div>
    );
};

export default CommentsDetails;