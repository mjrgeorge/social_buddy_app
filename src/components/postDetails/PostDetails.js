import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';
import Comments from '../comments/Comments';
const PostDetails = () => {
    const {postId} = useParams();
    const [posts, setPosts] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(err =>console.log(err))
    }, [])
    const {id, title, body} = posts;
    return (
        <Container fixed>
            <Card style={{ backgroundColor: '#6c5ce7', margin: '20px'}}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            {id}{title}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                                {body} 
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Comments postId = {id}></Comments>
      </Container>
    );
};

export default PostDetails;