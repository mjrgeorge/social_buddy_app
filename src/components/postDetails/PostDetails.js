import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';
import Comments from '../comments/Comments';

const PostDetails = () => {
    const {postId} = useParams();
    const [posts, setPosts] = useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(response => response.json())
        .then(data =>setPosts(data))
        .catch(error => console.log(error))
    }, [])
    const {id, title, body} = posts;
    return (
        <Container fixed>
            <Card style={{ backgroundColor: '#a6a91e', margin: '20px'}}>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {id}. {title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
            </Card>
            <Comments></Comments>
      </Container>
    );
};

export default PostDetails;