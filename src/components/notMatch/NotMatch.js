import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const NotMatch = () => {
    return (
        <Card style={{margin: '10%', textAlign: 'center'}}>
            <CardContent>
                <Typography gutterBottom variant="h1" component="div">404 Error</Typography>
                <Typography variant="body1" color="textSecondary" component="div"><h1>Sorry, Page Not Found</h1></Typography>
            </CardContent>
        </Card>
    );
};

export default NotMatch;