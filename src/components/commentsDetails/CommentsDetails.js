import React, { useState, useEffect } from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';

const CommentsDetails = (props) => {
    const {name, email, body} = props.comment;

    return (
        <div>
            <Card style={{ backgroundColor: '#a29bfe', margin: '5px 150px'}}>
           <CardContent>
                <Typography variant="h6">
                    Name: {name}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                    Email: {email}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    Comment: {body}
                </Typography>
            </CardContent>
        </Card>
        </div>
    );
};

export default CommentsDetails;