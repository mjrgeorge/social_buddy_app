import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
    const {id, title, body} = props.user;
    const history = useHistory();
    const handleButton = (postId)=>{
        const url = `/post/${postId}`;
        history.push(url);
    }
    return (
        <Container fixed>
            <Card style={{ backgroundColor: '#f6e58d', margin: '20px'}}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            {id}. {title}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                                {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick = {()=>handleButton(id)} size="small" color="primary">
                        See More
                    </Button>
                </CardActions>
            </Card>
      </Container>
    );
};

export default Post;