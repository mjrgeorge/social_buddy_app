import React from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';

const CommentsDetails = (props) => {
    const {id, name, email, body} = props.comment;

    return (
        <div style={{display: 'flex', margin: '5px 150px'}}>
            <div>
                <img style={{width: "50px", height: "50px", borderRadius: "50%", margin: "5px"}} src={`https://picsum.photos/200/300?random=${id}`} alt="PP"/>
            </div>
            <div>
                <Card style={{backgroundColor: '#c7ecee'}}>
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
        </div>
    );
};

export default CommentsDetails;